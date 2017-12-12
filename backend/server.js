const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');
const path = require('path');
const https = require ('https');
const CoinModel = require('./coin.js');
const HistoricalCoinModel = require('./historical_coin.js');
const ExchangeModel = require('./exchange.js');

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
// const historicalCoinModel = new HistoricalCoinModel();
// const exchangeModel= new ExchangeModel();

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
