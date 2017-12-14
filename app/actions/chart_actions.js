export const RECEIVE_CHART_DATA = 'RECEIVE_CHART_DATA';

const receiveChartData = (chartData) => ({
  type: RECEIVE_CHART_DATA,
  chartData
});


// time = 'hour' || 'day' \\ 'week'
export const requestChartData = (coinSymbol, time) => dispatch => (
  fetch(`https://cryptos-api.herokuapp.com/history/${coinSymbol}/${time}`)
    .then(response => response.json())
    .then(responseJSON => dispatch(receiveChartData(responseJSON)))
    .catch(error => console.log(error))
);
