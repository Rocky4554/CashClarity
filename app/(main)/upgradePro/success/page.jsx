// // "use client";

// // import { useEffect, useState } from "react";
// // import { useSearchParams, useRouter } from "next/navigation";
// // import { CheckCircle2 } from "lucide-react";
// // import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import useRefreshUser from "@/reduxStore/hook/useRefreshUser";
// // import Loading from "@/components/spinLoader";
// // import { refreshUserData } from "@/app/lib/refreshUser";

// // export const dynamic = 'force-dynamic'

// // export default function SuccessPage() {
// //   const params = useSearchParams();
// //   const sessionId = params.get("session_id");
// //   const router = useRouter();
// //   const [session, setSession] = useState(null);
// //   const refreshUser = useRefreshUser();

// //   useEffect(() => {
// //     if (!sessionId) return;

// //     fetch(`/api/get-checkout-session?session_id=${sessionId}`)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setSession(data);
// //         refreshUser(); // ✅ Updates Redux store + refreshes server components
// //         refreshUserData();   // revalidates server components
// //       })
// //       .catch(console.error);
// //   }, [sessionId]);

// //   if (!session) {
// //     // return <p className="text-center py-12">Loading...</p>;
// //     return (
// //       // <div className="flex items-center justify-center h-screen">
// //       //   <Loading size="w-16 h-16" color="border-teal-500" />
// //       // </div>
// //       <div className="flex flex-col items-center justify-center h-screen bg-white">
// //       <Loading size="w-16 h-16" color="border-teal-500" />
// //       <p className="mt-4 text-lg text-gray-600 font-medium">Please wait...</p>
// //     </div>
// //     );
// //   }

// //   const formattedAmount = new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //   }).format(session.amount_total / 100);

// //   return (
// //     <div className="max-w-md mx-auto px-4 py-16">
// //       <Card className="space-y-4">
// //         <CardHeader className="text-center">
// //           <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
// //           <CardTitle>Payment Successful!</CardTitle>
// //         </CardHeader>

// //         <CardContent className="space-y-2">
// //           <p><strong>Transaction ID:</strong> {session.payment_intent}</p>
// //           <p><strong>Customer:</strong> {session.customer_details?.name ?? "—"}</p>
// //           <p><strong>Amount:</strong> {formattedAmount}</p>
// //           <p><strong>Status:</strong> {session.payment_status}</p>
// //         </CardContent>
// //       </Card>

// //       <p className="text-center text-sm text-gray-500 mt-4">
// //         Thank you for your purchase!
// //       </p>

// //       <div className="text-center mt-6">
// //         <Button onClick={() => router.push("/dashboard")} className="w-full">
// //           Return to dashboard
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // }

// //////////////////////

// "use client";

// // ✅ Force dynamic rendering (fixes Vercel build error)
// export const dynamic = "force-dynamic";


// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { CheckCircle2 } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import useRefreshUser from "@/reduxStore/hook/useRefreshUser";
// import Loading from "@/components/spinLoader";
// import { refreshUserData } from "@/app/lib/refreshUser";


// // ❌ SEO not needed here (optional, prevents indexing)
// // export const metadata = {
// //   robots: {
// //     index: false,
// //     follow: false,
// //   },
// // };

// export default function SuccessPage() {
//   const params = useSearchParams();
//   const sessionId = params.get("session_id");
//   const router = useRouter();
//   const [session, setSession] = useState(null);
//   const [error, setError] = useState(null);
//   const refreshUser = useRefreshUser();

//   useEffect(() => {
//     if (!sessionId) {
//       // If no sessionId, send user back to dashboard
//       router.push("/dashboard");
//       return;
//     }

//     fetch(`/api/get-checkout-session?session_id=${sessionId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.error) {
//           setError(data.error);
//           return;
//         }
//         setSession(data);
//         refreshUser();       // refresh Redux
//         refreshUserData();   // refresh server components
//       })
//       .catch(() => {
//         setError("Something went wrong. Please contact support.");
//       });
//   }, [sessionId, router]);

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-white">
//         <p className="text-red-500 font-medium">{error}</p>
//         <Button onClick={() => router.push("/dashboard")} className="mt-4">
//           Return to dashboard
//         </Button>
//       </div>
//     );
//   }

//   if (!session) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-white">
//         <Loading size="w-16 h-16" color="border-teal-500" />
//         <p className="mt-4 text-lg text-gray-600 font-medium">Please wait...</p>
//       </div>
//     );
//   }

//   const formattedAmount = new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//   }).format(session.amount_total / 100);

//   return (
//     <div className="max-w-md mx-auto px-4 py-16">
//       <Card className="space-y-4">
//         <CardHeader className="text-center">
//           <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
//           <CardTitle>Payment Successful!</CardTitle>
//         </CardHeader>

//         <CardContent className="space-y-2">
//           <p><strong>Transaction ID:</strong> {session.payment_intent}</p>
//           <p><strong>Customer:</strong> {session.customer_details?.name ?? "—"}</p>
//           <p><strong>Amount:</strong> {formattedAmount}</p>
//           <p><strong>Status:</strong> {session.payment_status}</p>
//         </CardContent>
//       </Card>

//       <p className="text-center text-sm text-gray-500 mt-4">
//         Thank you for your purchase!
//       </p>

//       <div className="text-center mt-6">
//         <Button onClick={() => router.push("/dashboard")} className="w-full">
//           Return to dashboard
//         </Button>
//       </div>
//     </div>
//   );
// }

export const dynamic = "force-dynamic"; // ✅ allowed here
// export const revalidate = 0;            // optional

import SuccessClient from "./successclient";

export default function SuccessPage() {
  return <SuccessClient />;
}

