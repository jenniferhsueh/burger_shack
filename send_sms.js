const envFile = require('dotenv').config()

// const customerNum = process.argv[2];
const TWILIO_ACCOUNT_SID = process.env.twilSid;
const TWILIO_AUTH_TOKEN = process.env.twilAuthTok;
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

module.exports = function testMessage (varNum) {
 return client.messages 
  .create({
    body: "An eater want yerr FOOOOOOD!" + varNum,
    from: "+17782007622",
    to: "+16043352754"
})
.then(message => console.log(message.sid))
.done();
}
