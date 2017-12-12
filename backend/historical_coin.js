const Mongoose = require('mongoose');
const path = require('path');
const https = require ('https');

module.exports = class HistoricalCoinModel {
  constructor() {
    this.historicalCoinSchema = new Mongoose.Schema({
      name: String,
      symbol: String,
      minuteData: Array,
      hourlyData: Array,
      dailyData: Array
    }); //historical data
    // new historical data is pushed, to data array, and we never let it
    // get longer than 365 entries. today is array[-1], and the
    // oldest data point is array[0].

    // this means that every time a new batch of current data comes in,
    // array[-1] should be overwritten.

    this.HistoricalCoin = Mongoose.model(
      'HistoricalCoin',
      this.historicalCoinSchema
    );
    this.addMinuteData = this.addMinuteData.bind(this);
    this.addHourlyData = this.addHourlyData.bind(this);
    this.addDailyData = this.addDailyData.bind(this);
  }

  addMinuteData(coin) {
    const query = { name: coin.name };
    const update = {
      name: coin.name,
      symbol: coin.symbol,
      $push: { minuteData: {$each: [coin["bid"]], $slice: -60}}
    };
    // this is mongoDB notation; slice limits the length of the array
    // to 60 elements, keeping the most recent ones
    const options = { upsert: true };
    this.HistoricalCoin.findOneAndUpdate(query, update, options, (error, doc) => {
      if (error) console.log(error);
    });
  }

  addHourlyData(coin) {
    const query = { name: coin.name };
    const update = {
      name: coin.name,
      symbol: coin.symbol,
      $push: { hourlyData: {$each: [coin["bid"]], $slice: -24}}
    };
    const options = { upsert: true };
    this.HistoricalCoin.findOneAndUpdate(query, update, options, (error, doc) => {
      if (error) console.log(error);
    });
  }

  addDailyData(coin) {
    const query = { name: coin.name };
    const update = {
      name: coin.name,
      symbol: coin.symbol,
      $push: { dailyData: {$each: [coin["bid"]], $slice: -365}}
    };
    const options = { upsert: true };
    this.HistoricalCoin.findOneAndUpdate(query, update, options, (error, doc) => {
      if (error) console.log(error);
    });
  }

  setTimerForMinuteUpdate(coin) {
    const millisecondsPerMinute = 1000 * 60;
    const millisecondsUntilMinute = millisecondsPerMinute - (Date.now() % millisecondsPerMinute);
    setTimeout(() => {
      this.addMinuteData(coin);
      setInterval(() => {
        this.addMinuteData(coin);
      }, millisecondsPerMinute);
    }, millisecondsUntilMinute);
  }

  setTimerForHourlyUpdate(coin) {
    const millisecondsPerHour = 1000 * 60 * 60;
    const millisecondsUntilHour = millisecondsPerHour - (Date.now() % millisecondsPerHour);
    setTimeout(() => {
      this.addHourlyData(coin);
      setInterval(() => {
        this.addHourlyData(coin);
      }, millisecondsPerHour);
    }, millisecondsUntilHour);

  }

  setTimerForDailyUpdate(coin) {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsUntilMidnight = millisecondsPerDay - (Date.now() % millisecondsPerDay);
    setTimeout(() => {
      this.addDailyData(coin);
      setInterval(() => {
        this.addDailyData(coin);
      }, millisecondsPerDay);
    }, millisecondsUntilMidnight);
  }

  storeHistoricalData() {
    //store the day's high/low/???
    //every night at midnight the server should call this
    //shift all data
  }


};
