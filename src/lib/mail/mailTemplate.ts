interface FormData {
  name: string;
  email: string;
  number: string;
  country: string;
  reason?: string;
}

export function buildAdminEmail(data: FormData) {
  return `
    <h2>📥 New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.number}</p>
    <p><strong>Country:</strong> ${data.country}</p>
    <p><strong>Reason:</strong> ${data.reason || 'N/A'}</p>
    <hr/>
    <small>Submitted on ${new Date().toLocaleString()}</small>
  `;
}

export function buildUserConfirmationEmail(data: FormData) {
  return `
    <h2>Thank you for contacting us, ${data.name}!</h2>
    <p>We have received your message and will get back to you shortly.</p>
    <h3>Your Submission:</h3>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.number}</p>
    <p><strong>Country:</strong> ${data.country}</p>
    <p><strong>Reason:</strong> ${data.reason || 'N/A'}</p>
    <hr/>
    <small>This is an automated confirmation email from nirajraibxr657@gmail.com</small>
  `;
}
