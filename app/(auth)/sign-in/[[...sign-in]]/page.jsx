"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // If user is already signed in, redirect to dashboard
    if (isLoaded && isSignedIn && !isRedirecting) {
      setIsRedirecting(true);
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router, isRedirecting]);

  // Show loading while checking auth state
  if (!isLoaded) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-2 text-gray-600">Loading...</p>
      </div>
    );
  }

  // Show loading while redirecting after successful sign-in
  if (isSignedIn || isRedirecting) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        <p className="mt-2 text-gray-600">Signing you in...</p>
        <p className="text-sm text-gray-500">Redirecting to dashboard</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn 
        afterSignInUrl="/dashboard"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 transition-colors",
            footerAction: { display: "none" },
          }
        }}
        // Add this to handle the loading state during sign-in process
        onBeforeSignInComplete={() => {
          setIsRedirecting(true);
        }}
      />
    </div>
  );
}