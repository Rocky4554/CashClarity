"use client";

import { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import { AccountCard } from "./account-card.jsx"
import { AccountCardShimmer } from "./AccountCardShimmer";
import { CreateAccountWrapper } from "@/components/drawer/create-account-drawe-wrapper";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export function AccountsGrid({ accounts, isLoading }) {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [pendingAccountId, setPendingAccountId] = useState(null);
  const previousAccountCountRef = useRef(accounts?.length || 0);

  // Track when a new account has actually been created on the server
  useEffect(() => {
    if (accounts && pendingAccountId) {
      const currentAccountCount = accounts.length;
      const previousAccountCount = previousAccountCountRef.current;
      
      // Check if we have a new account (increased count) or if we can find the real account
      const hasNewAccount = currentAccountCount > previousAccountCount;
      const realAccountExists = accounts.some(account => 
        account.id !== pendingAccountId && // Not the temporary ID
        !account.id.toString().startsWith('temp-') // Not a temp ID
      );

      if (hasNewAccount && realAccountExists && isCreatingAccount) {
        // New real account has arrived, stop shimmer
        setIsCreatingAccount(false);
        setPendingAccountId(null);
        console.log('Real account detected, stopping shimmer');
      }

      previousAccountCountRef.current = currentAccountCount;
    }
  }, [accounts, pendingAccountId, isCreatingAccount]);

  // Also add a fallback timeout in case something goes wrong
  useEffect(() => {
    if (isCreatingAccount) {
      const fallbackTimeout = setTimeout(() => {
        console.log('Fallback: Stopping shimmer after 15 seconds');
        setIsCreatingAccount(false);
        setPendingAccountId(null);
      }, 15000); // 15 second fallback

      return () => clearTimeout(fallbackTimeout);
    }
  }, [isCreatingAccount]);

  const handleCreateAccountSuccess = (newAccount) => {
    console.log('Optimistic account created:', newAccount);
    // Start shimmer state
    setIsCreatingAccount(true);
    setPendingAccountId(newAccount.id);
  };

  if (isLoading && (!accounts || accounts.length === 0)) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Add Account Card - always visible */}
        <Card className="add-account-card hover:shadow-md transition-shadow cursor-pointer border-dashed">
          <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
            <Plus className="h-10 w-10 mb-2" />
            <p className="text-sm font-medium">Add New Account</p>
          </CardContent>
        </Card>
        
        {/* Loading shimmer cards */}
        <AccountCardShimmer />
        <AccountCardShimmer />
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Add Account Card - wrapped with CreateAccountWrapper for functionality */}
      <CreateAccountWrapper onSuccess={handleCreateAccountSuccess}>
        <Card className="add-account-card hover:shadow-md transition-shadow cursor-pointer border-dashed">
          <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
            <Plus className="h-10 w-10 mb-2" />
            <p className="text-sm font-medium">Add New Account</p>
          </CardContent>
        </Card>
      </CreateAccountWrapper>
      
      {/* Render accounts */}
      {accounts && accounts.length > 0 && 
        accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))
      }

      {/* Show shimmer card when creating new account */}
      {isCreatingAccount && <AccountCardShimmer key="creating-shimmer" />}
    </div>
  );
}