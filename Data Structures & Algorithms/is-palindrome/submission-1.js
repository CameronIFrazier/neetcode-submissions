class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s= s.replace(/[^a-zA-Z0-9]/g, '');
        s= s.toLowerCase();
        let s2=s.split('').reverse().join('');

        for(let i = 0; i <s.length; i++ ){
            if (s[i] !== s2[i]){
                return false;
            }
        }
        return true;
    }
}
