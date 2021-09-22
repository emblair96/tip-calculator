document.addEventListener("DOMContentLoaded", function () {
  let mealLabel = document.querySelector("label[for=mealAmt]");
  let mealAmt = document.querySelector("#mealAmt");
  let tipLabel = document.querySelector("label[for=tipPercentage]");
  let tipPercentage = document.querySelector("#tipPercentage");
  let calculateBtn = document.querySelector("#calculateBtn");
  let nextBtn = document.querySelector("#nextBtn");
  let clearBtn = document.querySelector("#clearBtn");
  let numsBtns = document.querySelectorAll(".numsBtns");
  let mealField = true;

  const calculateTip = (meal, tip) => {
    return Number((meal * (tip / 100)).toFixed(2));
  };

  const registerNumClick = (e) => {
    if (mealField) {
      mealAmt.value += `${e.target.value}`;
    } else {
      tipPercentage.value += `${e.target.value}`;
    }
  };

  const nextField = () => {
    mealField = false;
    nextBtn.textContent = "Calculate Tip";
    mealLabel.classList.add("hide");
    mealAmt.classList.add("hide");
    nextBtn.classList.add("hide");
    tipLabel.classList.remove("hide");
    tipPercentage.classList.remove("hide");
    calculateBtn.classList.remove("hide");
  };

  const clear = () => {
    if (mealField) {
      mealAmt.value = "";
    } else {
      tipPercentage.value = "";
    }
  };

  calculateBtn.addEventListener("click", () => {
    if (!mealAmt.value || !tipPercentage.value) return;

    let tip = calculateTip(mealAmt.value, tipPercentage.value);
    let total = Number(mealAmt.value) + tip;
    let tipP = document.createElement("p");
    tipP.textContent = `Tip Amount: ${tip}`;
    let totalP = document.createElement("p");
    totalP.textContent = `Total (includ. tip): ${total}`;
    document.querySelector(".output-fields").append(tipP, totalP);
  });

  for (let button of numsBtns) {
    button.addEventListener("click", registerNumClick);
  }

  nextBtn.addEventListener("click", nextField);
  clearBtn.addEventListener("click", clear);
});
