const sgMail = require('@sendgrid/mail')

const sgMailApiKey = 'your-api-key'

sgMail.setApiKey(sgMailApiKey)



module.exports.sendEmail = (email, password) => {
    
  console.log(email +" : "+password)
    sgMail.send({
        to: email,
        from: 'fixthatdevice@gmail.com',
        subject: 'Fix That Device Password Reset',
        text: `Hello. <br> Welocome to Fix That Device. <br> Your new password is: ${password} `,
        html: `<p>Hello. <br> Welocome to Fix That Device. <br>Your new password is: <b>${password}</b></p>`

    }).then(() => {}, error => {
        console.error(error);
     
        if (error.response) {
          console.error(error.response.body)
        }
      });

}


module.exports.sendTemplate = (to,from, templateId, dynamic_template_data) => {
  const msg = {
    to,
    from: { name: 'Fix That Device', email: from },
    templateId,
    dynamic_template_data
  };
  console.log(msg)
  sgMail.send(msg)
    .then((response) => {
      console.log('mail-sent-successfully', {templateId, dynamic_template_data });
      console.log('response', response);
      /* assume success */

    })
    .catch((error) => {
      /* log friendly error */
      console.error('send-grid-error: ', error.toString());
    });
};
