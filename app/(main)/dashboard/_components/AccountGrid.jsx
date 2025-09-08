"use client";

import { Plus } from "lucide-react";
import { AccountCard } from "./account-card.jsx"
import { AccountCardShimmer } from "./AccountCardShimmer";
import { CreateAccountWrapper } from "@/components/drawer/create-account-drawe-wrapper";
import { useAccountCreation } from "@/hooks/useAccountCreation.jsx"
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export function AccountsGrid({ accounts, isLoading }) {
  const { 
    isCreatingAccount, 
    startAccountCreation, 
    stopAccountCreation 
  } = useAccountCreation(accounts);

  const handleCreateAccountSuccess = (newAccount) => {
    console.log('Account creation initiated:', newAccount);
    startAccountCreation();
  };

  // Show initial loading state
  if (isLoading && (!accounts || accounts.length === 0)) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
      {/* Add Account Card */}
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

      {/* Show shimmer when creating new account */}
      {isCreatingAccount && (
        <AccountCardShimmer key="creating-shimmer" />
      )}
    </div>
  );
}