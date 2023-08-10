const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Enable CORS
app.use(cors());


app.post('/api/contact', async (req, res) => {
  const { name, email, number } = req.body;

  // Configure nodemailer using SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP server
    port: 587, // Replace with your SMTP port
    secure: false,
    auth: {
      user: 'clashwithchiefrpjyt@gmail.com', // Replace with your email
      pass: 'finkaexhjzagjsag', // Replace with your email password
    },
  });

  // Email content
  const mailOptions = {
    from: email, // Replace with your email
    to: 'riya82308@gmail.com', // Replace with recipient's email
    subject: 'Query to reach you out',
    html: `<p>Hey there, I just had a query so I wanted to reach out to you. Here goes my details below</p>
    <p>Name: ${name}</p><p>Email: ${email}</p><p>Number: ${number}</p>`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




app.post('/api/startProject', async (req, res) => {
  const { fullName, email, number, services, designation, company, idea } = req.body;

  // Configure nodemailer using SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP server
    port: 587, // Replace with your SMTP port
    secure: false,
    auth: {
      user: 'clashwithchiefrpjyt@gmail.com', // Replace with your email
      pass: 'finkaexhjzagjsag', // Replace with your email password
    },
  });

  // Email content
  const mailOptions = {
    from: email, // Replace with your email
    to: 'riya82308@gmail.com', // Replace with recipient's email
    subject: 'Proposal to colab for a project',
    html: `<p>Hey there, we want to colab a project with your company. We dropped our details below, kindly check it out </p>
    <p>Name: ${fullName}</p><p>Email: ${email}</p><p>Number: ${number}</p>
    <p>Designetion: ${designation}</p><p>Company: ${company}</p><p>Services that we are looking for: ${services}</p>
    <p>Our Idea: ${idea}</p>`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
