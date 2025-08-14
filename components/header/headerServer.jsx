// // components/HeaderServer.jsx
// import { getUserAccounts } from "@/actions/dashboard";
// import HeaderClient from "@/components/header/headerClient";
// import {getUserInfo} from "@/actions/user";

// export default async function HeaderServer() {
//   try {
//     // getUserAccounts already handles auth checking, so no need for checkUser()
    
//     const userInfo = await getUserInfo();
//      if(userInfo){
//       const accounts = await getUserAccounts();
//      }
    
//     if (process.env.NODE_ENV === 'development') {
//       console.log("Accounts fetched in HeaderServer:", accounts);
//     }

//     return <HeaderClient accounts={accounts} user={userInfo?.data} />;
//   } catch (error) {
//     console.error("HeaderServer error:", error);
    
//     // Handle different error types
//     if (error.message === "Unauthorized" || error.message === "User not found") {
//       // For auth errors, you might want to redirect or show login
//       // For now, return empty state
//       return <HeaderClient accounts={[]} />;
//     }
    
//     // For other errors, return empty state
//     return <HeaderClient accounts={[]} />;
//   }
// }

// ServerHeaderWrapper.js (Server Component)

/////////////////////////////////
import { checkUser } from "@/lib/checkUser";
import HeaderClient from "./headerClient"; // Your client component

export default async function HeaderServer() {
  await checkUser();
  return <HeaderClient />;
}