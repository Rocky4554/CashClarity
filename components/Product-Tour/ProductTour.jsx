// // "use client";
// // import React, { useEffect } from "react";
// // import { markTourSeen } from "@/actions/user"; // server action
// // import { driver } from "driver.js";
// // import "driver.js/dist/driver.css";

// // export default function ProductTour({ user }) {
// //   useEffect(() => {
// //     if (user && user.hasSeenTour === false) {
// //       startTour();
// //     }
// //   }, [user]);

// //   const startTour = () => {
// //     const driverObj = driver({
// //       showProgress: true,
// //       showButtons: ["next", "previous", "close"],
// //       nextBtnText: "Next →",
// //       prevBtnText: "← Back",
// //       doneBtnText: "Finish",
// //       overlayClickNext: false,
// //       onDestroyStarted: async () => {
// //         // called when finished or closed
// //         if (user?.id) {
// //           await markTourSeen(); // update DB
// //         }
// //         if (typeof window !== "undefined") {
// //           window.scrollTo({ top: 0, behavior: "smooth" });
// //         }
// //       },
// //     });

// //     driverObj.defineSteps([
// //       {
// //         element: "body",
// //         popover: {
// //           title: "Welcome 👋",
// //           description:
// //             "Welcome to your dashboard! Let's take a quick tour to get you started.",
// //           side: "center",
// //           align: "center",
// //         },
// //       },
// //       {
// //         element: ".add-account-card",
// //         popover: {
// //           title: "Create Account",
// //           description:
// //             "Click here to create a new account and get started. You can create multiple accounts as needed.",
// //           side: "top",
// //         },
// //       },
// //       {
// //         element: ".edit-budget-btn",
// //         popover: {
// //           title: "Edit Budget",
// //           description: "Use this button to edit your monthly budget.",
// //           side: "top",
// //         },
// //       },
// //       {
// //         element: ".account-btn",
// //         popover: {
// //           title: "Accounts",
// //           description: "Use this button to see all your accounts.",
// //           side: "top",
// //         },
// //       },
// //       {
// //         element: ".transaction-btn",
// //         popover: {
// //           title: "Transactions",
// //           description: "Click here to add transactions.",
// //           side: "bottom",
// //         },
// //       },
// //       {
// //         element: ".upgrade-btn",
// //         popover: {
// //           title: "Upgrade",
// //           description:
// //             "Here you can upgrade to Pro User. You will get some extra features.",
// //           side: "bottom",
// //         },
// //       },
// //       {
// //         element: ".transaction-overview-card",
// //         popover: {
// //           title: "Recent Transactions",
// //           description: "Here you can see all your most recent transactions.",
// //           side: "auto",
// //         },
// //       },
// //       {
// //         element: ".monthly-expense-breakdown",
// //         popover: {
// //           title: "Monthly Breakdown",
// //           description: "Here you can see monthly breakdown of your expenses.",
// //           side: "right",
// //         },
// //       },
// //       {
// //         element: ".contact-btn",
// //         popover: {
// //           title: "Contact Us",
// //           description: "Click here to contact us for any query or support.",
// //           side: "auto",
// //         },
// //       },
// //       {
// //         element: "body",
// //         popover: {
// //           title: "You're all set 🎉",
// //           description: "That's the end of the tour. Start using the app happily 😌.",
// //           side: "center",
// //           align: "center",
// //         },
// //       },
// //     ]);

// //     driverObj.drive();
// //   };

// //   return null; // driver.js doesn't need a component render
// // }

// /////////////////////
// // "use client";
// // import React, { useEffect } from "react";
// // import { markTourSeen } from "@/actions/user"; // server action

// // export default function ProductTour({ user }) {
// //   useEffect(() => {
// //     if (user && user.hasSeenTour === false) {
// //       startTour();
// //     }
// //   }, [user]);

// //   const startTour = async () => {
// //     try {
// //       // Small delay to ensure DOM is fully loaded
// //       await new Promise(resolve => setTimeout(resolve, 500));
      
