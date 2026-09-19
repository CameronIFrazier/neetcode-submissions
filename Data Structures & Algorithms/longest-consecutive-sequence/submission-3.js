class Solution {
    longestConsecutive(nums) {
        const numSet =  new Set(nums);
        let length =0;

        for(let num of numSet){
            if(!numSet.has(num-1)){
                
                let temp = num;
                let streak = 1;
                while(numSet.has(temp+1)){
                    streak++;
                    
                    temp++;
                    
                }
                length = Math.max(length, streak);
            }
        }
        return length;
    }

    
}