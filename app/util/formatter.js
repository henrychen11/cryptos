import moment from 'moment';

export const formatPrice = (num) => {
  if (num > .1) {
    return num.toFixed(2);
  } else {
    return num.toFixed(10).match(/^-?\d*\.?0*\d{0,2}/)[0];
  }
};

export const formatChange = (num) => {
  if (num > 9.99 || num < -9.99) {
    return num.toFixed(1);
  } else {
    return num.toFixed(2);
  }
};

export const formatPriceChange = (num) => {
  if (num > 999.99 || num < -999.99) {
    return num.toFixed(0);
  } else if (num > 99.99 || num < -99.99) {
    return num.toFixed(1);
  } else {
    return num.toFixed(2);
  }
};

export const formatMarketCap = (marketCap) => {
  if (!marketCap) {
    return '----';
  }
  const num = marketCap / 1000000000;
  if (num > 99.99) {
    return `${num.toFixed(1)}B`;
  } else {
    return `${num.toFixed(2)}B`;
  }
};

export const formatVolume = (volume) => {
  if (!volume) {
    return '----';
  }
  const num = volume / 1000000;
  if (num > 99.99) {
    return `${num.toFixed(1)}M`;
  } else {
    return `${num.toFixed(2)}M`;
  }
};

export const formatChartDate = (date) => {
  return moment(date).format('YYYY');
};
