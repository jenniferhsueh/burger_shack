const accountSid = "AC5638a6bf68007b68a0931f986aa371d5";
const authToken = "0bbd71851f4c4e86e0a35958711e2ddb";
const client = require("twilio")(accountSid, authToken);

client.messages 
  .create({
    body: "test test test",
    from: "+17782007622",
    to: "+16043151860"
})
.then(message => console.log(message.sid))
.done();