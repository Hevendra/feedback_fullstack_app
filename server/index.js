const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
// Just we need to load these file
require('./models/User')
require('./services/passport') 

mongoose.connect(keys.mongoURI)
const app = express();
app.use(cookieSession({
    maxAge: 30*24*60*60*1000, //30 days
    keys: [keys.cookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
