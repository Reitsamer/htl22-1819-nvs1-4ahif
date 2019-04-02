const { add, calculateTip } = require('../src/math');

test('Should add two numbers', () => {
  const result = add(5, 7);

  // if (result !== 12)
  //   throw new Error(`Expected: 12 - Got ${result}`);

  expect(result).toBe(12);
})

test('Should calculate total price', () => {
  const total = calculateTip(10, .15);

  expect(total).toBe(11.5);
})
