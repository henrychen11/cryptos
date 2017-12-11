const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');
const path = require('path');
const https = require ('https');

const coinSchema = new Mongoose.Schema({
  id: Number,
  symbol: String,
  name: String,
  high: Number,
  low: Number,
  volume: Number,
  last: Number,
  bid: Number,
  ask: Number,
  prevDay: Number
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
    console.log('done');
  });
});

let mockDB = [];

// app.get('/coins', (req, res) => {
//   res.send(mockDB);
//   console.log('sent');
// });

const getCoinNames = new Promise((success, failure) => {
  https.get('https://bittrex.com/api/v1.1/public/getcurrencies', (response) => {
    response.setEncoding("utf8");
    let body = "";
    response.on("data", data => {
      body += data;
    });
    response.on("end", () => {
      body = JSON.parse(body);
      let result = body.result.filter( (coin, idx) => idx < 20);
      // result = result.map((coin, idx) => {
      //   const coinToSave = new Coin({
      //     id: idx,
      //     symbol: coin.Currency,
      //     name: coin.CurrencyLong,
      //   });
      //   coinToSave.save();
      // });
      result = result.map((coin, idx) => ({
        id: idx,
        symbol: coin.Currency,
        name: coin.CurrencyLong
      }));
      success(result);
    });
  });
});

setTimeout(() => {
  getCoinNames.then((result) => {
    result.forEach(coin => {
      https.get(`https://bittrex.com/api/v1.1/public/getmarketsummary?market=BTC-${coin.symbol}`, (response) => {
        response.setEncoding("utf8");
        let body = "";
        response.on("data", data => {
          body += data;
        });
        response.on("end", () => {
          body = JSON.parse(body);
          if (body["success"] === true) {
            coin.high = body['result'][0]["High"];
            coin.low = body['result'][0]["Low"];
            coin.volume = body['result'][0]["Volume"];
            coin.last = body['result'][0]["Last"];
            coin.bid = body['result'][0]["Bid"];
            coin.ask = body['result'][0]["Ask"];
            coin.prevDay = body['result'][0]["PrevDay"];
            const query = { name: coin.name };
            const update = coin;
            const options = { upsert: true };
            Coin.findOneAndUpdate(query, update, options, () => {
              console.log('updated');
            });
            // if (coinToSave) {
            //   // coinToSave.update(coin);
            //   // coinToSave.save();
            //   console.log(coinToSave);
            // } else {
            //   coinToSave = new Coin(coin);
            //   coinToSave.save();
            //   console.log("saved");
            // }
          }
        });
      });
    });
  });
}, 1000);

// const requestCoinNames = () => {
//   https.get('https://bittrex.com/api/v1.1/public/getcurrencies', (response) => {
//     response.setEncoding("utf8");
//     let body = "";
//     response.on("data", data => {
//       body += data;
//     });
//     response.on("end", () => {
//       body = JSON.parse(body);
//       let result = body.result.filter( (coin, idx) => idx < 20);
//       // result = result.map((coin, idx) => {
//       //   const coinToSave = new Coin({
//       //     id: idx,
//       //     symbol: coin.Currency,
//       //     name: coin.CurrencyLong,
//       //   });
//       //   coinToSave.save();
//       // });
//       result = result.map((coin, idx) => ({
//         id: idx,
//         symbol: coin.Currency,
//         name: coin.CurrencyLong
//       }));
//     });
//   });
// };

const server = app.listen('8080', () => {
  console.log('running server on port ' + server.address().port);
});
