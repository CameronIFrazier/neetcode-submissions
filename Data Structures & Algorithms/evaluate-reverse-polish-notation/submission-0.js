class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack =  [];
        let currentResult =0;
        for(const char of tokens){
            if(!isNaN(char) ){ //number
                stack.push(Number(char));
            } else { //operator
            
            
                let a = stack.pop();
                let b = stack.pop();
                switch (char) {
                case '+': currentResult = a + b; break;
                case '-': currentResult = b - a; break;
                case '*': currentResult = a * b; break;
                case '/': currentResult = Math.trunc(b / a); break;
                

               
                //perform op
            }
            stack.push(currentResult);
            }
        }

        return stack[0];
    }
}
