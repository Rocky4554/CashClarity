"use client";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { getAccountDetails } from "@/reduxStore/userSlice";

function useRefreshAccounts() {
  const dispatch = useDispatch();

  // Use useCallback to memoize the function and prevent infinite re-renders
  const refreshAccounts = useCallback(async () => {
    try {
      console.log("🔄 Refreshing accounts only...");
      await dispatch(getAccountDetails());
      console.log("✅ Accounts refreshed successfully");
    } catch (error) {
      console.error("❌ Error refreshing accounts:", error);
    }
  }, [dispatch]); // Only depend on dispatch, which is stable

  return refreshAccounts;
}

export default useRefreshAccounts;