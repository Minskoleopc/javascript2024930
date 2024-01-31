// program 1
// includes()
//              0          1       2
let names = ["chinmay","shirish","samay"]
console.log(names[0])
let q1 = names.includes("shirish")
console.log(q1)

// program 2
// concat()
let numbersA = [11,22,33]
let numbersB = [44,55,66]
let numbersC = numbersA.concat(numbersB)
console.log(numbersC)

// program 3
// flat()
//                   0                   1                     2
//               0        1          0        1           0         1
let state = [ ["Nagpur",'Wardha'],["Jaipur","Udaipur"],["Lucknow","Kanpur"]]
console.log(state[0][0])
console.log(state[1][1])
console.log(state[1][0])
console.log(state[2][1])
let q2 = state.flat()
console.log(q2)

// program 4

//              0       1       2          3         4         5        6
let cities = ["pune","nagpur","mumbai","kolkata","chennai","raipur","udaipur"]
//             -7       -6      -5        -4          -3        -2       -1
//cities.slice(startIndex,endIndex(not inclueded))
console.log(cities.slice(3))
console.log(cities.slice(1,4))
console.log(cities.slice(-6))
console.log(cities.slice(-6,-1))
console.log(cities.slice(1,-1))
console.log(cities.slice(-7,5))
console.log(cities.slice(-1,-5))


// program 5 
//splice(startIndex,numberofElementsToBeDeleted)
//              0        1        2       3       4         5
let fruits = ["apple","mango","banana","orange","papaya","orange"]

//fruits.pop()
//fruits.shift()

// console.log(fruits.splice(1,2))
//console.log(fruits.splice(1,1))
//console.log(fruits.splice(3,3))

fruits.splice(3,2,"grapes","chikoo","pineapple")
console.log(fruits)
