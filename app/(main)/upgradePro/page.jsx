
'use client';

import { loadStripe } from "@stripe/stripe-js";
import Pricing from "@/components/pricing"
import Pricingtier from "@/data/pricingTiers"

export const dynamic = 'force-dynamic'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

export default function UpgradeProPage() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const res = await fetch("/api/create-checkout-session", { method: "POST" });
    const data = await res.json();
   if (data?.sessionId) {
  stripe.redirectToCheckout({ sessionId: data.sessionId });
} else {
  console.error("Stripe checkout error:", data);
}
  };

  return (
    <div>
    <Pricing tiers={Pricingtier} onCheckout={handleCheckout}/>
    </div>
  );
}
