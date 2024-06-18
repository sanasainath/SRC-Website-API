const nodemailer = require('nodemailer');
const{EMAIL_ID,EMAIL_PASS}=require('../config/serverConfig');

const transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PASS
    }
});

 async function sendVerificationEmail(to, token) {
    const url = `http://localhost:3001/api/v1/verify/${token}`;

    const mailOptions = {
        from: 'airlineremainder@gmail.com',
        to,
        subject: 'Verify your email',
        html: `<h3>Click the link to verify your email</h3><a href="${url}">${url}</a>`
    };

 await transporter.sendMail(mailOptions);
}

module.exports = { sendVerificationEmail };
