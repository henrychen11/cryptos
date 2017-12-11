const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');
const path = require('path');

const coinSchema = new Mongoose.Schema({
  name: String,
  acronym: String,
  currentValue: Number
});

const app = Express();

const Coin = Mongoose.model('Coin', coinSchema);

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

Mongoose.Promise = global.Promise;

try {
  Mongoose.connect('mongodb://localhost/cryptos_coins');
  console.log('connected to mongoDB');
} catch (e) {
  console.log('error connecting to mongo');
  process.exit(1);
}

app.get('/coins', (req, res) => {
  Coin.find((err, coins) => {
    if (err) return res.status(500).send(err);
    res.send(coins);
  });
});

// app.get('/coins/:coinId', (req, res) => {
//   Coin.findById((????????????) => {
//     if (err) return res.status(500).send(err);
//     res.send(coins);
//   });
// });


app.use((req, res) => {
  res.sendFile(__dirname + '/index.html');
});


const server = app.listen('8080', () => {
  console.log('running server on port ' + server.address().port);
});
