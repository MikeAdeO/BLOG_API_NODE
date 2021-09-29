const express = require('express');
const app = express();
const dotenv = require('dotenv');
// const mongoose = require('mongoose');

// dotenv.config();
// mongoose.connect(process.env.MONGO_URL).then(console.log('connected to monogdb')).catch((err) => console.log(err));

app.use('/', (req, res)=>{
     console.log('this is the main url');
});
app.listen('5000',() =>{
     console.log('this app runs on port 5000');
});
