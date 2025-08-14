import nodemailer from 'nodemailer';

const createTransporter = () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  return transporter;
};

export const sendThankYouEmail = async (userEmail, userName) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"CashClarity-Support" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: 'CashClarity',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank you for reaching out!</h2>
        <p>Hi ${userName},</p>
        <p>Thank you for contacting us. We have received your message and will get back to you within 24-48 hours.</p>
        <p>We appreciate your interest and look forward to connecting with you soon.</p>
        <br>
        <p>Best regards,<br>Your Team</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

export const sendNotificationEmail = async (userMessage) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"CashClarity" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Your inbox
    subject: `New Contact Form Message on CashClarity from ${userMessage.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission on CashClarity</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>Name:</strong> ${userMessage.name}</p>
          <p><strong>Email:</strong> ${userMessage.email}</p>
          <p><strong>Subject:</strong> ${userMessage.subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${userMessage.message}</p>
        </div>
        <p><em>Sent at: ${new Date().toLocaleString()}</em></p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};