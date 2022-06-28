var subTypeElement = document.querySelector(".subscription-select");
var subDurationElement = document.querySelector(".duration-select");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = e.target.value;
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = (monthlyCost * subDuration).toFixed(2);
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
