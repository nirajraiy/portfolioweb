import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mail/mail";
import {
  buildAdminEmail,
  buildUserConfirmationEmail,
} from "@/lib/mail/mailTemplate";
import { connectMongoDB } from "@/lib/mail/mongodbConnectoon";
import { Contact } from "../../../../models/Contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, number, country = "India", email, reason } = body;

    if (!name || !email || !number) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, or number" },
        { status: 400 }
      );
    }

    const formData = { name, number, country, email, reason };

    await connectMongoDB();

    const savedData = await Contact.create(formData);

    // ✅ Send admin email
    const adminHtml = buildAdminEmail(formData);
    const adminResult = await sendMail({
      to: "nirajraibxr657@gmail.com",
      subject: "📩 New Contact Form Submission",
      html: adminHtml,
    });

    // ✅ Send confirmation email to user
    const userHtml = buildUserConfirmationEmail(formData);
    const userResult = await sendMail({
      to: email,
      subject: "✅ We received your message",
      html: userHtml,
    });

    return NextResponse.json({
      message: "Form submitted successfully!",
      adminMail: adminResult.response,
      userMail: userResult.response,
      savedId: savedData._id,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Server error:", error.message);
      return NextResponse.json(
        { error: "Internal Server Error", details: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unexpected error", error);
      return NextResponse.json(
        { error: "Internal Server Error", details: "Unknown error occurred" },
        { status: 500 }
      );
    }
  }
}

// import { NextRequest, NextResponse } from 'next/server';
// import { connectMongoDB } from '@/lib/db';
// import { sendMail } from '@/lib/mail/mail';
// import { buildAdminEmail, buildUserConfirmationEmail } from '@/lib/mail/mailTemplate';

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { name, number, country = 'India', email, reason } = body;

//     // ✅ Basic validation
//     if (!name || !email || !number) {
//       return NextResponse.json(
//         { error: 'Missing required fields: name, email, or number' },
//         { status: 400 }
//       );
//     }
//  const formData = { name, number, country, email, reason };

//  // Send email to Admin
//     const adminHtml = buildAdminEmail(formData);
//     const adminResult = await sendMail({
//       to: 'nirajraibxr657@gmail.com',
//       subject: '📩 New Contact Form Submission',
//       html: adminHtml,
//     });

//     if (!adminResult.success) {
//       console.warn(' Failed to send admin email:', adminResult.error);
//     }

//     // ✅ Send confirmation email to User
//     const userHtml = buildUserConfirmationEmail(formData);
//     const userResult = await sendMail({
//       to: email, // ⬅️ This uses the user’s email from the form
//       subject: '✅ We received your message',
//       html: userHtml,
//     });

//     if (!userResult.success) {
//       console.warn(' Failed to send confirmation email to user:', userResult.error);
//     }

//     // ✅ (Optional) Save data to Db
//     // MONGODBURL

//     if (!userResult.success) {
//       console.warn(' Failed to send confirmation email to user:', userResult.error);
//     }

//    return NextResponse.json({
//       message: 'Form submitted successfully!',
//       // insertedId: (result as any).insertId,
//       adminMail: adminResult.response,
//       userMail: userResult.response,
//     });
//   } catch (error: any) {
//     console.error('Server error:', error.message || error);
//     return NextResponse.json(
//       { error: 'Internal Server Error', details: error.message },
//       { status: 500 }
//     );
//   }
// }

// import { NextRequest, NextResponse } from 'next/server';
// import { createConnection } from '@/lib/db';
// // import { buildAdminEmail, buildUserConfirmationEmail } from '@/lib/mail/mailTemplate';
// import { sendMail } from '@/lib/mail/mail';
// import { log } from 'console';
// import { buildAdminEmail, buildUserConfirmationEmail } from '@/lib/mail/mailTemplate';

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { name, number, country = 'India', email, reason } = body;

//     // ✅ Basic validation
//     if (!name || !email || !number) {
//       return NextResponse.json(
//         { error: 'Missing required fields: name, email, or number' },
//         { status: 400 }
//       );
//     }
//  const formData = { name, number, country, email, reason };

//  // Send email to Admin
//     const adminHtml = buildAdminEmail(formData);
//     const adminResult = await sendMail({
//       to: 'nirajraibxr657@gmail.com',
//       subject: '📩 New Contact Form Submission',
//       html: adminHtml,
//     });

//     if (!adminResult.success) {
//       console.warn(' Failed to send admin email:', adminResult.error);
//     }

//     // ✅ Send confirmation email to User
//     const userHtml = buildUserConfirmationEmail(formData);
//     const userResult = await sendMail({
//       to: email, // ⬅️ This uses the user’s email from the form
//       subject: '✅ We received your message',
//       html: userHtml,
//     });

//     if (!userResult.success) {
//       console.warn(' Failed to send confirmation email to user:', userResult.error);
//     }

//     // ✅ (Optional) Save data to Db

//     // const db = await createConnection();

//     // await db.query(`
//     //   CREATE TABLE IF NOT EXISTS form_submissions (
//     //     id INT AUTO_INCREMENT PRIMARY KEY,
//     //     name VARCHAR(100) NOT NULL,
//     //     number VARCHAR(20) NOT NULL,
//     //     country VARCHAR(100) DEFAULT 'India',
//     //     email VARCHAR(100) NOT NULL,
//     //     reason TEXT,
//     //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     //   );
//     // `);

//     // const [result] = await db.query(
//     //   `INSERT INTO form_submissions (name, number, country, email, reason)
//     //    VALUES (?, ?, ?, ?, ?)`,
//     //   [name, number, country, email, reason]
//     // );

//     if (!userResult.success) {
//       console.warn(' Failed to send confirmation email to user:', userResult.error);
//     }

//    return NextResponse.json({
//       message: 'Form submitted successfully!',
//       // insertedId: (result as any).insertId,
//       adminMail: adminResult.response,
//       userMail: userResult.response,
//     });

// //db return
//     // return NextResponse.json({
//     //   message: 'Form submitted successfully!',
//     //   insertedId: (result as any).insertId,
//     // });
//   } catch (error: any) {
//     console.error('Server error:', error.message || error);
//     return NextResponse.json(
//       { error: 'Internal Server Error', details: error.message },
//       { status: 500 }
//     );
//   }
// }