// //       // Dynamic import to handle SSR
// //       const { driver } = await import("driver.js");
// //       await import("driver.js/dist/driver.css");

// //       const driverObj = driver({
// //         showProgress: true,
// //         nextBtnText: "Next →",
// //         prevBtnText: "← Back",
// //         doneBtnText: "Finish",
// //         overlayClickNext: false,
// //         onDestroyed: async () => {
// //           // called when finished or closed
// //           if (user?.id) {
// //             await markTourSeen(); // update DB
// //           }
// //           if (typeof window !== "undefined") {
// //             window.scrollTo({ top: 0, behavior: "smooth" });
// //           }
// //         },
// //       });

// //       // Use highlight() method for individual steps or drive() with steps array
// //       driverObj.drive([
// //         {
// //           element: "body",
// //           popover: {
// //             title: "Welcome 👋",
// //             description:
// //               "Welcome to your dashboard! Let's take a quick tour to get you started.",
// //             side: "center",
// //             align: "center",
// //           },
// //         },
// //         {
// //           element: ".add-account-card",
// //           popover: {
// //             title: "Create Account",
// //             description:
// //               "Click here to create a new account and get started. You can create multiple accounts as needed.",
// //             side: "top",
// //           },
// //         },
// //         {
// //           element: ".edit-budget-btn",
// //           popover: {
// //             title: "Edit Budget",
// //             description: "Use this button to edit your monthly budget.",
// //             side: "top",
// //           },
// //         },
// //         {
// //           element: ".account-btn",
// //           popover: {
// //             title: "Accounts",
// //             description: "Use this button to see all your accounts.",
// //             side: "top",
// //           },
// //         },
// //         {
// //           element: ".transaction-btn",
// //           popover: {
// //             title: "Transactions",
// //             description: "Click here to add transactions.",
// //             side: "bottom",
// //           },
// //         },
// //         {
// //           element: ".upgrade-btn",
// //           popover: {
// //             title: "Upgrade",
// //             description:
// //               "Here you can upgrade to Pro User. You will get some extra features.",
// //             side: "bottom",
// //           },
// //         },
// //         {
// //           element: ".transaction-overview-card",
// //           popover: {
// //             title: "Recent Transactions",
// //             description: "Here you can see all your most recent transactions.",
// //             side: "auto",
// //           },
// //         },
// //         {
// //           element: ".monthly-expense-breakdown",
// //           popover: {
// //             title: "Monthly Breakdown",
// //             description: "Here you can see monthly breakdown of your expenses.",
// //             side: "right",
// //           },
// //         },
// //         {
// //           element: ".contact-btn",
// //           popover: {
// //             title: "Contact Us",
// //             description: "Click here to contact us for any query or support.",
// //             side: "auto",
// //           },
// //         },
// //         {
// //           element: "body",
// //           popover: {
// //             title: "You're all set 🎉",
// //             description: "That's the end of the tour. Start using the app happily 😌.",
// //             side: "center",
// //             align: "center",
// //           },
// //         },
// //       ]);
// //     } catch (error) {
// //       console.error("Error initializing driver.js:", error);
// //     }
// //   };

// //   return null; // driver.js doesn't need a component render
// // }
// "use client";

// import React, { useState, useEffect } from "react";
// import Joyride, { STATUS, ACTIONS, EVENTS } from "react-joyride";
// import { markTourSeen } from "@/actions/user";

// export default function ProductTour({ user }) {
//   const [runTour, setRunTour] = useState(false);
//   const [steps, setSteps] = useState([]);

//   useEffect(() => {
//     if (!user || user.hasSeenTour) return;

