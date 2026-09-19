class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let left = 0;
        let right = heights.length-1;
        let area = 0;

        while(left<right){

            let width = Math.abs(left-right);
            let height = Math.min(heights[left],heights[right]);
            area = Math.max(area, width*height);

        if (heights[left] < heights[right]) left++;
        else right--;
            
        }
        return area;
    }
}
