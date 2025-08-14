"use client";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getUserDetails, getAccountDetails } from "@/reduxStore/userSlice";

function useRefreshUser() {
  const router = useRouter();
  const dispatch = useDispatch();

  const refreshUser = async () => {
    try {
      // 1. Refresh Redux state - both user details and accounts
      await Promise.all([
        dispatch(getUserDetails()),
        // dispatch(getAccountDetails()) // ADD THIS LINE
      ]);
      
      // console.log("✅ Redux state refreshed (user + accounts)");
      
      // // 2. Refresh Server Components
      // router.refresh();
      
      console.log("✅ Server components refreshed");
    } catch (error) {
      console.error("❌ Error refreshing user data:", error);
    }
  };

  return refreshUser;
}

export default useRefreshUser;