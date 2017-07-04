var express=require('express');
var router=express.Router();
var userCtrl=require('../controller/userCtrl')

router
  .get('/register',userCtrl.getRegisterPage)
  .get('/login',userCtrl.getLoginPage)

  module.exports=router;