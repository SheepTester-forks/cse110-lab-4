// Question 1
function discountPrices(prices, discount) {
  var discounted = [];
  var finalPrice = 0;

  for (var i = 0; i < prices.length; i++) {
    var discountPrice = prices[i] * (1 - discount);
    finalPrice = Math.round(discountPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  console.log(i);
  // console.log(discountPrice);
  // console.log(finalPrice);

  return discounted;
}

discountPrices([100, 200, 300], 0.5);