//     const allSteps = [
//       {
//         target: "body",
//         placement: "center",
//         content: (
//           <div>
//             <h2 className="font-bold text-lg mb-2">Welcome 👋</h2>
//             <p>Welcome to your dashboard! Let’s take a quick tour to get you started.</p>
//           </div>
//         ),
//         disableBeacon: true,
//       },
//       {
//         target: ".add-account-card",
//         content:
//           "Click here to create a new account and get started. You can create multiple accounts as needed.",
//         placement: "top",
//       },
//       {
//         target: ".edit-budget-btn",
//         content: "Use this button to edit your monthly budget.",
//         placement: "top",
//       },
//       {
//         target: ".account-btn",
//         content: "Use this button to see all your accounts.",
//         placement: "top",
//       },
//       {
//         target: ".transaction-btn",
//         content: "Click here to add transactions.",
//         placement: "bottom",
//       },
//       {
//         target: ".upgrade-btn",
//         content: "Here you can upgrade to Pro User. You’ll get extra features.",
//         placement: "bottom",
//       },
//       {
//         target: ".transaction-overview-card",
//         content: "Here you can see all your most recent transactions.",
//         placement: "auto",
//       },
//       {
//         target: ".monthly-expense-breakdown",
//         content: "Here you can see monthly breakdown of your expense.",
//         placement: "right",
//       },
//       {
//         target: ".contact-btn",
//         content: "Click here to contact us for any query or support.",
//         placement: "auto",
//       },
//       // ⏩ last step (shown after scroll to top)
//       {
//         target: "body",
//         placement: "center",
//         content: (
//           <div>
//             <h2 className="font-bold text-lg mb-2">You're all set 🎉</h2>
//             <p>That’s the end of the tour. Start using the app happily 😌.</p>
//           </div>
//         ),
//         disableBeacon: true,
//       },
//     ];

//     const safeSteps = allSteps.filter(
//       (step) => step.target === "body" || document.querySelector(step.target)
//     );

//     setSteps(safeSteps);
//     setRunTour(true);
//   }, [user]);

//   const handleTourEnd = async () => {
//     try {
//       if (user?.id) {
//         await markTourSeen();
//       }
//     } catch (err) {
//       console.error("Failed to update tour status:", err);
//     }
//     setRunTour(false);

//     if (typeof window !== "undefined") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   return (
//     <Joyride
//       steps={steps}
//       run={runTour}
//       continuous
//       showSkipButton
//       showProgress
//       scrollToFirstStep
//       scrollOffset={80}
//       spotlightPadding={8}
//       styles={{
//         options: {
//           primaryColor: "#2563eb",
//           zIndex: 9999,
//         },
//       }}
//       callback={(data) => {
//         const { status, index, action, type } = data;

//         // ✅ When leaving the contact-btn step
//         if (
//           index === steps.findIndex((s) => s.target === ".contact-btn") &&
//           type === EVENTS.STEP_AFTER &&
//           action === ACTIONS.NEXT
//         ) {
//           if (typeof window !== "undefined") {
//             window.scrollTo({ top: 0, behavior: "smooth" });
//           }
//         }

//         // ✅ End of tour
//         if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
//           handleTourEnd();
//         }
//       }}
//     />
//   );
// }


///////////////


"use client";
import React, { useState, useEffect } from "react";
import Joyride from "react-joyride";
import { markTourSeen } from "@/actions/user";

