/*
Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/

let deepEqual = (x, y) => {
    if ((typeof(x) == 'object') && (typeof(y) == 'object')) {
        if (x === null || y === null) {
            if (x === null && y === null) {
                return true;
            } else {
                return false;
            }
        }
        if (Object.keys(x).length == Object.keys(y).length) {
            for (let key in x) {
                if (!deepEqual(x[key], y[key])) {
                    return false;
                }
            }
            return true;
        }
    } else if (x === y) {
        return true;
    } else {
        return false;
    }

};

let testObj1 = {a: 1, b: {ab: 1}};
let testObj2 = {a: 1, c: {ab: 1}};

console.log(deepEqual(testObj1, null));
console.log(deepEqual(testObj1, testObj2));
console.log(deepEqual(null, null));
console.log(deepEqual(3, 3));
console.log(deepEqual(3, "3"));