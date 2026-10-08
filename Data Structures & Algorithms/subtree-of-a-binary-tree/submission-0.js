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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

       

       function subTree(root, subRoot){
        if(root === null && subRoot === null) return true;
        if(root === null || subRoot === null) return false;
        if(root.val != subRoot.val) return false;

        return subTree(root.left, subRoot.left) && subTree(root.right, subRoot.right);

       } 


        if (root === null) return false;              // ran off root, no match
        if (subTree(root, subRoot)) return true;     // match starts here
    
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
