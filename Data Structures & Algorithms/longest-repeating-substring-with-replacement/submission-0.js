class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       const map = new Map();
        let left = 0;
        let highest =0;
        
       for(let i = 0; i <s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0 ) + 1);
        let wLength = i -  left + 1;

        while(wLength - Math.max(...map.values()) > k){
            map.set(s[left], map.get(s[left]) -1);
            left++;
            wLength = i -  left + 1;
        }

        highest = Math.max(wLength, highest);

       }

       return highest;
    }
}