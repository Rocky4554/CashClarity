// import { Suspense } from "react";
// import { getUserAccounts } from "@/actions/dashboard";
// import { getDashboardData } from "@/actions/dashboard";
// import { getCurrentBudget } from "@/actions/budget";
// import { AccountCard } from "./_components/account-card";
// import { CreateAccountDrawer } from "@/components/drawer/create-account-drawer";
// import { BudgetProgress } from "./_components/budget-progress";
// import { Card, CardContent } from "@/components/ui/card";
// import { Plus } from "lucide-react";
// import { DashboardOverview } from "./_components/transaction-overview";
// import { CreateAccountWrapper } from "../../../components/drawer/create-account-drawe-wrapper";
// import ProductTour from "./_components/ProductTourWrapper";
// import { db } from "@/lib/prisma";
// import { currentUser } from "@clerk/nextjs/server";

// export default async function DashboardPage() {
//   // const refreshUser = useRefreshUser()
//   const [accounts, transactions] = await Promise.all([
//     getUserAccounts(),
//     getDashboardData(),
//   ]);

//   const defaultAccount = accounts?.find((account) => account.isDefault);

//   //   Get budget for default account
//   let budgetData = null;
//   if (defaultAccount) {
//     budgetData = await getCurrentBudget(defaultAccount.id);
//   }

//    // 👉 fetch logged-in user with Clerk
//   const clerkUser = await currentUser();

//   let user = null;
//   if (clerkUser) {
//     user = await db.user.findUnique({
//       where: { clerkUserId: clerkUser.id },
//       select: {
//         id: true,
//         name: true,
//         hasSeenTour: true, // 👈 important for ProductTour
//       },
//     });
//   }


//   return (
//     <div className="space-y-8">
//       {/* Budget Progress */}
//       <BudgetProgress
//         initialBudget={budgetData?.budget}
//         currentExpenses={budgetData?.currentExpenses || 0}
//       />

//       {/* Dashboard Overview */}
//       <DashboardOverview
//         accounts={accounts}
//         transactions={transactions || []}
//       />

//       {/* Accounts Grid */}
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         <CreateAccountWrapper>
//           <Card className="add-account-card hover:shadow-md transition-shadow cursor-pointer border-dashed">
//             <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
//               <Plus className="h-10 w-10 mb-2" />
//               <p className="text-sm font-medium">Add New Account</p>
//             </CardContent>
//           </Card>
//         </CreateAccountWrapper>

//         {accounts.length > 0 &&
//           accounts?.map((account) => (
//             <AccountCard key={account.id} account={account} />
//           ))}
//       </div>
//         {/* Pass actual DB user to ProductTour */}
//       {user && <ProductTour user={user} />}
//     </div>
//   );
// }

//////////////// Shimer Loading Component ////////////////

// import { Suspense } from "react";
// import { getUserAccounts } from "@/actions/dashboard";
// import { getDashboardData } from "@/actions/dashboard";
// import { getCurrentBudget } from "@/actions/budget";
// import { AccountCard } from "./_components/account-card";
// import { CreateAccountDrawer } from "@/components/drawer/create-account-drawer";
// import { BudgetProgress } from "./_components/budget-progress";
// import { Card, CardContent } from "@/components/ui/card";
// import { Plus } from "lucide-react";
// import { DashboardOverview } from "./_components/transaction-overview";
// import { CreateAccountWrapper } from "../../../components/drawer/create-account-drawe-wrapper";
// import ProductTour from "./_components/ProductTourWrapper";
// import { db } from "@/lib/prisma";
// import { currentUser } from "@clerk/nextjs/server";
// import { 
//   BudgetProgressSkeleton, 
//   AccountsGridSkeleton, 
//   DashboardOverviewSkeleton 
// } from "@/components/ShimmerDashboardLaoding/loading-skeletons";

// // Separate async components for better loading states
// async function BudgetSection() {
//   const accounts = await getUserAccounts();
//   const defaultAccount = accounts?.find((account) => account.isDefault);
  
//   let budgetData = null;
//   if (defaultAccount) {
//     budgetData = await getCurrentBudget(defaultAccount.id);
//   }

//   return (
//     <BudgetProgress
//       initialBudget={budgetData?.budget}
//       currentExpenses={budgetData?.currentExpenses || 0}
//     />
//   );
// }

