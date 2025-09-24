let numbers = [15, 28, 73, 34, 5];



var cars = ['toyota', 'honda', 'ford', 'chevrolet', 'porsche', 'bmw', 'audi'];

// array methods

// .push() - adds an element to the end of an array
// cars.push('tesla', 'ferrari');

// numbers.push(100, 200); 

// // .shift() - removes the first element from an array
// cars.shift();
// numbers.shift();

// // .pop() - removes the last element from an array
// cars.pop();

// numbers.pop();

// console.log(cars);
// console.log(numbers);


// .unshift() - adds an element to the beginning of an array


// cars.unshift('mercedes', 'volkswagen');

// numbers.unshift(0, 1);

// console.log(cars);
// console.log(numbers);

// .splice() - adds or removes elements from an array at a specific index
// cars.splice(2, 1, 'lamborghini', 'bugatti'); //
// adds 'lamborghini' and 'bugatti' at index 2, removes 1 element
// console.log(cars);

// .includes() - checks if an array contains a specific element
// console.log(cars.includes('honda')); // true

// .indexOf() - returns the index of a specific element in an array

// console.log(cars.indexOf('ford')); // 2
// console.log(numbers.indexOf(73)); // 2

//  slice() - returns a shallow copy of a portion of an array into a new array object

// let slicedCars = cars.slice(1, 4); // returns elements from index 1 to 3

// let slicedNumbers = numbers.slice(2, 5); // returns elements from index 2 to 4

// console.log(slicedCars); // ['honda', 'ford', 'chevrolet']
// console.log(slicedNumbers); // [73, 34, 5]

// .join() - joins all elements of an array into a string
// let joinedCars = cars.join(', '); // joins elements with a comma and space
// let joinedNumbers = numbers.join(' - '); // joins elements with a hyphen and space
// console.log(joinedCars); // 'toyota, honda, ford, chevrolet, porsche, bmw, audi'
// console.log(joinedNumbers); // '15 - 28 - 73 - 34 - 5'

// .reverse() - reverses the order of elements in an array  
// let reversedCars = cars.reverse(); // reverses the order of elements in the cars array
// let reversedNumbers = numbers.reverse(); // reverses the order of elements in the numbers array
// console.log(reversedCars); // ['audi', 'bmw', 'porsche', 'chevrolet', 'ford', 'honda', 'toyota']

// console.log(reversedNumbers); // [5, 34, 73, 28, 15]

// advanced array methods
// .map() - creates a new array with the results of calling a provided function on every element in the calling array

let foods = ['pizza', 'burger', 'pasta', 'salad', 'sushi'];

// console.log(foods.map(food => food.toUpperCase())); // ['PIZZA', 'BURGER', 'PASTA', 'SALAD', 'SUSHI']

// console.log(foods)
// let foodLengths = foods.map(food => food.length); // creates a new array with the length of each food item

// console.log(foodLengths); // [5, 6, 5, 5,]

// filter() - creates a new array with all elements that pass the test implemented by the provided function

let numbersArray = [10, 25, 30, 45, 50, 60, 75];
// let evenNumbers = numbersArray.filter(num => num % 2 === 0); // filters out even numbers

// let oddNumbers = numbersArray.filter(num => num % 2 !== 0); // filters out odd numbers

// console.log(evenNumbers); // [10, 30, 50, 60]
// console.log(oddNumbers); // [25, 45, 75]

// let numbersArray = num.filter(num => num > 30); // filters out numbers greater than 30

// console.log(numbersArray); // [45, 50, 60, 75]

// .reduce() - executes a reducer function on each element of the array, resulting in a single output value

