/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {

        if(root === null){
            return [];
        }
        
        let list = [];

        let queue = [root];

        while(queue.length>0){
            let level = [];
            let levelSize = queue.length;
            

            while(levelSize > 0){

                let node = queue.shift();
                level.push(node.val);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                levelSize--;

            }
            list.push(level[level.length-1]);

        }

return list ;


    }
}
