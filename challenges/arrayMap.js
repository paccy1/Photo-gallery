function hasSubarrayWithSum(arr, target) {
    let start = 0;
    let current_sum = 0;

    for (let end = 0; end < arr.length; end++) {
        // Add the current element to the current_sum
        current_sum += arr[end];

        // While current_sum exceeds the target, move the start pointer to the right
        while (current_sum > target && start <= end) {
            current_sum -= arr[start];
            start++;
        }

        // Check if current_sum is equal to the target
        if (current_sum === target) {
            return true;
        }
    }

    // No subarray found that sums to the target
    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
console.log(hasSubarrayWithSum(arr, target)); // Output: true
