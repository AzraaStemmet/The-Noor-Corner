const cron = require('node-cron');
const { createClient } = require('@supabase/supabase-js');
const { sendReminderEmail } = require('../services/emailService');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const { NAMES } = require('../data/names');

// Every minute for testing — change to '0 7 * * *' for daily at 7am UTC
cron.schedule('0 7 * * *', async () => {
  console.log('Cron fired — checking for users to notify...');

  const { data: users, error } = await supabase
    .from('users')
    .select('*');

  if (error) {
    console.log('Supabase error:', error.message);
    return;
  }

  if (!users || users.length === 0) {
    console.log('No users found in database');
    return;
  }

  for (const user of users) {
    const nextNameNumber = (user.last_name_sent % 99) + 1;
    const todaysName = NAMES.find(n => n.number === nextNameNumber);

    console.log(`Sending name ${nextNameNumber} to ${user.email}`);

    await sendReminderEmail(user.email, todaysName);

    await supabase
      .from('users')
      .update({ last_name_sent: nextNameNumber })
      .eq('id', user.id);
  }

  console.log('Done sending reminders');
});