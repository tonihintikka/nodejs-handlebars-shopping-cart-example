const Product = require('../models/Product');
const mongoose = require('mongoose');
const { exists } = require('../models/Product');
mongoose.connect('mongodb://localhost:27017/shopping');
const products =[ new Product({
 imagePath:'https://upload.wikimedia.org/wikipedia/commons/7/7b/Sibelius_with_notes.jpg',
 title: 'Sibelius book',
 description:'Mahtava sibelius kirja, jossa on kaikkea kiinnostavaa sisältöä',
 price: 17}),
 new Product({
 imagePath:'https://upload.wikimedia.org/wikipedia/commons/8/8c/Fredrik_Pacius.jpg',
 title: 'Fredrik Pacius kirja',
 description:'Mahtava Fredrik Pacius kirja, jossa on kaikkea kiinnostavaa sisältöä',
 price: 19}),
new Product({
 imagePath:'https://upload.wikimedia.org/wikipedia/commons/0/09/OlaviPesonen.jpg',
 title: 'Olavi Pesonen kirja',
 description:'Pesosen ensimmäiset teokset edustivat kansallisromantiikkaa, mutta myöhemmin hänen sävelkielensä kehittyi kromaattisemmaksi ja etääntyi paikoitellen tonaalisuudesta.',
 price: 19}),
 new Product({
 imagePath:'https://upload.wikimedia.org/wikipedia/commons/a/a4/JoonasKokkonen.jpg',
 title: 'Joonas Kokkonen kirja',
 description:'Mahtava Joonas Kokkonen kirja, jossa on kaikkea kiinnostavaa sisältöä',
 price: 19}),
 new Product({
 imagePath:'https://energiakoura.fi/wp-content/uploads/2019/06/200-nettisivuille-600x472.png',
 title: 'TMK 200 "Beaver"',
 description:'TMK 200 ”Beaver” on TMK tuoteperheen uusin tulokas. Beaverin pieni koko ja tarkasti suunniteltu rakenne tekevätkin uusimmasta tulokkaasta optimaalisen kouran esimerkiksi traktorin maatalouskuormaimiin, minikuormaimiin ja pieniin kaivinkoneisiin. Tämä vain 165 kiloa painava voimanpesä pystyy katkaisemaan jouhevasti 200 -millisen puun.',
 price: 19}),
 new Product({
 imagePath:'https://energiakoura.fi/wp-content/uploads/2019/06/300-nettisivuille-600x454.png',
 title: 'TMK 300 ',
 description:'Tarkan suunnittelun ja muotoilun tuloksena syntyi tehokas ja helppo käyttöinen energiakoura. Kotimaisuus sekä huippulaadukkaiden materiaalien käyttö luovat kestävän rakenteen ja luotettavuuden, joka kestää kovimmissakin tilanteissa.',
 price: 19}),
  new Product({
 imagePath:'https://energiakoura.fi/wp-content/uploads/2019/06/400-nettisivuille-600x455.png',
 title: 'TMK 300 ',
 description:'TMK 400 ”Big Boy” on suurin yksilö tämän hetken kouraperheessä. TMK 400 kehitettiin Keski-Euroopan suuria puita varten. TMK 400:lle voiman tuottaa varta vasten tälle kouralle suunnitellut sylinterit joiden ansiosta Big Boylla voidaan katkaista jopa 400mm halkaisijaltaan oleva puu. Big Boy soveltuu 10-30 tonnisiin kaivinkoneisiin.',
 price: 19})


]
var done = 0;

for (var i=0; i < products.length; i++){
    products[i].save(function(err, results){
        done++;
        if (done === products.length){
            exit();
        }
    });
}
function exit(){
    console.log('added sample producs')
mongoose.disconnect();
}



