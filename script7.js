

//intilization 

// while(condition){
    // statement
    // increment / decrement
//}


// break with while 


// let i1 = 1 
// while(i1 <= 5){
//     console.log(i1) // 1 // 2 // 3
//     if(i1 == 3){
//         break
//     }
//     i1 = i1 + 1 // 2 // 3 
// }

// let i5 = 5 
// while(i5 >= 1){
//     if(i5 == 4){
//         break
//     }
//     console.log(i5) // 5
//     i5 = i5 - 1 // 4
// }


// continue with while 
// let i3 = 1
// while(i3 <= 5){
//     if(i3 == 3){
//         i3 ++ // 4
//         continue
//     }
//     console.log(i3)  // 1 // 2 // 4  // 5
//     i3 ++  // 2 // 3 // 5 // 6
// }


// switch without break
// program 1
let city = "jaipur"
switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "indore":
        console.log("MP")
    default:
        console.log("incorrect city name")
}

// switch case with break statemnet

// program 2
let city2 = "luckdasdasdasdnow"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "indore":
        console.log("MP")
        break
    case "udaipur":
        console.log("RJ")
        break
    case "lucknow":
        console.log("UP")
        break
    default:
        console.log("incorrect city name")
}


// program 3

let city3 = "nagpdsadaur"
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break

    case "bhopal":
    case "indore":
        console.log("MP")
        break

    case "udaipur":
    case "jaipur":
        console.log("RJ")
        break

    case "lucknow":
    case "kanpur":
        console.log("Up")
        break
    
    default:
        console.log("Incorrect city name")
}


// program 4
let x1 = 1000
let x2 = 50000
let x3 = 200
let greater = true
// if(x1 > x2 && x1 > x3){
//     console.log("x1 is greater")
// }
// else if(x2> x1 && x2 > x3){
//     console.log("x2 is greater")
// }
// else {
//     console.log("x3 is greater")
// }

switch(greater){
    case x1 > x2 && x1 > x3:
        console.log("x1 is greater")
        break
    case x2 > x1 && x2 > x3:
        console.log("x2 is greater")
        break
    default:
        console.log("x3 is greater")    

}















