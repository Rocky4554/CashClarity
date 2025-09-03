
export const dynamic = 'force-dynamic'

'use client';

import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

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
    <div className="max-w-2xl mx-auto px-4 py-16">
      <Card className="p-6 space-y-4 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-green-500" />
        <h2 className="text-2xl font-bold">Upgrade to Pro</h2>
        <ul className="list-disc list-inside text-left text-gray-600 space-y-1 hover: text-blue-400">
          <li className="hover:text-blue-400">Unlimited transactions</li>
          <li className="hover:text-blue-400">AI Receipt Scanner</li>
          <li className="hover:text-blue-400">Download your transactions list</li>
          <li className="hover:text-blue-600">Advanced analytics</li>
          <li className="hover:text-blue-600">Monthly budget alerts</li>
          <li className="hover:text-blue-800">Recurring transaction automation</li>
          <li className="hover:text-blue-800">Priority support</li>
        </ul>
        <Button onClick={handleCheckout} className="mt-4">Buy Pro Package</Button>
      </Card>
    </div>
  );
}
