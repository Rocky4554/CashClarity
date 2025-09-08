"use client"

// _components/loading-skeletons.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from 'lucide-react';

// Budget Progress Shimmer
export function BudgetProgressSkeleton() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-3 w-full rounded-full" />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-20" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Account Card Shimmer
export function AccountCardSkeleton() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header with icon and menu */}
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
            <Skeleton className="h-8 w-8 rounded" />
          </div>
          
          {/* Balance */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-8 w-32" />
          </div>
          
          {/* Footer */}
          <div className="flex justify-between items-center pt-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Dashboard Overview Skeleton
export function DashboardOverviewSkeleton() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="w-full">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-4" />
                </div>
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Chart Area */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-8 w-24" />
            </div>
            <Skeleton className="h-[300px] w-full rounded" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Accounts Grid Skeleton
export function AccountsGridSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Create Account Card (always visible) */}
      <Card className="add-account-card hover:shadow-md transition-shadow cursor-pointer border-dashed">
        <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
          <Plus className="h-10 w-10 mb-2" />
          <p className="text-sm font-medium">Add New Account</p>
        </CardContent>
      </Card>
      
      {/* Skeleton Account Cards */}
      {Array.from({ length: 2 }).map((_, i) => (
        <AccountCardSkeleton key={i} />
      ))}
    </div>
  );
}