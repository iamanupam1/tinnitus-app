import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();
        if (!name || !email || !message) {
          return NextResponse.json({ message: 'Please fill all required fields' }, { status: 400 });
        }
    
        const msg = {
          to: process.env.CONTACT_EMAIL,
          from: process.env.SENDGRID_VERIFIED_SENDER,
          subject: `New Contact Form Submission from ${name}`,
          text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
          `,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        };
    
        await sgMail.send(msg);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
      } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
      }
}
