// 1. check given number is even or odd
// var number=16;
// if (number%2==0){
// console.log("this is even number");
// }
// else{
//     console.log("this number is odd");
// }


// 5. find the numbers who devided by 3 & 5 
// for (var i=1;i<=50;i++)
// {
//    if (i%3 ==0 && i%5==0 ) 
//    {
//     console.log(i);
//    }
// }

// 2. aktah array teh 1-20 projnto sonkha gulu alomeloh takbhe,amkeh seh gulu order by sajathe hobhe (NOT COMPLETED)
// var array = [10, 9, 8, 3, 20, 7, 11]
// for (var i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//         swap(array[i], array[i + 1])
//     }

// }

// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// 6. findout big string from array
// var names = ["arman", "sardar", "heroalam", "Bangladesh"]
// var longestName = names[0]
// for (var i = 0; i < names.length; i++) {
//     var element = names[i];
//     if (element.length > longestName.length) {
//         longestName = element
//     }
// }
// console.log(longestName);

// 8. find larg number from given array
var number=[1,3,2,10,4,11,16]
largNum=number[0]
for (var i=0;i<number.length;i++)
{
    var element=number[i]
    if (element> largNum)
    {
        largNum=element
    }
}
console.log(largNum);