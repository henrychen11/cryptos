const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');
const path = require('path');
const https = require ('https');
const CoinModel = require('./coin.js');

const historicalCoinSchema = new Mongoose.Schema({
  name: String,
  symbol: String,
  today: Number,
  day1: Number,
  day2: Number,
  day3: Number,
  day4: Number,
  day5: Number,
  day6: Number,
  day7: Number
}); //historical data

const exchangeSchema = new Mongoose.Schema({

}); //macro exchange data

const app = Express();

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

const coinModel = new CoinModel();

app.get('/coins', (req, res) => {
  coinModel.Coin.find((err, coins) => {
    if (err) return res.status(500).send(err);
    res.send(coins);
  });
});

setInterval(() => {
  coinModel.getData();
}, 10000);

const server = app.listen('8080', () => {
  console.log('running server on port ' + server.address().port);
});
