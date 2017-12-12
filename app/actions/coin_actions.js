import * as CoinAPIUtil from '../util/coin_api_util';

export const RECEIVE_COIN = 'RECEIVE_COIN';
export const RECEIVE_COINS = 'RECEIVE_COINS';
export const RECEIVE_CURRENT_COIN = 'RECEIVE_CURRENT_COIN';

const receiveCoin = (coin) => ({
  type: RECEIVE_COIN,
  coin
});

const receiveCoins = (coins) => ({
  type: RECEIVE_COINS,
  coins
});

export const receiveCurrentCoin = (currentCoin) => ({
  type: RECEIVE_CURRENT_COIN,
  currentCoin
});

export const requestCoins = () => dispatch => {
//   let xmlhttp = new XMLHttpRequest(),
//   method = 'GET',
//   url = 'https://cryptos-api.herokuapp.com/coins';
//
//   xmlhttp.open(method, url, true);
//   xmlhttp.onerror = function (e) {
//     console.log(e);
//   };
//   xmlhttp.send();
// };
  return (fetch('https://cryptos-api.herokuapp.com/coins', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      let res = [];
      for (let i = 0; i < 20; i++) {
        res.push(responseJSON[i]);
      }
      return res;
      // let res = responseJSON.filter( (coin, idx) => idx < 20);
      // return res.map((coin, idx) => ({
      //   id: idx,
      //   symbol: co,
      //   name: coin.CurrencyLong,
      // }));
    })
    .then(coins => dispatch(receiveCoins(coins)))
    .catch((error) => console.log(error))
);};

export const requestCoin = (coinSymbol) => dispatch => (
  fetch(`https://bittrex.com/api/v1.1/public/getorderbook?market=BTC-${coinSymbol}&type=both`)
    .then((response) => (response.json()))
    .then((coin) => dispatch(receiveCoin))
    .catch((error) => console.log(error))
);

export const requestBTC = () => dispatch => (
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => (response.json()))
    .then((coin) => dispatch(receiveCoin))
    .catch((error) => console.log(error))
);
