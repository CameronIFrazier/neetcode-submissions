class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows =  Array.from({length: 9}, () => new Set); // creates a array of 9 sets 
        const cols =  Array.from({length: 9}, () => new Set); 
        const boxes =  Array.from({length: 9}, () => new Set); 

        for(let i = 0; i<board.length;i++){
            for(let j = 0; j<board.length;j++){
                let current = board[i][j];
                if(current === '.') continue;
                let box = Math.floor(j/3)+ Math.floor(i/3)*3;
                if (rows[i].has(current)){
                    return false;
                }else {
                    rows[i].add(current);
                }
                if (cols[j].has(current)){
                    return false;
                }else {
                    cols[j].add(current);
                }
                if (boxes[box].has(current)){
                    return false;
                }else {
                    boxes[box].add(current);
                }

            }
        }
        return true;
    }
}
