class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let w of strs){
            const count = new Array(26).fill(0);
            for(let c of w){
                count[c.charCodeAt(0)-'a'.charCodeAt(0)]++;
            }
            const key = count.join(',');
            if (map.has(key)){
                map.get(key).push(w);
            } else {
                const current = new Array();
                current.push(w);
                map.set(key,current);
                //or you could just do map.set(key, [w]);
            }
        }
        return Array.from(map.values());
    }
}
