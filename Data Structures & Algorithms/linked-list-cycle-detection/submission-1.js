/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if(head === null) return false;
        let dumbyHead = head;
        const set = new Set();
        let bool = false;
        while(dumbyHead.next){
            if(set.has(dumbyHead.val)){
                bool = true;
                break;
            }else{
                set.add(dumbyHead.val);
                dumbyHead = dumbyHead.next;
            }
        }

        return bool;
    }
}
