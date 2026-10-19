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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let a = list1;
        let b = list2;


        let c = new ListNode(1);
        let cHead = c;
       while(a !== null && b !== null){
       if (a.val <= b.val) {
        c.next = a;
        a = a.next;
        } else {
        c.next = b;
        b = b.next;
        }
        c = c.next;

       }
       c.next = a !== null ? a : b;
return cHead.next;
        
    }
}
