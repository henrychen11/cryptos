const Mongoose = require('mongoose');
const path = require('path');
const https = require ('https');

module.exports = class HistoricalCoinModel {
  constructor() {
    this.historicalCoinSchema = new Mongoose.Schema({
      name: String,
      symbol: String,
      today: Number,
      dailyData: Array,
      hourlyData: Array,
      minuteData: Array
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
  }

  setTimerForDailyUpdate() {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsUntilMidnight = millisecondsPerDay - (Date.now() % millisecondsPerDay);
    setTimeout(() => {

      setInterval(() => {

      }, millisecondsPerDay);
    }, millisecondsUntilMidnight);
  }

  storeHistoricalData() {
    //store the day's high/low/???
    //every night at midnight the server should call this
    //shift all data
  }


};
