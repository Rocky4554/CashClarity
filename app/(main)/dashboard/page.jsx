
import { Suspense } from "react";
import { getUserAccounts } from "@/actions/dashboard";
import { getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/drawer/create-account-drawer";
import { BudgetProgress } from "./_components/budget-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { DashboardOverview } from "./_components/transaction-overview";
import { CreateAccountWrapper } from "../../../components/drawer/create-account-drawe-wrapper";
import ProductTour from "./_components/ProductTourWrapper";
import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  const defaultAccount = accounts?.find((account) => account.isDefault);

  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  // 👉 fetch logged-in user with Clerk
  const clerkUser = await currentUser();

  let user = null;
  if (clerkUser) {
    user = await db.user.findUnique({
      where: { clerkUserId: clerkUser.id },
      select: {
        id: true,
        name: true,
        hasSeenTour: true, // 👈 important for ProductTour
      },
    });
  }

  return (
    <div className="space-y-8">

            {/* Accounts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountWrapper>
          <Card className="add-account-card hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountWrapper>

        {accounts.length > 0 &&
          accounts?.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
      </div>
      
      {/* Budget Progress */}
      <BudgetProgress
        initialBudget={budgetData?.budget}
        currentExpenses={budgetData?.currentExpenses || 0}
      />

      {/* Dashboard Overview */}
      <DashboardOverview
        accounts={accounts}
        transactions={transactions || []}
      />

      {/* Pass actual DB user to ProductTour */}
      {user && <ProductTour user={user} />}
    </div>
  );
}
