
import nodemailer, { Transporter } from 'nodemailer';

interface MailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendMail({ to, subject, html }: MailOptions): Promise<{
  success: boolean;
  response?: string;
  messageId?: string;
  error?: string;
}> {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return {
      success: false,
      error: 'EMAIL_USER or EMAIL_PASS not set in environment variables',
    };
  }

  let transporter: Transporter;

  try {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });
  } catch (error: unknown) {
    const err = error as Error;
    return {
      success: false,
      error: 'Failed to create mail transporter: ' + err.message,
    };
  }

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to,
      subject,
      html,
    });

    return {
      success: true,
      response: info.response,
      messageId: info.messageId,
    };
  } catch (error: unknown) {
   const err = error as Error;
    return {
      success: false,
      error: 'Failed to send mail: ' + err.message,
    };
  }
}
