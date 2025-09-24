var fives = 500
var five = 500
if (fives >= five) {
    console.log("There are equal");
}
else {
    console.log("less than");
}





Here's a JavaScript file that meets the requirements:
// Section 1: Variable Declaration and Data Types

// Your Full Name
let fullName = "Your Name"; 
console.log("Full Name: ", fullName);

// Your Current Age
let currentAge = 25; 
console.log("Current Age: ", currentAge);

// Is Currently Enrolled
let isCurrentlyEnrolled = true; 
console.log("Currently Enrolled: ", isCurrentlyEnrolled);

// Lucky Number
let luckyNumber = 7; 
console.log("Lucky Number: ", luckyNumber);

// Product Price
let productPrice = 19.99; 
console.log("Product Price: $", productPrice);

// City Name
let cityName = "New York"; 
console.log("City Name: ", cityName);

// Has Discount
let hasDiscount = false; 
console.log("Has Discount: ", hasDiscount);

// Quantity in Stock
let quantityInStock = 50; 
console.log("Quantity in Stock: ", quantityInStock);

// Section 2: Arithmetic Operators

// Future Age
let futureAge = currentAge + 5; 
console.log("Age in 5 years: ", futureAge);

// Daily Earnings
let dailyEarnings = productPrice * 15; 
console.log("Daily Earnings: $", dailyEarnings);

// Splitting a Bill
let billAmount = 120.75; 
let numberOfPeople = 4; 
let amountPerPerson = billAmount / numberOfPeople; 
console.log("Amount per person: $", amountPerPerson);

// Remaining Items
let totalCandies = 50; 
let numberOfFriends = 7; 
let candiesPerFriend = Math.floor(totalCandies / numberOfFriends); 
let candiesLeftOver = totalCandies % numberOfFriends; 
console.log("Candies per friend: ", candiesPerFriend);
console.log("Candies left over: ", candiesLeftOver);

// Area of a Rectangle
let length = 12.5; 
let width = 8; 
let area = length * width; 
console.log("Area of the rectangle: ", area);

// Total Cost with Shipping
let itemCost = 75.00; 
let shippingCost = 5.99; 
let totalCost = itemCost + shippingCost; 
console.log("Total cost with shipping: $", totalCost);

// Section 3: Comparison Operators

// Is your current age less than 30?
let isLessThan30 = currentAge < 30; 
console.log("Is current age less than 30? ", isLessThan30);

// Is your lucky number exactly equal to 7?
let isLuckyNumber7 = luckyNumber === 7; 
console.log("Is lucky number 7? ", isLuckyNumber7);

// Is the product price greater than or equal to $25.00?
let isPriceGreaterOrEqual = productPrice >= 25.00; 
console.log("Is product price greater than or equal to $25.00? ", isPriceGreaterOrEqual);

// Are you currently enrolled AND does the product have a discount?
let isEnrolledAndDiscount = isCurrentlyEnrolled && hasDiscount; 
console.log("Currently enrolled and product has discount? ", isEnrolledAndDiscount);

// Is your current age NOT equal to the number 25?
let isNotEqualTo25 = currentAge !== 25; 
console.log("Is current age not equal to 25? ", isNotEqualTo25);

// Is the quantity in stock less than 10 OR greater than 100?
let isQuantityOutOfRange = quantityInStock < 10 || quantityInStock > 100; 
console.log("Is quantity in stock out of range (less than 10 or greater than 100)? ", isQuantityOutOfRange);

// Is the string "JavaScript" the same as "javascript"?
let isJavaScriptSame = "JavaScript" === "javascript"; 
console.log("Is 'JavaScript' the same as 'javascript'? ", isJavaScriptSame);

// Is the number 5 strictly equal to the string "5"?
let is5EqualToString5 = 5 === "5"; 
console.log("Is 5 strictly equal to '5'? ", is5EqualToString5);

// Is your lucky number strictly NOT equal to the string representation of your lucky number?
let isLuckyNumberNotEqualToString = luckyNumber !== luckyNumber.toString(); 
console.log("Is lucky number strictly not equal to its string representation? ", isLuckyNumberNotEqualToString);

// Is the city name "Paris" OR "London"?
let isCityParisOrLondon = cityName === "Paris" || cityName === "London"; 
console.log("Is city name 'Paris' or 'London'? ", isCityParisOrLondon);
