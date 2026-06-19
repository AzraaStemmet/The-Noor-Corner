const cron = require('node-cron');
const { createClient } = require('@supabase/supabase-js');
const { sendReminderEmail } = require('../services/emailService');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// The 99 names — import the same data as your frontend
const NAMES = require('../data/names');

// Runs every day at the top of every hour
// You can make this smarter to check per-user preferred times
cron.schedule('0 * * * *', async () => {
  const currentHour = new Date().getUTCHours();

  // Fetch users whose preferred send time matches this hour
  const { data: users, error } = await supabase
    .from('users')
    .select('*')
    .eq('notify_time_hour', currentHour); // store just the hour for simplicity

  if (error || !users) return;

  for (const user of users) {
    const nextNameNumber = (user.last_name_sent % 99) + 1;
    const todaysName = NAMES.find(n => n.number === nextNameNumber);

    // Send the email
    await sendReminderEmail(user.email, todaysName);

    // Update which name was last sent
    await supabase
      .from('users')
      .update({ last_name_sent: nextNameNumber })
      .eq('id', user.id);
  }

  console.log(`Reminders sent at hour ${currentHour} UTC`);
});