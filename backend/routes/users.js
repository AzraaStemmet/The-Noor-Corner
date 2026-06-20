const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

router.post('/subscribe', async (req, res) => {
  const { email, notifyHour, timezone } = req.body;

  const { error } = await supabase
    .from('users')
    .upsert({ email, notify_time_hour: notifyHour, timezone });

  if (error) return res.status(400).json({ error: error.message });
  res.json({ success: true, message: 'You are subscribed!' });
});

module.exports = router;