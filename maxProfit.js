const maxProfit = function(prices) {
    let left = 0; //buy
    let right = 1; //sell
    let max_profit = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left]; // our current

            max_profit = Math.max(max_profit, profit);
        } else {
            left = right; 
        }
        right++
    }

    return max_profit;
}

const arr1 = [7,1,5,3,6,4];

console.log(maxProfit(arr1));