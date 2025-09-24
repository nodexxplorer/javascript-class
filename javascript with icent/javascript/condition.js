function gradeSystem(c) {
    if (c < 30) {
        console.log("failed 🤣🤣🤣🤣");
    }
    else if (c <= 40) {
        console.log("very bad 😢");
    }
    else if (c <= 55) {
        console.log("not bad 😐");
    }
    else if (c <= 75) {
        console.log("good 👍");
    }
    else if (c <= 85) {
        console.log("excellent 🥳");
    }
    else if (c <= 100) {
        console.log("spectacular, perfect 🍾🍾");
    }
    else {
        console.log("invalid input");
    }

    return `you entered ${c}`;
}

// const userInput = prompt("Enter your grade:30 -100");
// const schoolGrade = gradeSystem(parseInt(userInput));
// console.log(schoolGrade);