/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

Answer: I would expect 'reverseArray' to be both more useful and faster.

*/

let reverseArray = (origArray) => {
    let newArray = [];
    for (let item of origArray) {
        newArray.unshift(item);
    }
    return newArray;
};

let reverseArrayInPlace = (origArray) => {
    for (let i = 0; i < (origArray.length / 2); i++) {
        let item = origArray[i];
        let swapIndex = (origArray.length - 1) - i;
        origArray[i] = origArray[swapIndex];
        origArray[swapIndex] = item;
    }
    //return origArray;
};

let testArray = [1, 2, 3, 4, 5];
console.log(reverseArray(testArray));
console.log(reverseArrayInPlace(testArray));
console.log(testArray);