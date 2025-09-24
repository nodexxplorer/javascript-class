// conditonal statement
// if statement
// switch statement

// simple if statement

let num = 2

if  (num  >= 18 ) {
    console.log("You are an adult.");

}
else {
    console.log("You are a minor.");
}

// else if statement
// to use this statement, we need to have multiple conditions, with if at the begining and else at the end

let devIndex = 78   

if (devIndex >= 7) {
    console.log("This is a first world country.")
}
else if (devIndex >= 5) {
    console.log("This is a developing country.")
}
else if (devIndex >= 3) {
    console.log("This is a third world country.")
}
else {
    console.log("This is a war zone.")
}


// switch statement

switch ("tuesday") {
    case "monday":
        console.log("sit at home.");
        break;
    case "tuesday":
        console.log("go and waste your time at work.");
        break;
    case "wednesday":
        console.log("midweek for chillin.");
        break;
    case "thursday":
        console.log("Today is for madness.");
        break;
    case "friday":
        console.log("prepare for weekend.");
        break;
    case "saturday":
        console.log("Go and wash your dirty cloth(e dey disturb your neighbor nose oo).");
        break;
    case "sunday":
        console.log("Go church and prepare for night party.");
        break;
    default:
        console.log("whats poppin.");
}

// let day = "friday";
// `` backtick 

// console.log(`Today is ${day}.`);

switch ('red') {
    case 'red':
        console.log("This is red car.");
        break;
    case 'blue':
        console.log("This is blue car.");   
        break;
    default:
        console.log("that girl no go follow you, you no make am .");    
}