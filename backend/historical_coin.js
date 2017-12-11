const Mongoose = require('mongoose');
const path = require('path');
const https = require ('https');

module.exports = class HistoricalCoinModel {
  constructor() {
    this.historicalCoinSchema = new Mongoose.Schema({
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
    this.HistoricalCoin = Mongoose.model(
      'HistoricalCoin',
      this.historicalCoinSchema
    );
  }


};
