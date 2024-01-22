
let names = ["amol","ram","sham"]
names.push("amit")
console.log(names)

// program 1
//                 0     1   2   3 
let birthYear = [1989,1990,1991,1992]
let ages = [] // [34,33,32,21]
//[34,33,32,31]

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    let x = 2023 - birthYear[i]
    ages.push(x)
   
}
console.log(ages)

// program 2
//           0  1  2   3  4 5
let marks = [88,92,67,77,84,90]
// [88,92,84,90]
let above80 = []
for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])

    if(marks[i] > 80){
        above80.push(marks[i] )
    }
}
console.log(above80)


// program 3
//              0  1  2
let numbers = [11,22,33]
//66
let total = 0
for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])
    total = total + numbers[i]
    //       0    +     11  =======> 11
    //       11   +     22  =======> 33
    //       33   +     33  =======> 66
}
console.log(total)

// program 4

let cities = ["pune","nagpur","bangalore"]
for(let i = 0  ; i < cities.length ; i++){
    console.log("welcome "+cities[i])
}
