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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let fakeH = head;
        let length = 0;


        while(fakeH != null){ // finding the tail 
            fakeH = fakeH.next;
            length++;
        }
        let removalPoint = length - n; // length - n =  the node that we a re reassigning the .next of
        if(removalPoint == 0) return head.next;
         fakeH =  head; // reasigning fakeH to head
         let fakeh2 = fakeH; //value to be returned because fakeH will be used for iteration
         length=0;  // reasigning length
         
        while(fakeH != null){ // go through again to find positions of the newNext and newBefore
        length++;
        if(length == removalPoint){
            fakeH.next = fakeH.next.next;
            continue;
        }
            fakeH= fakeH.next;
        }

        

        return fakeh2;


    }
}
