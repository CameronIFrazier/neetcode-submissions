class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for(const char of s){     
            //closing chars match
            if(char == ')' && (stack[stack.length-1]=='(')){
               stack.pop();     
                continue;
            } else if(char == ']' && (stack[stack.length-1]=='[')){
               stack.pop();  
               continue;   
            } else if(char == '}' && (stack[stack.length-1]=='{')){
                stack.pop();    
                continue;
            } 
 //closing chars dont match
            if(char == ')' && (stack[stack.length-1]!=='(')){
               return false;
            } else if(char == ']' && (stack[stack.length-1]!=='[')){
              return false;
            } else if(char == '}' && (stack[stack.length-1]!=='{')){
               return false;
            } 
            stack.push(char); 
        }

        return stack.length===0;
        
    }
}
