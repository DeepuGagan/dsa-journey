`https://leetcode.com/problems/best-time-to-buy-and-sell-stock/`

// my method

// Time Complexity: O(n), Space Complexity: O(1)
const BTTBASS = (prices) => {
  let min = prices[0]
  let maxProfit = 0

  for (let price of prices) { //use for i for speed
   min = Math.min(min,price)        
   // instead of min --> if(prices[i] < min) min = price
    maxProfit = Math.max(maxProfit, price - min) 
     // instead of max--> 
     // profit = price-min
     //  if(profit > maxProfit) maxProfit = profit
  }
  return maxProfit
}