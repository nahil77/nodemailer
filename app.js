require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
  pass: process.env.PASSWORD

  }
});

const receiver = {
  from: process.env.EMAIL,
  to: 'ashin209@gmail.com',
  subject: 'Assignment Node.js',
  text: 'This is send through nodemailer'
};

transporter.sendMail(receiver,(error, info)=>{
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});