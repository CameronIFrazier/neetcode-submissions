class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const map = new Map();
    for (let n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    // create n+1 buckets (index = frequency)
    const buckets = Array.from({ length: nums.length + 1 }, () => []);

    // place each number into its frequency bucket
    for (let [num, freq] of map.entries()) {
        buckets[freq].push(num);
    }

    // collect top k results, iterating from highest frequency down
    const result = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        for (let num of buckets[i]) {
            result.push(num);
            if (result.length === k) return result;
        }
    }
}
}
