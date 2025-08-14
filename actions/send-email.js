"use server";

import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  console.log("📧 Initializing Resend email send...");
  console.log("➡️ To:", to);
  console.log("➡️ Subject:", subject);

  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const data = await resend.emails.send({
      from: "CashClarity <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    console.log("✅ Email sent successfully via Resend!");
    console.log("📨 Resend Response:", data);

    return { success: true, data };
  } catch (error) {
    console.error("❌ Failed to send email via Resend:");
    console.error(error);
    return { success: false, error };
  }
}
