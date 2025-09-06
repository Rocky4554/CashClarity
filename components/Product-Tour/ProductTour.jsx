"use client";

import React, { useState, useEffect } from "react";
import Joyride from "react-joyride";
import { markTourSeen } from "@/actions/user"; // 👈 import server action

export default function ProductTour({ user }) {
  const [runTour, setRunTour] = useState(false);

  const steps = [
    {
      target: "body",
      placement: "center",
      content: (
        <div>
          <h2 className="font-bold text-lg mb-2">Welcome 👋</h2>
          <p>Welcome to your dashboard! Let’s take a quick tour to get you started.</p>
        </div>
      ),
      disableBeacon: true,
    },
    {
      target: ".add-account-card",
      content: "Click here to create a new account and get started. You can create multiple accounts as needed.",
      placement: "top",
    },
    {
      target: ".edit-budget-btn",
      content: "Use this button to edit your monthly budget.",
      placement: "top",
    },
    {
      target: ".account-btn",
      content: "Use this button to see all your account.",
      placement: "top",
    },
    {
      target: ".transaction-btn",
      content: "Click here to add transactions.",
      placement: "bottom",
    },
    {
      target: ".upgrade-btn",
      content: "Here you can upgrade to Pro User. You will get some extra features.",
      placement: "bottom",
    },
    {
      target: ".transaction-overview-card",
      content: "Here you can see all your most recent transactions.",
      placement: "auto",
    },
    {
      target: ".monthly-expense-breakdown",
      content: "Here you can see monthly breakdown of your expense.",
      placement: "right",
    },
    {
      target: ".contact-btn",
      content: "Click here to contact us for any query or support.",
      placement: "auto",
    },
    {
      target: "body",
      placement: "center",
      content: (
        <div>
          <h2 className="font-bold text-lg mb-2">You're all set 🎉</h2>
          <p>That’s the end of the tour. Start using the app happily 😌.</p>
        </div>
      ),
      disableBeacon: true,
    },
  ];

  useEffect(() => {
     console.log("ProductTour user:", user);
    if (user && user.hasSeenTour === false) {
      setRunTour(true);
    }
  }, [user]);

    // const handleTourEnd = () => {
  //   if (user?.id && typeof window !== "undefined") {
  //     localStorage.setItem(`seenTour_${user.id}`, "true");
  //   }
  //   setRunTour(false);

  //   // 👇 Scroll to top after finishing/skipping tour
  //   if (typeof window !== "undefined") {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // };

  const handleTourEnd = async () => {
    if (user?.id) {
      await markTourSeen(); // 👈 directly update DB
    }
    setRunTour(false);

    // Scroll to top
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Joyride
      steps={steps}
      run={runTour}
      continuous={true}
      showSkipButton={true}
      showProgress={true}
      scrollToFirstStep={true}
      scrollOffset={80}
      styles={{
        options: {
          primaryColor: "#2563eb",
          zIndex: 10000,
        },
      }}
      callback={(data) => {
        const { status } = data;
        if (["finished", "skipped"].includes(status)) {
          handleTourEnd();
        }
      }}
    />
  );
}
