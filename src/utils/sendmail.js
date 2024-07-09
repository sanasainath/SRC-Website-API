const nodemailer = require("nodemailer");
const { EMAIL_ID, EMAIL_PASS } = require("../config/serverConfig");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: EMAIL_ID,
    pass: EMAIL_PASS,
  },
});

async function sendVerificationEmail(to, token, flag) {
  var url = "";
  if (flag == "verify") {
    url = `https://src-website-api.onrender.com/api/v1/verify/${token}`;
  } else {
    url = `https://src-website-api.onrender.com/api/v1/reset/password/${token}`;
  }

  const mailOptions = {
    from: "airlineremainder@gmail.com",
    to,
    subject: "Verify your email",
    html: `<h3>Click the link to verify your email</h3><a href="${url}">${url}</a>`,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendVerificationEmail };
