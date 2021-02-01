var num = 1;
while (num <= 20) {
    console.log(num);
    num = num + 2;
}

for(var i = 1; i <=20; i++){
    // console.log(i)
    if(i % 2 != 0){
        console.log(i)
    }
}

// var num = 1;
// var sum = 1;

// for (var num = 1; num < 5; num += 1){
// for(var sum = 1; num <=5; sum += num) {
    
    // console.log("Num:" + num+);
    // console.log("Sum: " + Sum++num);
// }
var sum = 0;
for(var i = 1; i <= 5; i++ ){
    // console.log(i)
    sum = sum+i
    console.log("Num: "+ i +", Sum: " + sum)
}