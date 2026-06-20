const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendReminderEmail(toEmail, name) {
  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'stmazr001@myuct.ac.za',
      subject: `${name.transliteration} — ${name.meaning}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 500px; margin: auto; padding: 40px 24px; background-color: #0f1f0f; color: #f5f0e8;">
          <p style="color: #7a9e7a; font-size: 14px; text-align: center; letter-spacing: 2px;">
            THE NOOR CORNER — Name ${name.number} of 99
          </p>
          <h1 style="font-size: 52px; text-align: center; color: #c9a84c; direction: rtl; margin: 24px 0;">
            ${name.arabic}
          </h1>
          <h2 style="font-size: 24px; text-align: center; color: #f5f0e8; font-weight: normal; margin-bottom: 8px;">
            ${name.transliteration}
          </h2>
          <p style="font-size: 16px; text-align: center; color: #7a9e7a; font-style: italic; margin-bottom: 32px;">
            ${name.meaning}
          </p>
          ${name.reflection && name.reflection.trim() !== '' ? `
          <hr style="border: none; border-top: 1px solid #2d4a2d; margin: 24px 0;" />
          <p style="font-size: 15px; color: #b0c4b0; line-height: 1.8;">
            ${name.reflection}
          </p>
          ` : ''}
        </div>
      `
    });
    console.log('Email sent successfully:', result);
  } catch (err) {
    console.log('Email error:', err.message);
  }
}

module.exports = { sendReminderEmail };