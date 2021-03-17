/*
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

let countBs = (testString) => {
    let count = 0;
    for (let i = 0; i < testString.length; i++) {
        if (testString[i] == 'B') {
            count++;
        }
    }
    return count;
};

let countChar = (testString, searchChar) => {
    let count = 0;
    for (let i = 0; i < testString.length; i++) {
        if (testString[i] == searchChar) {
            count++;
        }
    }
    return count;
};

let countBs2 = (testString) => {
    return countChar(testString, 'B');
};

console.log(countBs('BBsBBsaebB'));
console.log(countChar('BBsBBsaeb', 'B'));
console.log(countBs2('BBsBBsaeb'));