export const xValues = (time) => {
  switch (time) {
    case "hour":
      return hourValues();
    case "day":
      return dayValues();
    case "week":
      return weekValues();
  }

};

const hourValues = () => {
  const interval = 600000;
  return [
    {value: Date.now() - interval * 6},
    {value: Date.now() - interval * 5},
    {value: Date.now() - interval * 4},
    {value: Date.now() - interval * 3},
    {value: Date.now() - interval * 2},
    {value: Date.now() - interval},
    {value: Date.now()}
  ];
};

const dayValues = () => {
  const interval = 14400000;
  return [
    {value: Date.now() - interval * 6},
    {value: Date.now() - interval * 5},
    {value: Date.now() - interval * 4},
    {value: Date.now() - interval * 3},
    {value: Date.now() - interval * 2},
    {value: Date.now() - interval},
    {value: Date.now()}
  ];
};

const weekValues = () => {
  const interval = 86400000;
  return [
    {value: Date.now() - interval * 6},
    {value: Date.now() - interval * 5},
    {value: Date.now() - interval * 4},
    {value: Date.now() - interval * 3},
    {value: Date.now() - interval * 2},
    {value: Date.now() - interval},
    {value: Date.now()}
  ];
};
