
/* Num 6, Sum 6
Num 3, Sum 9
Num 5, Sum 14
Num 1, Sum 15
Num 2, Sum 17
Num 4, Sum 21 

// [0,3,10,3,8,20]


var testArr = [6, 3, 5, 1, 2, 4]
printSum() {
    var sum = 0;
    console.log(i)
    sum += i
    console.log(`Int:  ${i}, Sum: ${sum}`)
}

printSum()*/


var testArr = [6, 3, 5, 1, 2, 4]
var sum = 0; for (var num = 0; num < testArr.length; num++) {
    sum = sum + testArr[num]
    console.log("num: " + testArr[num], "Sum is: " + sum)
}