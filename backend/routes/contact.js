const express=require('express');
const router=express.Router();
const sendEmail=require('../controller/contactUsController');

router.post('/contact',sendEmail)

module.exports=router;