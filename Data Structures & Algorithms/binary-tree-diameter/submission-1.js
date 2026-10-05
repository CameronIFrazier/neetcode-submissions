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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
    
        let maxDiameter = 0;

        

     function depth(node){  
        if (node === null) return 0;
let left = depth(node.left);
let right = depth(node.right);
maxDiameter = Math.max(maxDiameter, left + right);   // the diameter check
return 1 + Math.max(left, right);                    // the depth, for parent

     }

     depth(root);

        return maxDiameter;

    }

    
}
