const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');
const path = require('path');
const https = require ('https');

const coinSchema = new Mongoose.Schema({
  id: Number,
  symbol: String,
  name: String
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

let mockDB = [];

// app.get('/coins', (req, res) => {
//   res.send(mockDB);
//   console.log('sent');
// });

const requestCoins = () => {
  https.get('https://bittrex.com/api/v1.1/public/getcurrencies', (response) => {
    response.setEncoding("utf8");
    let body = "";
    response.on("data", data => {
      body += data;
    });
    response.on("end", () => {
      body = JSON.parse(body);
      let result = body.result.filter( (coin, idx) => idx < 20);
      result = result.map((coin, idx) => {
        const coinToSave = new Coin({
          id: idx,
          symbol: coin.Currency,
          name: coin.CurrencyLong,
        });
        coinToSave.save();
      });
    });
  });
};

setInterval(() => {
  requestCoins();
}, 5000);



app.use((req, res) => {
  res.sendFile(__dirname + '/index.html');
});


const server = app.listen('8080', () => {
  console.log('running server on port ' + server.address().port);
});
