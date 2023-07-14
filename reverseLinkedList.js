// iterative
var reverseListIter = function(head) {

    // initialize pointers
    let prev = null;
    let current = head;
    let next = null;

    while (current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};
let input = [1, 2, 3 ,4, 5];
console.log(reverseListIter(input))

// 1. Create a prev variable and assign it to null
// 2. Loop through the linked list (while head !++ null)
// 3. Create next variable and assign it head.next (temp variable so we don't lose what we have)
// 4. Assign head.next to prev
// 5. Update prev to become the current node. Assign prev to head
// 6. Assign head to next (we used this to hold the rest of the linked list)
// 7. Return prev because that's going to start with the head of the new linked list
var reverseListIter2 = function(head) {
    let prev = null;
    while(head !== null){
        let nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }

    return prev;
};
