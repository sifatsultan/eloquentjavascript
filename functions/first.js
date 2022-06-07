const SCRIPTS = require("../scripts")


function countBy(items, groupName) {
    let counts = []
    for (let item of item){
        let name = groupName(item);
        let known = counts.findIndex(c => x)

    }
}

/*

__________________________
Strings and character codes
__________________________

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }

    return null;
}


console.log(characterScript(121))


let horseShoe = "🐴"
console.log(horseShoe.length)
console.log(horseShoe.charCodeAt(0))
console.log(horseShoe.codePointAt(0))

let roseDragon = "🌹🐉";
for( let char of roseDragon){
    console.log(char)
}
__________________________
Composability
__________________________


function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from)
    }, 0)
}
let biggest = null;
for (let script of SCRIPTS) {
    // if the first condition is true then it will not bother going to the second condition. the first condition will be true in the first attempt. if the first condition is not true then it will check the condition which means the biggest has a value. Hence it checks if the count of characters inside the biggest is less than the count of characters in the current script item that is being iterated. If that is true than make the new/current script item as the biggest and move onto the next item.
    // in the second attempt once again the biggest has a value that will fail the first condition in the if condition so it will go to the second condition which will check if the count of characters in the previous script item is less then the current script item and if that is the case then it will make the new script item as the biggest
    if (biggest == null || characterCount(biggest) < characterCount(script)) {
        biggest = script
    }
}
console.log(biggest)


function average(array) {
    return array.reduce((a, b) => a + b) / array.length
}

console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living)
        .map(s => s.year))
))



let total = 0; count = 0

for (let script of SCRIPTS) {
    if (script.living) {
        total += script.year;
        count += 1;
    }
}


console.log(Math.round(total / count))

__________________________
Summarizing with reduce
__________________________

Compute a single value from an array is a higher-order operation that represents a pattern called reduce. It builds a value by repeatedly taking a single element from the array and combining it with the current value.


Notice how the combine action/function is passed as a parameter which allows the flexibility to define combine differently depending on the case.


function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element)
    }

    return current
}


console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 1));



let arabic = SCRIPTS.filter(s => s.name == "arabic")

let arabicCharCount = characterCount(arabic)

console.log(arabicCharCount)


function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from)
    }, 0)
}


console.log(SCRIPTS.reduce((a, b) => {
    // a is the previous value
    // which is the script with highest characterCount
    // then we do a check to see if the characterCount of the previous processed/derived script is having less characters than the current script. if that is the case then make the new script the new max; the script with maximum number of character otherwise leave it is.
    return characterCount(a) < characterCount(b) ? b : a;
}))

/** inside the reduce we are passing the previous calculated/folded/reduced value which is {count} and the current item which is an array object with the form [from, to] structure that gets destructured and then used in the reduce formula.
 * 
 * 
__________________________
Transforming with map
__________________________


The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been mapped to a new form by the functions

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }

    return mapped;
}



let rtlScripts = SCRIPTS.filter(script => script.direction == "rtl")


console.log(map(rtlScripts, script => script.name))


__________________________
FILTERING ARRAYS
__________________________



// console.log(SCRIPTS)


function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}



// console.log(filter(SCRIPTS, script => script.living));

console.log(SCRIPTS.filter(script => script.living));


----------------------
Funtions that change other functions 
---------------------
['A', 'B'].forEach(l => repeat(4, n => { console.log(l) }))
function repeat(n, f) {
    for (let i = 0; i < n; i++) { f(i) }
}

function repeat(n, f) {
    for (let i = 0; i < n; i++) { f(i) }
}

function unless(test, then) {
    if (!test) then();
}

repeat(4, n => {
    unless(n % 2 == 1, () => {
        console.log(n, 'is event')
    })
})



function noisy(f) {
    return (...args) => {
        let result = f(...args);
        return result;
    }
}

let res = noisy(Math.min)(3, 2, 1);
let maxRes = noisy(Math.max)(3, 2, 1);

console.log(res)
console.log(maxRes)


/**Functions that create new functions 

function greaterThan(n) {
    return m => m > n
}

let greaterThan10 = greaterThan(10)
console.log(greaterThan10(14))


*/