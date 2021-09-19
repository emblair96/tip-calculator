const util = require('./util');
// jest.mock("./myLoggerFactory", jest.fn());

test('calculate tip for $10 w/ 15% tip', () => {
  expect(util.calculateTip(10, 15)).toBe(1.50);
});


// const myMockElement = {
//   addEventListener: jest.fn(),
// };