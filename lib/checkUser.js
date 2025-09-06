import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  try {
    const clerkUser = await currentUser();

    if (!clerkUser) {
      console.warn("checkUser: No Clerk user found (unauthenticated request)");
      return null;
    }

    console.log("🔍 Checking user with Clerk ID:", clerkUser.id);

    const name = `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim();
    const email = clerkUser.emailAddresses?.[0]?.emailAddress;

    if (!email) {
      throw new Error("User email not found");
    }

    // First, check if a user exists with this email
    const existingByEmail = await db.user.findUnique({
      where: { email },
    });

    if (existingByEmail && existingByEmail.clerkUserId !== clerkUser.id) {
      // If email exists but clerkUserId is missing → link it
      return await db.user.update({
        where: { email },
        data: {
          clerkUserId: clerkUser.id,
          name: name || "Unknown User",
          imageUrl: clerkUser.imageUrl || "",
        },
      });
    }

    // Normal upsert if no conflict
    const loggedInUser = await db.user.upsert({
      where: { clerkUserId: clerkUser.id },
      update: {
        name: name || "Unknown User",
        email,
        imageUrl: clerkUser.imageUrl || "",
      },
      create: {
        clerkUserId: clerkUser.id,
        name: name || "Unknown User",
        email,
        imageUrl: clerkUser.imageUrl || "",
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

    throw new Error(`User verification failed: ${error.message}`);
  }
};
