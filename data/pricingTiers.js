const pricingTier = [
  {
    name: "Free",
    id: "tier-free",
    priceMonthly: 0,
    description: "Perfect for personal finance management",
    features: [
      { text: "Up to 3 accounts", included: true },
      { text: "Up to 5 transactions per day", included: true },
      { text: "150 transactions per month", included: true },
      { text: "Basic analytics", included: true },
      { text: "Email support", included: false },
      { text: "AI powered receipt Scanner", included: false },
      { text: "Export transactions to Excel/CSV", included: false },
      { text: "Budget exceed alert", included: true },
    ],
    featured: false,
    buttonText: "Get Started Free",
    ctaLink: "/dashboard",
  },
  {
    name: "Pro",
    id: "tier-pro",
    priceMonthly: 50,
    description: "Best for individuals and small businesses",
    features: [
      { text: "Unlimited accounts", included: true },
      { text: "Unlimited transactions", included: true },
      { text: "Advanced analytics & insights", included: true },
      { text: "AI-powered receipt scanning", included: true },
      { text: "Priority support", included: true },
      { text: "Export transactions to Excel/CSV", included: true },
      { text: "Email support", included: true },
      { text: "Budget exceed alert", included: true },
    ],
    featured: true,
    buttonText: "Start 14-Day Free Trial",
    ctaLink: "/dashboard",
  },
];

export default pricingTier;
