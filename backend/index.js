const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));

// Start scheduler
require('./scheduler/dailyReminder');

app.listen(process.env.PORT || 3001, () => {
  console.log('Server running on port', process.env.PORT || 3001);
});