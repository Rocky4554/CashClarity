"use client";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useUser } from '@clerk/nextjs';
import { getUserDetails, getAccountDetails } from '@/reduxStore/userSlice';

export function useUserData(options = {}) {
  const dispatch = useDispatch();
  const { user: clerkUser, isLoaded: clerkLoaded } = useUser();
  
  const userState = useSelector((state) => state.user);
  
  const {
    fetchUserDetails = true,
    fetchAccounts = true,
    userDetailsOptions = {},
  } = options;

  // 🔍 DEBUGGING: Log initial state and options
  console.log("🪝 useUserData hook called with options:", options);
  console.log("  📋 fetchUserDetails:", fetchUserDetails);
  console.log("  📋 fetchAccounts:", fetchAccounts);
  console.log("  📋 userDetailsOptions:", userDetailsOptions);

  // 🔍 DEBUGGING: Log Clerk user state
  console.log("🔐 Clerk user state:");
  console.log("  👤 clerkUser:", clerkUser);
  console.log("  📊 clerkUser exists:", !!clerkUser);
  console.log("  ⏳ clerkLoaded:", clerkLoaded);
  console.log("  🆔 clerkUser.id:", clerkUser?.id);

  // 🔍 DEBUGGING: Log Redux user state
  console.log("🏪 Redux user state:");
  console.log("  📊 Full userState:", userState);
  console.log("  🏦 accounts:", userState.accounts);
  console.log("  📊 accounts type:", typeof userState.accounts);
  console.log("  📊 accounts is array:", Array.isArray(userState.accounts));
  console.log("  📊 accounts length:", userState.accounts?.length);
  console.log("  ⏳ loading:", userState.loading);
  console.log("  ❌ error:", userState.error);
  console.log("  👑 isPro:", userState.isPro);

  // Fetch data when user is authenticated
  useEffect(() => {
    console.log("🔄 useUserData useEffect triggered:");
    console.log("  ⏳ clerkLoaded:", clerkLoaded);
    console.log("  👤 clerkUser exists:", !!clerkUser);
    console.log("  📋 fetchUserDetails:", fetchUserDetails);
    console.log("  📋 fetchAccounts:", fetchAccounts);

    if (clerkLoaded && clerkUser) {
      console.log("✅ Conditions met - dispatching actions");
      
      if (fetchUserDetails) {
        console.log("🚀 Dispatching getUserDetails with options:", userDetailsOptions);
        dispatch(getUserDetails(userDetailsOptions))
          .unwrap()
          .then((result) => {
            console.log("✅ getUserDetails successful:", result);
          })
          .catch((error) => {
            console.error("❌ getUserDetails failed:", error);
          });
      } else {
        console.log("⏭️ Skipping getUserDetails (fetchUserDetails = false)");
      }
      
      if (fetchAccounts) {
        console.log("🚀 Dispatching getAccountDetails");
        dispatch(getAccountDetails())
          .unwrap()
          .then((result) => {
            console.log("✅ getAccountDetails successful:", result);
            console.log("  📊 Result type:", typeof result);
            console.log("  📊 Result is array:", Array.isArray(result));
            console.log("  📊 Result length:", result?.length);
          })
          .catch((error) => {
            console.error("❌ getAccountDetails failed:", error);
          });
      } else {
        console.log("⏭️ Skipping getAccountDetails (fetchAccounts = false)");
      }
    } else {
      console.log("⏸️ Conditions not met - not dispatching actions");
      if (!clerkLoaded) {
        console.log("  ⏳ Clerk not loaded yet");
      }
      if (!clerkUser) {
        console.log("  👤 No clerk user");
      }
    }
  }, [clerkLoaded, clerkUser, dispatch, fetchUserDetails, fetchAccounts]);

  // 🔍 DEBUGGING: Log what's being returned
  const returnValue = {
    ...userState,
    isAuthenticated: !!clerkUser,
    clerkUser,
    isClerkLoaded: clerkLoaded,
  };

  console.log("🎯 useUserData returning:");
  console.log("  📊 Full return value:", returnValue);
  console.log("  🏦 accounts in return:", returnValue.accounts);
  console.log("  📊 accounts length in return:", returnValue.accounts?.length);
  console.log("  🔐 isAuthenticated:", returnValue.isAuthenticated);

  return returnValue;
}

// Alternative hook for components that only need user info
export function useUserInfo() {
  console.log("🪝 useUserInfo called");
  return useUserData({ fetchAccounts: false });
}

// Alternative hook for components that only need accounts
export function useUserAccounts() {
  console.log("🪝 useUserAccounts called");
  return useUserData({ fetchUserDetails: false });
}