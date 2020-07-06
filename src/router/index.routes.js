const {Router} = require('express');
const router = Router();
const {SendMessage} =require('../twilio/send-sms');
const SMS = require('../models/sms')


router.get('/',(req,res)=>{
res.render('index',{
    fecha: new Date().getFullYear()
});

})
router.post('/send-sms', async (req,res)=>{
 const {message, phone} = req.body;
 if(!message || !phone ) return res.json('Missing message or phone');
    res.send('enviando');
const response =  await SendMessage(req.body.message, req.body.phone);
await SMS.create({Body:req.body.message, To:req.body.phone})
   console.log(response.sid)
    console.log(req.body);
    //redireccionando al inicio
    res.redirect('/');

})

module.exports = router;