const Mongoose = require('mongoose');
const path = require('path');
const https = require ('https');

module.exports = class CoinModel {
  constructor() {
    this.coinSchema = new Mongoose.Schema({
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
    }); //live data
    this.Coin = Mongoose.model('Coin', this.coinSchema);
    this.getCoinNames = this.getCoinNames.bind(this);
    this.getCoinData = this.getCoinData.bind(this);
  }

  getData() {
    this.getCoinNames().then((result) => {
      result.forEach((coin) => {
        this.getCoinData(coin);
      }, (errors) => console.log(errors));
    });
  }

  getCoinNames() {
    return new Promise((success, failure) => {
      https.get('https://bittrex.com/api/v1.1/public/getcurrencies', (response) => {
        response.setEncoding("utf8");
        let body = "";
        response.on("data", data => {
          body += data;
        });
        response.on("uncaughtException", (err) => {
          console.log("Caught connection error: ");
          console.log(err);
          return;
        });
        response.on("end", () => {
          try { body = JSON.parse(body);
            if (body["success"] === true) {
              // let result = body.result.filter( (coin, idx) => idx < 20);
              let result = body.result;
              result = result.map((coin, idx) => ({
                id: idx,
                symbol: coin.Currency,
                name: coin.CurrencyLong
              }));
              success(result);
            }
          } catch (e) {
            console.log(e);
          }
        });
      });
    });
  }

  getCoinData(coin) {
    https.get(`https://bittrex.com/api/v1.1/public/getmarketsummary?market=BTC-${coin.symbol}`, (response) => {
      response.setEncoding("utf8");
      let body = "";
      response.on("data", data => {
        body += data;
      });
      response.on("uncaughtException", (err) => {
        console.log("Caught connection error: ");
        console.log(err);
        return;
      });
      response.on("end", () => {
        try { body = JSON.parse(body);
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
            this.Coin.findOneAndUpdate(query, update, options, () => {
              // console.log('updated');
            });
          }
        } catch (e) {
          console.log(e);
        }
      });
    });
  }
};
