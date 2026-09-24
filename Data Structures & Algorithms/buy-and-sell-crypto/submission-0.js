class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let buy = prices[0];
        let greed = 0;

        for(let i=0; i<prices.length;i++){
            buy = Math.min(buy, prices[i]);

            let current = prices[i] - buy;
            greed =Math.max(greed, current);
        }
        return greed;
    }
}