export default function ProductTour({ user }) {
  const [runTour, setRunTour] = useState(false);
  const [tourSteps, setTourSteps] = useState([]);

  useEffect(() => {
    if (user && user.hasSeenTour === false) {
      // Wait for DOM to be ready
      const timer = setTimeout(() => {
        initializeTour();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [user]);

  const initializeTour = () => {
    // Define all possible steps
    const allSteps = [
      {
        target: "body",
        content: (
          <div>
            <h3>Welcome to Your Dashboard! 👋</h3>
            <p>Let's take a quick tour to help you get started. We'll show you the key features and how to use them effectively.</p>
          </div>
        ),
        placement: "center",
        disableBeacon: true,
      },
      {
        target: ".add-account-card",
        content: (
          <div>
            <h3>Create Your First Account</h3>
            <p>Start by creating a new account here. You can create multiple accounts for different purposes - checking, savings, credit cards, etc.</p>
          </div>
        ),
        placement: "top",
      },
      {
        target: ".edit-budget-btn",
        content: (
          <div>
            <h3>Set Your Budget</h3>
            <p>Click here to set up your monthly budget. This helps you track your spending and stay on target with your financial goals.</p>
          </div>
        ),
        placement: "top",
      },
      {
        target: ".account-btn",
        content: (
          <div>
            <h3>Manage Accounts</h3>
            <p>View and manage all your accounts from here. You can see balances, edit details, and more.</p>
          </div>
        ),
        placement: "top",
      },
      {
        target: ".transaction-btn",
        content: (
          <div>
            <h3>Add Transactions</h3>
            <p>Record your income and expenses here. Keep track of every transaction to maintain accurate financial records.</p>
          </div>
        ),
        placement: "bottom",
      },
      {
        target: ".transaction-overview-card",
        content: (
          <div>
            <h3>Recent Transactions</h3>
            <p>Here you can see your most recent transactions at a glance. Quick access to your latest financial activity.</p>
          </div>
        ),
        placement: "left",
      },
      {
        target: ".monthly-expense-breakdown",
        content: (
          <div>
            <h3>Monthly Breakdown</h3>
            <p>This chart shows you how your expenses are distributed across different categories. Great for understanding your spending patterns.</p>
          </div>
        ),
        placement: "right",
      },
      {
        target: ".upgrade-btn",
        content: (
          <div>
            <h3>Upgrade to Pro</h3>
            <p>Unlock advanced features like detailed analytics, custom categories, and more with our Pro subscription.</p>
          </div>
        ),
        placement: "bottom",
      },
      {
        target: ".contact-btn",
        content: (
          <div>
            <h3>Need Help?</h3>
            <p>Have questions or need support? Click here to contact our team. We're here to help you succeed!</p>
          </div>
        ),
        placement: "left",
      },
      {
        target: "body",
        content: (
          <div>
            <h3>You're All Set! 🎉</h3>
            <p>That's the end of our tour! You now know the key features of your dashboard. Start by creating your first account and adding some transactions.</p>
          </div>
        ),
        placement: "center",
      },
    ];

    // Filter steps to only include elements that exist
    const availableSteps = allSteps.filter(step => {
      if (step.target === "body") return true; // Body always exists
      
      const element = document.querySelector(step.target);
      if (!element) {
        console.log(`Element ${step.target} not found, skipping step`);
      }
      return element !== null;
    });

    console.log(`Starting tour with ${availableSteps.length} steps`);
    setTourSteps(availableSteps);
    setRunTour(true);
  };

  const handleJoyrideCallback = async (data) => {
    const { status, type } = data;
    
    console.log('Joyride callback:', { status, type });

    // Tour finished or skipped
    if (status === "finished" || status === "skipped") {
      setRunTour(false);
      
      // Mark tour as seen
      if (user?.id) {
        try {
          await markTourSeen();
        } catch (error) {
          console.error('Error marking tour as seen:', error);
        }
      }

      // Scroll to top
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <Joyride
      steps={tourSteps}
      run={runTour}
      continuous={true}
      showProgress={true}
      showSkipButton={true}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          primaryColor: "#3b82f6", // Blue color
          zIndex: 10000,
        },
        tooltip: {
          fontSize: "16px",
          padding: "20px",
        },
        tooltipContainer: {
          textAlign: "left",
        },
        buttonNext: {
          backgroundColor: "#3b82f6",
          fontSize: "14px",
          padding: "8px 16px",
          borderRadius: "6px",
        },
        buttonBack: {
          color: "#6b7280",
          fontSize: "14px",
          padding: "8px 16px",
        },
        buttonSkip: {
          color: "#6b7280",
          fontSize: "14px",
        },
      }}
      locale={{
        back: "← Back",
        close: "Close",
        last: "Finish Tour",
        next: "Next →",
        skip: "Skip Tour",
      }}
    />
  );
}
