import arcjet, { createMiddleware, detectBot, shield } from "@arcjet/next";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

// Create Arcjet middleware
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  // characteristics: ["userId"], // Track based on Clerk userId
  rules: [
    // Shield protection for content and security
    shield({
      mode: "LIVE",
    }),
    detectBot({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        "GO_HTTP", // For Inngest
        // See the full list at https://arcjet.com/bot-list
      ],
    }),
  ],
});

// Create base Clerk middleware
const clerk = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return NextResponse.next();
});

// Chain middlewares - ArcJet runs first, then Clerk
export default createMiddleware(aj, clerk);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};


/////////////

// // import arcjet, { createMiddleware, detectBot, protect } from "@arcjet/next";
// // import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// // import { NextResponse } from "next/server";

// // const isProtectedRoute = createRouteMatcher([
// //   "/dashboard(.*)",
// //   "/account(.*)",
// //   "/transaction(.*)",
// // ]);

// // // Arcjet setup
// // const aj = arcjet({
// //   key: process.env.ARCJET_KEY,
// //   rules: [
// //     protect({
// //       mode: "LIVE",
// //     }),
// //     detectBot({
// //       mode: "LIVE",
// //       allow: ["CATEGORY:SEARCH_ENGINE", "GO_HTTP"],
// //     }),
// //   ],
// // });

// // // Clerk setup
// // const clerk = clerkMiddleware(async (auth, req) => {
// //   const { userId } = await auth();

// //   if (!userId && isProtectedRoute(req)) {
// //     const { redirectToSignIn } = await auth();
// //     return redirectToSignIn();
// //   }

// //   return NextResponse.next();
// // });

// // // ✅ Run Clerk first, then Arcjet
// // export default createMiddleware(clerk, aj);

// // export const config = {
// //   matcher: [
// //     // Exclude _next, static files, AND favicons
// //     "/((?!_next|.*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ico|ttf|woff2?|csv|docx?|xlsx?|zip|webmanifest)).*)",
// //     "/(api|trpc)(.*)",
// //   ],
// // };

// /////////////////////////////

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// // Define which routes require auth
// const isProtectedRoute = createRouteMatcher([
//   "/dashboard(.*)",
//   "/account(.*)",
//   "/transaction(.*)",
// ]);

// export default clerkMiddleware(async (auth, req) => {
//   const { userId } = await auth();

//   if (!userId && isProtectedRoute(req)) {
//     const { redirectToSignIn } = await auth();
//     return redirectToSignIn();
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     // Exclude _next, static files, favicons etc.
//     "/((?!_next|.*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ico|ttf|woff2?|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

