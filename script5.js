// condition statements 
// numT > 0 && numT <= 5  -----> 10 % discount
// numT > 5 && numT <= 10 -----> 20 % discount
// numT > 10              -----> 30 % discount


let numT = -17

// if(numT > 0 && numT <= 5){
//     console.log("5 % discount")
// }
// if(numT > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// if(numT > 10){
//     console.log("30 % discount")
// }


// program 2

// if(numT > 0 && numT <= 5){
//     console.log("5 % discount")
// }
// else if(numT > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// else if(numT > 10){
//     console.log("30 % discount")
// }
// else {
//     console.log('incorrect input')
// }

// program 3 
marks = 56

// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks >= 75){
//     console.log("Grade B")
// }
// if(marks >= 65){
//     console.log("Grade B")
// }


// if(marks > 90){
//     console.log("Grade A")
// }
// else if(marks >= 75){
//     console.log("Grade B")
// }
// else if(marks >= 65){
//     console.log("Grade B")
// }
// else {
//     console.log("Please try again ...")
// }

// program 4

let a  = 10 
let b = 50

if( a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

// program 5

let x1 = 100 
let x2 = 500
let x3 = 300000

if(x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if(x2 > x1 && x2 > x3){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}


// program 6


let q = 10 
let r = 50

if(q > r){
    console.log("q is greater")
}
else {
    console.log("r is greater")
}

q > r ?console.log("q is greater"):console.log("r is greater")


age = 17
let q1 = age >= 18 ? "candrive":"cannot drive"
console.log(q1)