// async function OverviewSection() {
//   const [accounts, transactions] = await Promise.all([
//     getUserAccounts(),
//     getDashboardData(),
//   ]);

//   return (
//     <DashboardOverview
//       accounts={accounts}
//       transactions={transactions || []}
//     />
//   );
// }

// async function AccountsSection() {
//   const accounts = await getUserAccounts();
  
//   return (
//     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//       <CreateAccountWrapper>
//         <Card className="add-account-card hover:shadow-md transition-shadow cursor-pointer border-dashed">
//           <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
//             <Plus className="h-10 w-10 mb-2" />
//             <p className="text-sm font-medium">Add New Account</p>
//           </CardContent>
//         </Card>
//       </CreateAccountWrapper>

//       {accounts.length > 0 &&
//         accounts?.map((account) => (
//           <AccountCard key={account.id} account={account} />
//         ))}
//     </div>
//   );
// }

// async function ProductTourSection() {
//   const clerkUser = await currentUser();
  
//   let user = null;
//   if (clerkUser) {
//     user = await db.user.findUnique({
//       where: { clerkUserId: clerkUser.id },
//       select: {
//         id: true,
//         name: true,
//         hasSeenTour: true,
//       },
//     });
//   }

//   return user ? <ProductTour user={user} /> : null;
// }

// export default function DashboardPage() {
//   return (
//     <div className="space-y-8">
//       {/* Budget Progress with Shimmer */}
//       <Suspense fallback={<BudgetProgressSkeleton />}>
//         <BudgetSection />
//       </Suspense>

//       {/* Dashboard Overview with Shimmer */}
//       <Suspense fallback={<DashboardOverviewSkeleton />}>
//         <OverviewSection />
//       </Suspense>

//       {/* Accounts Grid with Shimmer */}
//       <Suspense fallback={<AccountsGridSkeleton />}>
//         <AccountsSection />
//       </Suspense>

//       {/* Product Tour */}
//       <Suspense fallback={null}>
//         <ProductTourSection />
//       </Suspense>
//     </div>
//   );
// }

///////////////////////////////
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
import { AccountsGrid } from "./_components/AccountGrid";
import {
  BudgetProgressSkeleton,
  AccountsGridSkeleton,
  DashboardOverviewSkeleton
} from "@/components/ShimmerDashboardLaoding/loading-skeletons";

// Separate async components for better loading states
async function BudgetSection() {
  const accounts = await getUserAccounts();
  const defaultAccount = accounts?.find((account) => account.isDefault);

  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  return (
    <BudgetProgress
      initialBudget={budgetData?.budget}
      currentExpenses={budgetData?.currentExpenses || 0}
    />
  );
}

async function OverviewSection() {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  return (
    <DashboardOverview
      accounts={accounts}
      transactions={transactions || []}
    />
  );
}

// Fixed AccountsSection - properly handle loading state
async function AccountsSection() {
  try {
    const accounts = await getUserAccounts();
    
    return (
      <AccountsGrid 
        accounts={accounts}
        isLoading={false} // Data is loaded on server
      />
    );
  } catch (error) {
    console.error('Error loading accounts:', error);
    // Return empty state or error state
    return (
      <AccountsGrid 
        accounts={[]}
        isLoading={false}
      />
    );
  }
}

async function ProductTourSection() {
  const clerkUser = await currentUser();

  let user = null;
  if (clerkUser) {
    user = await db.user.findUnique({
      where: { clerkUserId: clerkUser.id },
      select: {
        id: true,
        name: true,
        hasSeenTour: true,
      },
    });
  }

  return user ? <ProductTour user={user} /> : null;
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Budget Progress with Shimmer */}
      <Suspense fallback={<BudgetProgressSkeleton />}>
        <BudgetSection />
      </Suspense>

      {/* Dashboard Overview with Shimmer */}
      <Suspense fallback={<DashboardOverviewSkeleton />}>
        <OverviewSection />
      </Suspense>

      {/* Accounts Grid with Shimmer */}
      <Suspense fallback={<AccountsGridSkeleton />}>
        <AccountsSection />
      </Suspense>

      {/* Product Tour */}
      <Suspense fallback={null}>
        <ProductTourSection />
      </Suspense>
    </div>
  );
}