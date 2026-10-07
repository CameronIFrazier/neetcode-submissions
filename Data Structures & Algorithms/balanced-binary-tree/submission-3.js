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
     * @return {boolean}
     */
    isBalanced(root) {
        if(root===null) return true;

        if (Math.abs(depth(root.left) - depth(root.right)) > 1) return false;

        function depth(root){   
            if(root===null) return 0;
            let rightDepth = depth(root.right);
            let leftDepth = depth(root.left);
            return 1 + Math.max(rightDepth, leftDepth);

        }
            return this.isBalanced(root.left) && this.isBalanced(root.right);
        
    }
}
