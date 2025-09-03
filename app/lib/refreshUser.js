"use server";

import { revalidatePath } from "next/cache";

export async function refreshUserData() {
  revalidatePath("/dashboard");
  revalidatePath("/transactions");
  revalidatePath("/"); // in case your header is at root
  return { success: true };
}
