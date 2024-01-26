let birthYear = [1989,1990,1991,1992]
let ages = []

for(let i = 0 ; i < birthYear.length ; i++){
    let x = 2023 - birthYear[i]
    ages.push(x)
}
console.log(ages)


let q2 = birthYear.map(function(el,index,arr){
    return 2023 - el
})
console.log(q2)

// program 2 

let marks = [11,22,33,44,55]
// [21,32,43,54,65]
let q3 = marks.map(function(el,index,arr){
    return el + 10
})
console.log(q3)

// program 3

marks = [11,22,33,44,55]
let above30 = []
for(let i = 0 ; i < marks.length ;i++){
    if(marks[i] > 30){
        above30.push(marks[i])
    }
}
console.log(above30)

let q4 = marks.filter(function(el,index,arr){
    return el> 30
})  
console.log(q4)

// program 3

let numbers = [11,22,33]
let total = 0
for(let i = 0 ; i < numbers.length ; i++){
    total = total + numbers[i]
    //        0    +    11   -------> 11
    //        11   +    22  --------> 33
    //        33   +    33  --------> 66
}
console.log(total)

let q6 = numbers.reduce(function(acc,el,index,arr){
    return acc  + el
},5)
console.log(q6)







