var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
    imagePath: 'https://i2.wp.com/freepcgamesden.com/wp-content/uploads/2014/10/Gothic-2001-Free-Full-Game-Download.gif?resize=350%2C200',
    title: 'Gothic Video Game',
    description: 'Awesome Action Game  !!!',
    price: 10
  }),
  new Product({
    imagePath: 'https://cdn.bleedingcool.net/wp-content/uploads/2017/04/PreyLogo.jpg',
    title: 'PREY',
    description: 'Action Thriller Game  !!!',
    price: 20
  }),
  new Product({
    imagePath: 'https://i.ytimg.com/vi/c368sjwxF9E/maxresdefault.jpg',
    title: 'GTA V-5',
    description: 'PLAY Kill  !!!',
    price: 20
  }),
  new Product({
    imagePath: 'http://media-www-battlefieldwebcore.spark.ea.com/content/battlefield-portal/en_US/games/battlefield-4/_global_/_jcr_content/ccm/componentwrapper_0/components/opengraph/ogImage.img.jpg',
    title: 'battlefield-4',
    description: 'Be A Soldier  !!!',
    price: 30
  }),
  new Product({
    imagePath: 'https://i.ytimg.com/vi/KvTEWcq5vaQ/maxresdefault.jpg',
    title: 'Call Of Duty',
    description: 'This is Seriously Awesome  !!!',
    price: 30
  }),
  new Product({
    imagePath: 'https://static.gamespot.com/uploads/screen_kubrick/1551/15511094/2995837-batman-arkham-asylum-pc.jpg',
    title: 'Batman Arkham Asylum',
    description: 'Night is Dark and Full of Terrors !!!',
    price: 40
  }),
];

var done = 0;

for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result){
    done++;
    if(done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
