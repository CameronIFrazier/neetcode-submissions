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
     * @return {ListNode}
     */
    reverseList(head) {

        let prev = null;
        let current = head;

        while (current !== null) {
            let next = current.next;   // 1. save the rest of the list
            current.next = prev;       // 2. flip this node's pointer backward
            prev = current;            // 3. move prev onto this node
            current = next;            // 4. move current to the saved next
        }

        return prev;     
       
       
       
    }
}
