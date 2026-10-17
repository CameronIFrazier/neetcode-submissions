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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {

        if(root === null) return 0;

        

        function helper(node, list){      
        if(node === null) return;      
           
           helper(node.left, list);
           list.push(node.val);
           helper(node.right, list);
        }
         
        let inOrder = [];

        helper(root, inOrder);

        return inOrder[k-1];
        
    }
}
