// Array in Javascript
// Array: Array in js are a type of the data structure that allows you to store multiple values 

// Creating Array:

//using array literal
// let colors=["red","yellow","green"];

//using array as a constructor

// let numbers=newArray(1,2,3,4,5);

//Accessing array elements

// let colors=["red","yellow","blue"];

// colors.forEach(function(color){
//     console.log(color);
// })


// Array Properties and Method

// 1.Length

// let colors=["red","blue","black"]
// console.log(colors.length)


// 2.Push():Adds one or more elements in the array from end


// let num=[1,2,3,4,5,6]
// num.push(1);
// num.push(178);
// console.log(num)


// 3.Pop():Remove elements from the end of the array

// let number=[1,2,3,4,5,6]
// number.pop()
// number.pop()
// console.log(number)

// 4.Shift():it is used to remove the elements from the starting of the array

// let num=[1,2,3,4,5,6,7]
// num.shift()
// console.log(num)

// 5.unshift(): it is used to add element from the starting of the array

// let num=[1,2,3,4,5,6]
// num.unshift(45)
// console.log(num)

// 6.indexof():it is used to find the index number of the elemnts of the array

// let num=[1,2,3,4,5,6]
// console.log(num.indexOf(6));

//concat():using to join two or more array

// let num=[1,2,3,4,5,6]
// let num2=[1,2,3,4,5,6]
// let newArray=num.concat(num2);
// console.log(newArray)

//filter to find number is even

// let number=[1,2,3,4,5,6];
// let evenNumber=number.filter(function(num){
//     return num % 2==0;
// });
// console.log(evenNumber)

//filter to find number is odd

// let num=[4,5,7,8,9,0,1,2,3,4,6]
// let oddNumber=num.filter(function(num){
//     return num%3==0;
// })
// console.log(oddNumber)

// max()
// let a=[2,3,4,8,9,99]
// let result=Math.max(...a);
// console.log(result);


// Math.max.apply()

// let a=[1,22,33,555,677]
// let result=Math.max.apply(null,a);
// console.log(result)

//math.apply.max()

let a=[1,2,3,4,5,6]
let result=Math.max.apply(null,a);

console.log(result);


//math.random()
// let b=Math.random();
// console.log(b)