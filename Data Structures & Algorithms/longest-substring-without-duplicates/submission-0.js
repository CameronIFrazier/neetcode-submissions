class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        
       let set = new Set();
       let max = 0;
       let left = 0;
       
        for(let i = 0; i<s.length; i++){
           if(set.has(s[i])){
           while(s[left]!=s[i]){
            set.delete(s[left]);
            left++;
           }
           left++; 
           set.add(s[i]);
           } else {
            set.add(s[i]);
             max =Math.max(max, set.size);
           }
        }
         return max ;
    }
}
