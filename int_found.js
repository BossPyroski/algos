// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num) {
    var sig = 0
    for (var i = 1; i <= num; i++) {
        sig += i
    }
    return sig
}
console.log(sigma(5))

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function sigma(num) {
    var sig = 1
    for (var i = 1; i <= num; i++) {
        sig *= i
    }
    return sig
}
console.log(sigma(5))


// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibonacci(idx) {
    // f(n+=)=f(n-1)+f(n-2)
    var fib = 0
    var fib1 = 1
    for (var i = 2; i <= idx; i++) {
        var fn = fib1 + fib
        var fib = fib1
        var fib1 = fn
    }
    console.log(fn)
}
fibonacci(15)
// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.


function secondToLast(arr) {
    for (var i = 0; i < arr.length - 2; i++) {
        arr[i] = arr[arr.length - 2]
        arr[arr.lenght - 2] = arr[i]
    }
    if (arr[i] - 2 >= i) {
    }
    return arr[arr.length - 2]
}
console.log(secondToLast([42, "liam", "maybe", 13]))

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nthToLast(arr, b) {
    var b = arr[arr.length - 3]
    for (var i = 0; i < arr.length - 3; i++) {
        arr[arr.length - 3] = arr[i]
        arr[i] = b
    }
    if (arr[arr.length] - 3 >= i) {
    }
    return b
}
console.log((nthToLast[5, 2, 3, 6, 4, 9, 7], 3))

// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr) {
    var max = 0
    var secondmax2 = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > secondmax2 && arr[i] < max){
                secondmax2 = arr[i]
            }
        }
    return max, secondmax2
    }

console.log(secondLargest([61, 47, 102,1888,17]))



function doubleTrouble(arr) {
    for(var i = 0; arr.length -1; i > arr.length; i--){
        arr.push([i])
    }
    return arr
}
conesole.log(doubleTrouble([1, 2, 3, 4, 5]))

