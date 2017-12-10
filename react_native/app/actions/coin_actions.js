export const RECEIVE_COIN = 'RECEIVE_COIN';
export const RECEIVE_COINS = 'RECEIVE_COINS';

const receiveCoin = (coin) => ({
  type: RECEIVE_COIN,
  coin
});

const receiveCoins = (coins) => ({
  type: RECEIVE_COINS,
  coins
});

export const requestCoins = () => dispatch => (
  fetch('https://bittrex.com/api/v1.1/public/getcurrencies')
    .then((response) => (response.json()))
    .then((responseJSON) => (
      responseJSON.result.filter( (coin, idx) => idx < 20)
    ))
    .then(coins => dispatch(receiveCoins(coins)))
    .catch((error) => (console.log(error)))
);

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
