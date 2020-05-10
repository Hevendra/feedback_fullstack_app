const express = require('express');
const authRoutes = require('./routes/authRoutes');
require('./services/passport') // Just we need to load this file


const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
