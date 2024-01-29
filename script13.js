
// map

// program 1
let birthYear = [1989,1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
    return 2023 - el
})
console.log(q1)

// program 2

let numbers = [11,22,33,44,55,66]
let q2 = numbers.map(function(el,index,arr){
    return el + 10
})
console.log(q2)

// program 3

let marks = [11,33,44,55,22,3,45,66,77,88,33]
let q3 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)

let transactions = [444,-55,6666,7777,-99,8888,-8888,9000]
let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
let withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})

console.log(deposit)
console.log(withdrawl)

// program 3

let numbersA = [11,22,33]
let q4 = numbersA.reduce(function(acc,el,index,arr){
    return el + acc
},0)
console.log(q4)
// program 4

let cities  = ["mumbai","nagpur","wardha"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})


// program 5
//           0 1  2   3  4  5  6 7 
let cal =  [33,44,55,66,77,88,33,44]
let oo = cal.find(function(el,index,arr){
    return el > 50
})
console.log(oo)
// program 6

let ooo = cal.findIndex(function(el,index,arr){
    return el > 50
})
console.log(ooo)

// program 7

let n  = [1,22,33,11,22,33,44,66]
let iii = n.every(function(el,index,arr){
    return el > 10
})
console.log(iii)

// program 8
let m  = [1,22,33,11,22,33,44,66,100]
let ppp = m.some(function(el,index,arr){
    return el > 100
})
console.log(ppp)

// map()
// filter()
// reduce()
// forEach()
// find()
// findIndex()
// every()
// some()









