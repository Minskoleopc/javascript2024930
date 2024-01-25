
let names = ["chinmay","shirish","ravi","ram"]
let a = names.push("sarika")
console.log(a)
console.log(names)


let b = names.unshift("raj")
console.log(b)
console.log(names)

// [ 'raj', 'chinmay', 'shirish', 'ravi', 'ram', 'sarika' ]
let c = names.pop()
console.log(c)
console.log(names)

let d = names.shift()
console.log(d)
console.log(names)

// push()  , unshift() , pop() , shift()

//              0        1       2        3
let fruits = ["apple","mango","banana","orange"]
let e = fruits.includes("Apple")
console.log(e)

let f = fruits.indexOf("apple")
console.log(f)


let g = fruits.at(2)
console.log(g)

let h = fruits.reverse()
console.log(h)

console.log(fruits.length)


// program 9

//                0     1    2   3 
let birthYear = [1989,1990,1991,1992]
let ages = [] // [34,33,32,31]
//[34,33,32,31]
for(let i = 0 ; i < birthYear.length ; i++){
   // console.log(i)
   //console.log(birthYear[i])
   let x = 2023 - birthYear[i]
   ages.push(x)
}
console.log(ages)

// program 2
//           0   1 2  3  4  5  6
let marks = [89,77,66,56,78,79,80]
let above70 = []
// [89,77,78,79,80]

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 70){
        above70.push(marks[i])
    }
}
console.log(above70)


// program 3
//              0  1 2
let numbers = [11,22,33]
let total = 0
for(let i = 0; i < numbers.length ; i++){
    //console.log(i)
    total = total + numbers[i]
    //       0    +     11  //   -----11
    //      11    +     22  //    -----33
    //      33    +      33       ------ 66
}
console.log(total)

// program 4

let city = ["pune","mumbai","banglore","kolkata"]
for(let i = 0 ; i < city.length ; i++){
    //console.log(i)
    console.log("welcome "+city[i])
}




