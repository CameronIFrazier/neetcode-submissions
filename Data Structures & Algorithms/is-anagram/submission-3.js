class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map();

        for(let letter of s){
            map.set(letter, (map.get(letter) ?? 0) +1)
        }

        for(let tletter of t){
            map.set(tletter,(map.get(tletter) ?? 0) -1 )
        }

        for(let val of map.values()){
            if(val != 0) return false;
        }
        return true;
      
    }
}
