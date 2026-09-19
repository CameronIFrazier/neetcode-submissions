class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let str of strs) {
            result += str.length + "#" + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            let j = str.indexOf('#', i);
            let num_chars = parseInt(str.slice(i, j));
            let temp = str.slice(j + 1, j + 1 + num_chars);
            result.push(temp);
            i = j + 1 + num_chars;
        }
        return result;
    }
}
