export const RECEIVE_COIN = 'RECEIVE_COIN';
export const RECEIVE_COINS = 'RECEIVE_COINS';

const receiveCoin = (coin) => ({
  type: RECEIVE_COIN,
  coin
});

const receiveCoins = (coins) => ({
  type: RECEIVE_COIN,
  coins
});
