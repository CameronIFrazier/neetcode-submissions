class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let n of nums){
            map.set(n, (map.get(n) || 0) + 1);
        }
        return [...map.entries()]
        .sort((a, b) => b[1] - a[1])  // sort by frequency descending
        .slice(0, k)                   // take top k
        .map(([num]) => num);          // return just the numbers
    }
}
