function stringTransform(input) {
    // Check if the length of the input string is divisible by 3
    if (input.length % 3 === 0) {
        // If true, reverse the string
        input = input.split('').reverse().join('');
    }
    // Check if the length of the input string is divisible by 5
    if (input.length % 5 === 0) {
        // If true, convert each character to its ASCII code and join them with spaces
        input = input.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    // Return the transformed string
    return input;
}

// Test Cases
const testCases = [
    "TetaAngel",        // Expected: "legnAateT" (length 9, divisible by 3)
    "hello",            // Expected: "104 101 108 108 111" (length 5, divisible by 5)
    "abcdef",           // Expected: "fedcba" (length 6, divisible by 3)
    "Hello World!!!!"   // Expected: "33 33 33 33 100 108 114 111 87 32 111 108 108 101 72" (length 15, divisible by 3 and 5)
];

// Running Test Cases
testCases.forEach((input, index) => {
    // Transform the input string using the stringTransform function
    const output = stringTransform(input);
    // Log the result of each test case
    console.log(`Test Case ${index + 1}: "${input}" => "${output}"`);
});

// Example usage
const input = "Hello World!!!!";
// Log the example usage result
console.log(`Example: "${input}" => "${stringTransform(input)}"`);
