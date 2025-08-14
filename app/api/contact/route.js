import { sendThankYouEmail, sendNotificationEmail } from '@/lib/emails/contact';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send thank you email to user
    await sendThankYouEmail(email, name);

    // Send notification email to your inbox
    await sendNotificationEmail({ 
      name, 
      email, 
      subject: 'Contact Form Message', 
      message 
    });

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      { message: 'Failed to send emails' },
      { status: 500 }
    );
  }
}

// Optional: Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}
