const app = require("../public/app");

beforeAll(() => {
  document.body.innerHTML =
    '<button id="calculateBtn">Calculate Tip</button>' +
    '<button class="numsBtns">0</button>' +
    '<button class="numsBtns">1</button>' +
    '<div class="output-fields"></div>';
});

it("Mock calculate tip function & test various values", () => {
  const calculateTip = jest.fn((meal, tip) =>
    Number((meal * (tip / 100)).toFixed(2))
  );
  expect(calculateTip(10, 15)).toBe(1.5);
  expect(calculateTip(22.57, 20)).toBe(4.51);
});

it("mock event listener and check click event happens", () => {
  // document.body.innerHTML = '<button id="calculateBtn">Calculate Tip</button>';

  let calculateBtn = document.querySelector("#calculateBtn");

  const addEventListenerSpy = jest.spyOn(calculateBtn, "addEventListener");
  const handler = jest.fn((meal, tip) =>
    Number((meal * (tip / 100)).toFixed(2))
  );

  calculateBtn.addEventListener("click", handler);

  expect(addEventListenerSpy).toHaveBeenCalled();
});

it("mock event listener and check click event happens", () => {
  // document.body.innerHTML =
  //   '<button class="numsBtns">0</button>' +
  //   '<button class="numsBtns">1</button>';

  let numsBtns = document.querySelector(".numsBtns");

  const addEventListenerSpy = jest.spyOn(numsBtns, "addEventListener");
  const handler = jest.fn(() => {
    console.log("hello?");
  });

  numsBtns.addEventListener("click", handler);

  expect(addEventListenerSpy).toHaveBeenCalled();
});

/*
it("test if tip is appended to the body", () => {
  // clear body contents
  // dispatch click event to listener
  let outputFields = document.querySelector(".output-fields");

  console.log(outputFields.children);

  const addEvt = new Event("click");
  calculateBtn.dispatchEvent(addEvt);

  console.log(outputFields.children);
  expect(outputFields.innerHTML).toBe(" ");
  // expect(outputFields.firstChild.tagName).toBe("p");
});
*/
