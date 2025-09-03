// import { currentUser } from "@clerk/nextjs/server";
// import { db } from "./prisma";

// export const checkUser = async () => {
//   try {
//     const user = await currentUser();
    
//     if (!user) {
//       return null;
//     }

//     console.log('Checking user with Clerk ID:', user.id);

//     // First, try to find existing user
//     const loggedInUser = await db.user.findUnique({
//       where: {
//         clerkUserId: user.id,
//       },
//     });

//     if (loggedInUser) {
//       console.log('Found existing user:', loggedInUser.id);
//       return loggedInUser;
//     }

//     console.log('Creating new user...');
    
//     // Create new user if not found
//     const name = `${user.firstName || ''} ${user.lastName || ''}`.trim();
//     const email = user.emailAddresses?.[0]?.emailAddress;

//     if (!email) {
//       throw new Error('User email not found');
//     }

//     const newUser = await db.user.create({
//       data: {
//         clerkUserId: user.id,
//         name: name || 'Unknown User',
//         imageUrl: user.imageUrl || '',
//         email: email,
//       },
//     });

//     console.log('Created new user:', newUser.id);
//     return newUser;

//   } catch (error) {
//     console.error('checkUser error details:', {
//       message: error.message,
//       code: error.code,
//       stack: error.stack
//     });
    
//     // Handle specific Prisma errors
//     if (error.code === 'P1001') {
//       throw new Error('Database connection failed - check your DATABASE_URL');
//     }
    
//     if (error.message.includes('Tenant or user not found')) {
//       throw new Error('Database authentication failed - verify your connection string credentials');
//     }
    
//     // Re-throw the error so it can be handled upstream
//     throw new Error(`User verification failed: ${error.message}`);
//   }
// };

import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      console.warn("checkUser: No Clerk user found (unauthenticated request)");
      return null;
    }

    console.log("🔍 Checking user with Clerk ID:", user.id);

    const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();
    const email = user.emailAddresses?.[0]?.emailAddress;

    if (!email) {
      throw new Error("User email not found");
    }

    // ✅ Use upsert to avoid duplicate user creation
    const loggedInUser = await db.user.upsert({
      where: { clerkUserId: user.id },
      update: {
        name: name || "Unknown User",
        email,
        imageUrl: user.imageUrl || "",
      },
      create: {
        clerkUserId: user.id,
        name: name || "Unknown User",
        email,
        imageUrl: user.imageUrl || "",
      },
    });

    console.log("✅ User verified:", loggedInUser.id);
    return loggedInUser;
  } catch (error) {
    console.error("❌ checkUser error details:", {
      message: error.message,
      code: error.code,
      stack: error.stack,
    });

    // Handle specific Prisma errors
    if (error.code === "P1001") {
      throw new Error("Database connection failed - check your DATABASE_URL");
    }

    if (error.message.includes("Tenant or user not found")) {
      throw new Error(
        "Database authentication failed - verify your connection string credentials"
      );
    }

    // Re-throw the error so it can be handled upstream
    throw new Error(`User verification failed: ${error.message}`);
  }
};
