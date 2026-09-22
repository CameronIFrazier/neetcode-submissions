class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = position.map((p,i)=>[p, speed[i]])
        pairs.sort((a,b)=>b[0]-a[0]);

        let leaderTime = 0;
        let fleets = 0;
        for (const [pos, spd] of pairs) {
        let arrTime = (target - pos) / spd;
        if(arrTime>leaderTime){
            fleets++;
            leaderTime =  arrTime;
        }

        }
        return fleets;
    }

    
}
