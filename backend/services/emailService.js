// backend/services/emailService.js
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendReminderEmail(toEmail, name) {
  await resend.emails.send({
    from: 'reminders@yourdomain.com',
    to: toEmail,
    subject: `Daily Reminder: ${name.transliteration} — ${name.meaning}`,
    html: `
      <div style="font-family: serif; max-width: 500px; margin: auto; padding: 24px;">
        <p style="color: #888;">Name ${name.number} of 99</p>
        <h1 style="font-size: 3rem; text-align: center; direction: rtl;">
          ${name.arabic}
        </h1>
        <h2 style="text-align: center; color: #2d5a3d;">
          ${name.transliteration}
        </h2>
        <p style="font-size: 1.2rem; text-align: center; font-style: italic;">
          ${name.meaning}
        </p>
        <hr />
        <p style="color: #555;">${name.reflection}</p>
      </div>
    `
  });
}

module.exports = { sendReminderEmail };