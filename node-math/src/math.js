var add = (x, y) => x + y;

var sub = (x, y) => {
  return x - y;
}

var calculateTip = (price, percentage) => {
  const tip = price * percentage;
  return price + tip;
}

module.exports = {
  add,
  sub,
  calculateTip
}
