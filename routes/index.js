const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

/* GET home page. */
router.get('/', function(req, res, next) {
Product.find().lean().exec(function(err,docs){
  const productChunks = [];
  const chunkSize = 3;
  for (var i=0; i < docs.length; i += chunkSize){
    productChunks.push(docs.slice(i, i + chunkSize));
  }
  console.log(productChunks);
const secureProducsChuncks={
  products: productChunks.map(data => {
    return{
      imagePath: data.imagePath, 
      title: data.title,
      description: data.description,
      price: data.price
    }
  })
}


console.log(secureProducsChuncks)


res.render('shop/index', { title: 'Shopping cart', products: productChunks });

});

  
});

module.exports = router;
