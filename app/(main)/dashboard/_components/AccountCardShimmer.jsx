"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function AccountCardShimmer() {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        {/* Account name and switch */}
        <Skeleton className="h-5 w-24 animate-shimmer" />
        <Skeleton className="h-5 w-10 rounded-full animate-shimmer" />
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-2">
            {/* Balance */}
            <Skeleton className="h-8 w-32 animate-shimmer" />
            {/* Account type */}
            <Skeleton className="h-4 w-28 animate-shimmer" />
          </div>

          <div className="flex flex-col items-end gap-2 space-y-1">
            {/* Edit button */}
            <Skeleton className="h-4 w-20 animate-shimmer" />
            {/* Add transaction button */}
            <Skeleton className="h-4 w-24 animate-shimmer" />
            {/* Delete button */}
            <Skeleton className="h-4 w-12 animate-shimmer" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between text-sm">
        {/* Income section */}
        <div className="flex items-center gap-1">
          <Skeleton className="h-4 w-4 animate-shimmer" />
          <Skeleton className="h-4 w-12 animate-shimmer" />
        </div>
        {/* Expense section */}
        <div className="flex items-center gap-1">
          <Skeleton className="h-4 w-4 animate-shimmer" />
          <Skeleton className="h-4 w-14 animate-shimmer" />
        </div>
      </CardFooter>
    </Card>
  );
}