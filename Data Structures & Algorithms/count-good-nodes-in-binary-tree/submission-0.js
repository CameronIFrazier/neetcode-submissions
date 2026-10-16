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
    goodNodes(root) {

        if(root === null) return 0;

        let max = root.val;

        function helper(node, max){
            if (node === null) return 0;
            let count = node.val >= max ? 1 : 0;
            let newMax = Math.max(max, node.val);
            return count + helper(node.left, newMax) + helper(node.right, newMax);
        }

        return helper(root, max);

    }
}
