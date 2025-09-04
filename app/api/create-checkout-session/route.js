import Stripe from "stripe";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"; 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Pro Plan',
              description: 'Upgrade to Pro for unlimited access',
            },
            unit_amount: 999, // $9.99
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      // success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/upgradePro/success?session_id={CHECKOUT_SESSION_ID}`,
      // cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/upgradePro`,
      success_url: 'https://cash-clarity-orpin.vercel.app/upgradePro/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://cash-clarity-orpin.vercel.app/upgradePro',
      // Store user ID in metadata
      metadata: {
        userId: userId,
      },
    });

    return NextResponse.json({ sessionId: session.id ,
        url: session.url
    });
  }
  catch (error) {
  console.error('Error creating checkout session:', error.message || error);
  return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
}
}