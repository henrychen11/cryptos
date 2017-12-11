import Express from 'express';
import Mongoose from 'mongoose';
import BodyParser from 'body-parser';

const app = Express();

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

const coinSchema = new Mongoose.Schema({
  name: String,
  acronym: String,
  currentValue: Number
});

const Coin = Mongoose.model('Coin', coinSchema);
