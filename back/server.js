require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
const errorHandler = require('./middleware/errorHandler');
const teamRoutes = require('./routes/teamroute');


app.use(cors());
app.use(express.json());            
app.use(morgan('dev'));           

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});


app.use('/api/auth', authRoutes);
app.use('/api', contactRoutes);
app.use('/api/team', teamRoutes);
//app.get('/ping', (req, res) => res.send('pong'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));


app.use(errorHandler);





app.use(errorHandler);


module.exports = app;