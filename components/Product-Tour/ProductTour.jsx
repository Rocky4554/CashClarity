"use client";
import React, { useEffect } from "react";
import { markTourSeen } from "@/actions/user"; // server action
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export default function ProductTour({ user }) {
  useEffect(() => {
    if (user && user.hasSeenTour === false) {
      startTour();
    }
  }, [user]);

  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
      showButtons: ["next", "previous", "close"],
      nextBtnText: "Next →",
      prevBtnText: "← Back",
      doneBtnText: "Finish",
      overlayClickNext: false,
      onDestroyStarted: async () => {
        // called when finished or closed
        if (user?.id) {
          await markTourSeen(); // update DB
        }
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
    });

    driverObj.defineSteps([
      {
        element: "body",
        popover: {
          title: "Welcome 👋",
          description:
            "Welcome to your dashboard! Let's take a quick tour to get you started.",
          side: "center",
          align: "center",
        },
      },
      {
        element: ".add-account-card",
        popover: {
          title: "Create Account",
          description:
            "Click here to create a new account and get started. You can create multiple accounts as needed.",
          side: "top",
        },
      },
      {
        element: ".edit-budget-btn",
        popover: {
          title: "Edit Budget",
          description: "Use this button to edit your monthly budget.",
          side: "top",
        },
      },
      {
        element: ".account-btn",
        popover: {
          title: "Accounts",
          description: "Use this button to see all your accounts.",
          side: "top",
        },
      },
      {
        element: ".transaction-btn",
        popover: {
          title: "Transactions",
          description: "Click here to add transactions.",
          side: "bottom",
        },
      },
      {
        element: ".upgrade-btn",
        popover: {
          title: "Upgrade",
          description:
            "Here you can upgrade to Pro User. You will get some extra features.",
          side: "bottom",
        },
      },
      {
        element: ".transaction-overview-card",
        popover: {
          title: "Recent Transactions",
          description: "Here you can see all your most recent transactions.",
          side: "auto",
        },
      },
      {
        element: ".monthly-expense-breakdown",
        popover: {
          title: "Monthly Breakdown",
          description: "Here you can see monthly breakdown of your expenses.",
          side: "right",
        },
      },
      {
        element: ".contact-btn",
        popover: {
          title: "Contact Us",
          description: "Click here to contact us for any query or support.",
          side: "auto",
        },
      },
      {
        element: "body",
        popover: {
          title: "You're all set 🎉",
          description: "That's the end of the tour. Start using the app happily 😌.",
          side: "center",
          align: "center",
        },
      },
    ]);

    driverObj.drive();
  };

  return null; // driver.js doesn't need a component render
}