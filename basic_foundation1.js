function createArray(num) {
    var newArray = [];
    for (let i = 0; i <= 255; i++) {
        newArray.push(i);
    }
    console.log(newArray)
}
createArray();

//  j % 2 ==0 returns even values


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function sum_even_numbers() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sum_even_numbers());


// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).


function sum_odd_numbers() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sum_odd_numbers());

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

var arr = [1, 2, 3];
function sum_arr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum_arr(arr));


// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

var arr = [1, 2, 3, 4, 5, 6];
function sum_arr(arr) {
    var max = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
// console.log(i);
console.log(sum_arr(arr));

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

var arr = [1, 2, 3, 4];
function avg_arr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(avg_arr(arr));

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

var arr = [];
// var newArr = [];
for (var i = 1; i <= 50; i += 2) {
    arr.push(i)
}
console.log(arr);

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

// var y = 3
// var arr = [1, 3, 5, 7]
function Gr_y(arr, y) {
    var count = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
    }
    return count
}
console.log(Gr_y([1, 3, 5, 7], 3))

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squares(arr) {
    for (i = 0; i < arr.length; i++) {
        if arr[i] = arr[i] * arr[i]
    }
    return arr
}
console.log(squares([1, 5, 10, -2]))

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])



function zero_out(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    return arr
}
console.log(zero_out([1, 5, 10, -2]))

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])


function maxMinAvg(arr) {
    var arrnew = [];
    var sum = 0;
    arr.forEach(function (elem) {
        sum += elem;
    });
    arrnew.push(Math.max.apply(null, arr));
    arrnew.push(Math.min.apply(null, arr));
    arrnew.push(sum / arr.length);
    return arrnew;
}

console.log(maxMinAvg([1, 5, 10, -2]))

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr) {
    var temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
    return arr;
}
console.log(swap([1, 5, 10, -2]))

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function zero_out(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo"
        }
    }
    return arr
}
console.log(zero_out([1, 5, 10, -2]))