## What is a Binary Search Algorithm?

- A binary search algorithm is a search algorithm used to find a specific element in a sorted array or list. It works by repeatedly dividing the search space in half until the target element is found or it determines that the element does not exist in the array.

## How to find a target in an array using a Binary Search Algorithm

- In this implementation, you start with a left pointer at the beginning of the array and a right pointer at the end of the array. While the left pointer is less than or equal to the right pointer, you calculate the mid index using integer division. If the value at the mid index is equal to the target, you return the mid index. If the value at the mid index is less than the target, you update the left pointer to mid + 1. If the value at the mid index is greater than the target, you update the right pointer to mid - 1. If the target is not found in the array, the loop will exit and you can return -1.

- This binary search algorithm has a logarithmic time complexity of O(log n) because it halves the search space in each iteration.