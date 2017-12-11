const Mongoose = require('mongoose');
const path = require('path');
const https = require ('https');

module.exports = class ExchangeModel {
  constructor() {
    this.exchangeSchema = new Mongoose.Schema({

    }); //macro exchange data
    this.Exchange = Mongoose.model('Exchange', this.exchangeSchema);
  }


};
