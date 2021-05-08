const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const csrf = require('csurf');
const csrfProtection = csrf();
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
  res.render('user/signup', {csrfToken:req.csrfToken()});
})

router.post('/user/signup' ,function(req,res, next) {
  res.redirect('/');
})

module.exports = router;
