const envFile = require('dotenv').config()

const customerNum = process.argv[2];
const accountSid = process.env.twilSid;
const authToken = process.env.twilAuthTok;
const client = require("twilio")(accountSid, authToken);

client.messages 
  .create({
    body: "Sent with button",
    from: "+17782007622",
    to: customerNum
})
.then(message => console.log(message.sid))
.done();