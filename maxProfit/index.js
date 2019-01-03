/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0], maxProfit = 0;
  for (let i = 1; i < prices.length; i ++) {
    if (prices[i] > buy) {
      maxProfit = Math.max(maxProfit, prices[i] - buy);
    } else {
      buy = prices[i];
    }
  }
  return maxProfit;
};

module.exports = maxProfit;