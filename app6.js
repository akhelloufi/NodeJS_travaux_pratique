var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'khell33@hotmail.com',
    pass: 'ouioui'
  }
});
var mailOptions = {
    from: 'khell33@hotmail.com',
    to: 'khelloufi2006@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });