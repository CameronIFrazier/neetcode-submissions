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
    isValidBST(root) {
        


        function helper(root, left, right) {
    if (root === null) return true;
    if (!(left < root.val && root.val < right)) return false;
    return helper(root.left, left, root.val) && helper(root.right, root.val, right);
}
        return helper(root, -Infinity, Infinity);
        // -Infinity
    
}
}