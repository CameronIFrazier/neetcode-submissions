class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let left = 1;
        let right = Math.max(...piles);
        let k = Math.floor((left+right)/2);
        //binary serach over k (speed)
        let bestTime = 1;
        while(left<=right){
            let hours = 0;
            for(let i =0; i<piles.length;i++){
                hours+=Math.ceil(piles[i]/k);               
            }
            if(hours>h){ //took to long, increase speed
            left=k+1;
            } else{ //too fast, slow down
            right=k-1;  
            bestTime = k;
            } 
            k = Math.floor((left+right)/2);
        }
        return bestTime;
    }
}
