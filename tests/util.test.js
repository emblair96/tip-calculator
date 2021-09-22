const util = require("../util");
// jest.mock("./myLoggerFactory", jest.fn());

test("calculate tip for $10 w/ 15% tip", () => {
  expect(util.calculateTip(10, 15)).toBe(1.5);
});

test("calculate tip for $22.57 w/ 20% tip", () => {
  expect(util.calculateTip(22.57, 20)).toBe(4.51);
});

// const myMockElement = {
//   addEventListener: jest.fn(),
// };
