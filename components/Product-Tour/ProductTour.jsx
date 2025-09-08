"use client";
import React, { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { markTourSeen } from "@/actions/user";

export default function ProductTour({ user }) {
  useEffect(() => {
    if (user && user.hasSeenTour === false) {
      startTour();
    }
  }, [user]);

  const startTour = () => {
    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
      .driver-popover {
        max-width: 400px !important;
        min-width: 350px !important;
        padding: 20px !important;
      }
      
      .driver-popover-title {
        font-weight: bold !important;
        font-size: 20px !important;
        margin-bottom: 10px !important;
      }
      
      .driver-popover-description {
        font-weight: 600 !important;
        font-size: 16px !important;
        line-height: 1.5 !important;
        margin-bottom: 15px !important;
      }
      
      .driver-popover-footer {
        display: flex !important;
        gap: 12px !important;
        margin-top: 15px !important;
      }
      
      .driver-popover-prev-btn, 
      .driver-popover-next-btn, 
      .driver-popover-close-btn {
        padding: 10px 20px !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        border-radius: 8px !important;
        border: 2px solid !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        text-shadow: none !important;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
      }
      
      .driver-popover-next-btn {
        background-color: #dc2626 !important;
        border-color: #dc2626 !important;
        color: white !important;
      }
      
      .driver-popover-next-btn:hover {
        background-color: #b91c1c !important;
        border-color: #b91c1c !important;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
      }
      
      .driver-popover-prev-btn {
        background-color: #1f2937 !important;
        border-color: #1f2937 !important;
        color: white !important;
      }
      
      .driver-popover-prev-btn:hover {
        background-color: #111827 !important;
        border-color: #111827 !important;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
      }
      
      .driver-popover-close-btn {
        background-color: #6b7280 !important;
        border-color: #6b7280 !important;
        color: white !important;
      }
      
      .driver-popover-close-btn:hover {
        background-color: #4b5563 !important;
        border-color: #4b5563 !important;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
      }
      
      .driver-popover-progress-text {
        font-size: 12px !important;
        font-weight: 500 !important;
        color: #6b7280 !important;
      }
    `;
    
    if (!document.getElementById('driver-custom-styles')) {
      style.id = 'driver-custom-styles';
      document.head.appendChild(style);
    }

    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: "body",
          popover: {
            title: "Welcome 👋",
            description: "Welcome to your dashboard! Let's take a quick tour to get you started.",
            side: "over",
            align: "center",
            showButtons: ['close','next'],
            closeBtnText: 'Skip',
            nextBtnText: 'Next'
            
          }
        },
        {
          element: ".add-account-card",
          popover: {
            title: "Create Account",
            description: "Click here to create a new account and get started.",
            side: "top",
            align: "center",
          }
        },
        {
          element: ".edit-budget-btn",
          popover: {
            title: "Edit Budget",
            description: "Use this button to edit your monthly budget.",
            side: "top",
            align: "center",
          }
        },
        {
          element: ".account-btn",
          popover: {
            title: "Accounts",
            description: "Use this button to see all your accounts.",
            side: "top",
            align: "center",
          }
        },
        {
          element: ".transaction-btn",
          popover: {
            title: "Transactions",
            description: "Click here to add transactions.",
            side: "bottom",
            align: "center",
          }
        },
        {
          element: ".upgrade-btn",
          popover: {
            title: "Upgrade",
            description: "Upgrade to Pro User to unlock extra features.",
            side: "bottom",
            align: "center",
          }
        },
        {
          element: ".transaction-overview-card",
          popover: {
            title: "Recent Transactions",
            description: "Here you can see all your most recent transactions.",
            side: "left",
            align: "center",
          }
        },
        {
          element: ".monthly-expense-breakdown",
          popover: {
            title: "Monthly Breakdown",
            description: "Here you can see monthly breakdown of your expenses.",
            side: "right",
            align: "center",
          }
        },
        {
          element: ".contact-btn",
          popover: {
            title: "Contact Us",
            description: "Click here to contact us for any query or support.",
            side: "left",
            align: "center",
            onNextClick: () => {
              // Scroll to top first
              window.scrollTo({ top: 0, behavior: "smooth" });
              
              // Delay to allow smooth scroll before next step
              setTimeout(() => {
                driverObj.moveNext();
              }, 800);
            },
          }
        },
        {
          element: "body",
          popover: {
            title: "You're all set 🎉",
            description: "That's the end of the tour. Start using the app happily 😌.",
            side: "over",
            align: "center",
          }
        }
      ],
      onDestroyed: async () => {
        if (user?.id) await markTourSeen();
      },
      smoothScroll: true,
      stagePadding: 10,
      stageRadius: 5,
      allowClose: true,
      overlayClickNext: false,
      keyboardControl: true,
    });

    driverObj.drive();

    // Add custom Skip button to the first step
    setTimeout(() => {
      const firstStepFooter = document.querySelector('.driver-popover-footer');
      if (firstStepFooter && !firstStepFooter.querySelector('.custom-skip-btn')) {
        const skipBtn = document.createElement('button');
        skipBtn.className = 'custom-skip-btn';
        skipBtn.textContent = 'Skip';
        skipBtn.onclick = () => {
          driverObj.destroy();
        };
        firstStepFooter.appendChild(skipBtn);
      }
    }, 100);
  };

  return null;
}

