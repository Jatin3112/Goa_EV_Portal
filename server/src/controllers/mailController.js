const nodemailer = require("nodemailer");
const mailgen = require("mailgen");
const {EMAIL, PASSWORD} = require('../../env')



// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

// Initialize Mailgen
const mailGenerator = new mailgen({
  theme: "default",
  product: {
    name: "AHA Solar",
    link: "https://www.ahasolar.in/",
  },
});

// Function to send email
const sendEmail = (userEmail, firstName, lastName, data) => {
  const response = {
    body: {
      name: firstName + " " + lastName,
      intro: data,
    },
  };

  const emailContent = mailGenerator.generate(response);

  const message = {
    from: EMAIL,
    to: userEmail,
    subject: "Query From the Form",
    html: emailContent,
  };

  return transporter.sendMail(message);
};

module.exports = sendEmail;
