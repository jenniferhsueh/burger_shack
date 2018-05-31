const envFile = require('dotenv').config()

const accountSid = process.env.twilSid;
const authToken = process.env.twilAuthTok;
const client = require("twilio")(accountSid, authToken);

client.messages 
  .create({
    body: "test2",
    from: "+17782007622",
    to: "+16043151860"
})
.then(message => console.log(message.sid))
.done();