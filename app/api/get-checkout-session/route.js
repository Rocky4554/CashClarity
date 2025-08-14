import Stripe from "stripe";
import { NextResponse } from "next/server";
import { updateUserProStatus } from "@/actions/user";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'payment_intent']
    });

    if (!session) {
      return NextResponse.json(
        { error: "Session not found" },
        { status: 404 }
      );
    }

    // If payment was successful, upgrade user to Pro
    if (session.payment_status === 'paid') {
      try {
        // Get user ID from session metadata
        const userId = session.metadata?.userId;
        if (userId) {
          const result = await updateUserProStatus(sessionId, userId);
          if (!result.success) {
            console.error("Failed to upgrade user to Pro:", result.error);
          } else if (result.upgraded) {
            console.log("Successfully upgraded user to Pro");
          }
        } else {
          console.error("No user ID found in session metadata");
        }
      } catch (error) {
        console.error("Error upgrading user to Pro:", error);
        // Continue with success page even if upgrade fails
      }
    }

    // Return session data for the success page
    return NextResponse.json({
      id: session.id,
      payment_status: session.payment_status,
      payment_intent: session.payment_intent?.id || session.payment_intent,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_details: session.customer_details,
      metadata: session.metadata,
      created: session.created,
      line_items: session.line_items?.data || []
    });

  } catch (error) {
    console.error("Error retrieving checkout session:", error);
    return NextResponse.json(
      { error: "Failed to retrieve session" },
      { status: 500 }
    );
  }
}
