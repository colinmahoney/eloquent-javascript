/*
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

let arrayToList = (items) => {
    let list = {};
    for (let item of items.reverse()) {
        if (list.value == undefined) {
            list = {value: item, rest: null};
        } else {
            list = {value: item, rest: list};
        }
    }
    return list;
};

let prepend = (element, list) => {
    return {value: element, rest: list};
};

let nth = (list, index) => {
    console.log(index);
    if (index == 0) {
        return list;
    } else if (list.rest == null) {
        return undefined;
    } else {
        return nth(list.rest, index - 1);
    }
};

let testArray = [1, 2, 3, 4];
let list1 = arrayToList(testArray);
console.log(list1);
console.log(prepend(4, list1));
console.log(nth(list1, 4));