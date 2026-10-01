class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0;
        
        function compare (a, b){
            for(let char of a.keys()){
                if(a.get(char) == b.get(char)){
                    continue;
                } else {
                    return false;
                }
            }

            return true;
        }

        const map1 = new Map();
        const map2 = new Map();
        for(let i = 0; i<s1.length; i++){ //gets map of s1
           map1.set(s1[i], (map1.get(s1[i]) || 0 ) + 1)
        } 

      
        for(let i = 0; i<s2.length; i++){
            map2.set(s2[i], (map2.get(s2[i]) || 0) + 1)
            let wLength = i - left +1;
            if(wLength > s1.length){
                map2.set(s2[left], map2.get(s2[left]) - 1 ); // decrement key 
                if(map2.get(s2[left]) == 0) map2.delete(s2[left]); // delete a zero value key 
                left++ // move window to the right 
                 wLength = i - left +1;
            }
            if(wLength === s1.length) {
                if(compare(map1,map2)) return true;
            }
           

        }

        return false;
    }
}
