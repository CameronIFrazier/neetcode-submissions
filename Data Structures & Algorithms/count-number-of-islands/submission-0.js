class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if(grid==null) return 0;

        let islands =0;
        for(let i=0; i<grid.length;i++){
            for(let j=0; j<grid[0].length;j++){
                if(grid[i][j]=="1"){
                    this.sink(grid,i,j);
                    islands++;
                    }
            }
        }
        return islands;
    }

    sink(grid,i,j){
        grid[i][j]="0";
        if(i+1<grid.length && grid[i+1][j]=="1")this.sink(grid, i+1, j); //down
        if(j-1>=0 && grid[i][j-1]=="1")this.sink(grid,i,j-1); //left
        if(j+1<grid[0].length && grid[i][j+1]=="1")this.sink(grid,i,j+1);  //right  
        if(i-1>=0 && grid[i-1][j]=="1")this.sink(grid,i-1,j);   //up
    }
}
