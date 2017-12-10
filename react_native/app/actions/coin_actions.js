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
