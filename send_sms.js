const envFile = require('dotenv').config()

// const customerNum = process.argv[2];
const TWILIO_ACCOUNT_SID = process.env.twilSid;
const TWILIO_AUTH_TOKEN = process.env.twilAuthTok;
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

module.exports = {
  smsOrder : function (varNum) {
    return client.messages 
      .create({
        body: `New order!  #${varNum}`,
        from: "+17782007622",
        to: "+16043352754"
      })
      .then(message => console.log(message.sid))
      .done();
    },
  smsPickupTime : function (pickupTime) {
    return client.messages 
      .create({
        body: `Pickup your order in ${pickupTime} minutes`,
        from: "+17782007622",
        to: "+16043151860" //customer number
      })
      .then(message => console.log(message.sid))
      .done();
    }
}

  
