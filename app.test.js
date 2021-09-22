const app = require("./app");

it("Calculate tip test with values of 10 & 15", () => {
  const calculateTip = jest.fn((meal, tip) =>
    Number((meal * (tip / 100)).toFixed(2))
  );
  expect(calculateTip(10, 15)).toBe(1.5);
  expect(calculateTip(22.57, 20)).toBe(4.51);
  // expect(calculateTip(10, 15)).toBe(1.5);
});

it("test with mocking app", () => {
  document.body.innerHTML = '<button id="calculateBtn">Calculate Tip</button>';

  let calculateBtn = document.querySelector("#calculateBtn");

  const addEventListenerSpy = jest.spyOn(calculateBtn, "addEventListener");

  const handler = jest.fn((meal, tip) =>
    Number((meal * (tip / 100)).toFixed(2))
  );

  calculateBtn.addEventListener("click", handler);

  expect(addEventListenerSpy).toHaveBeenCalled();
});
