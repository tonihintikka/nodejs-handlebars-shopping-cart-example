const express = require('express');
const router = express.Router();

const csrf = require('csurf');
const passport = require('passport');
const csrfProtection = csrf();
const Product = require('../models/Product');
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
Product.find().lean().exec(function(err,docs){
  const productChunks = [];
  const chunkSize = 3;
  for (var i=0; i < docs.length; i += chunkSize){
    productChunks.push(docs.slice(i, i + chunkSize));
  }
  console.log(productChunks);



res.render('shop/index', { title: 'Shopping cart', products: productChunks });

});

  
});

router.get('/user/signup', function(req, res, next){
  var messages = req.flash('error');
  res.render('user/signup', {csrfToken:req.csrfToken(), messages:messages, hasErrors: messages.length > 0});
})

router.post('/user/signup' , passport.authenticate('local.signup',
{
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true

}))
router.get('/user/profile', function(req, res, next){
  res.render('user/profile');
})



module.exports = router;
