const config = require('../config');

const cliente = require("twilio")(
  config.accountSid,config.authToken
);
/**
 * Send an sms message
 * @param {string} body - the body message
 * @param {string} phone -the number telephone
 */

async function SendMessage(body , phone){
try{
const message = await cliente.messages.create({
  to: phone,
  from: "+12134641972",
  body: body,
});
// console.log(message.sid);
return message;
}
catch(erro){
console.log(erro)
}

}
module.exports =  {SendMessage}