'use server'

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getUserInfo(options = {}) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const {
      includeTransactions = false,
      includeAccounts = false,
      includeBudgets = false,
      transactionLimit = 10,
      accountsWithBalance = true,
    } = options;

    // Base query
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      include: {
        // Conditionally include related data based on options
        transactions: includeTransactions ? {
          take: transactionLimit,
          orderBy: { createdAt: 'desc' },
          include: {
            account: {
              select: {
                name: true,
                type: true,
              }
            }
          }
        } : false,
        
        accounts: includeAccounts ? accountsWithBalance : false,
        
        budgets: includeBudgets ? {
          orderBy: { createdAt: 'desc' },
        } : false,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Calculate additional stats
    const stats = {
      totalTransactions: user.transactionCount,
      isPro: user.isPro,
      accountsCount: includeAccounts ? user.accounts?.length || 0 : await db.account.count({
        where: { userId: user.id }
      }),
      budgetsCount: includeBudgets ? user.budgets?.length || 0 : await db.budget.count({
        where: { userId: user.id }
      }),
    };

    // If accounts are included, calculate total balance
    if (includeAccounts && user.accounts) {
      stats.totalBalance = user.accounts.reduce((sum, account) => {
        return sum + account.balance.toNumber();
      }, 0);
    }

    return {
      success: true,
      data: {
        id: user.id,
        clerkUserId: user.clerkUserId,
        email: user.email,
        name: user.name,
        imageUrl: user.imageUrl,
        isPro: user.isPro,
        transactionCount: user.transactionCount,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        stats,
        ...(includeTransactions && { transactions: user.transactions }),
        ...(includeAccounts && { accounts: user.accounts }),
        ...(includeBudgets && { budgets: user.budgets }),
      }
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateUserProStatus(sessionId, userId) {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    // Find the user by Clerk user ID
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Check if user is already Pro to avoid unnecessary updates
    if (user.isPro) {
      console.log("User is already Pro:", user.email || user.id);
      return { success: true, user, alreadyPro: true };
    }

    // Update user to Pro status
    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: {
        isPro: true,
        // Store the session ID for record keeping
        stripeSessionId: sessionId,
        // Store upgrade date
        proUpgradeDate: new Date(),
      },
    });

    revalidatePath("/dashboard");
    revalidatePath("/transactions");

    console.log("User upgraded to Pro:", updatedUser.email || updatedUser.id);
    
    return { success: true, user: updatedUser, upgraded: true };
  } catch (error) {
    console.error("Error updating user pro status:", error);
    return { success: false, error: error.message };
  }
}

export async function markTourSeen() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    // Find user in DB by clerkUserId
    const user = await db.user.findUnique({
       where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    // Update flag
    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: { hasSeenTour: true },
    });

    // Revalidate paths where user info matters
    revalidatePath("/dashboard");
    revalidatePath("/");

    return { success: true, data: updatedUser };
  } catch (error) {
    return { success: false, error: error.message };
  }
}