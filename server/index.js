const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const port = 8000

const indexRoute = require("./router/index.route");

mongoose.connect(process.env.DATABASE)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use("/", indexRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
