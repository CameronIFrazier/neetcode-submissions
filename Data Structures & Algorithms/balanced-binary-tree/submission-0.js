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
        this.isbalance=0;
        this.condition = true;
        this.balance(root);
        return this.condition;
        
    }

    balance(root){
    if(root == null) return true;

        let left = this.balance(root.left);
        let right = this.balance(root.right);

        this.isbalance = Math.abs(left - right);

        if(this.isbalance > 1) this.condition =false;

        return Math.max(left, right) +1;
    }
}
