import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json(); // Parse the incoming JSON body
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ success: false, message: 'All fields are required.' }), {
      status: 400,
    });
  }

  try {
    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your SMTP server
      port: 587, // Port for TLS
      secure: false, // Use true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email address (from .env file)
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Define the email content
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender's name and email
      to: process.env.EMAIL_RECEIVER, // The email address to receive the contact form messages
      subject: "New Contact Form Submission",
      text: message, // Plain text body
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`, // HTML body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, message: 'Email could not be sent.' }), {
      status: 500,
    });
  }
}
