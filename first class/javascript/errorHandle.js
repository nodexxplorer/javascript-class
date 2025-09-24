// Error handling in JavaScript is crucial for debugging and maintaining code quality. it involving managing and responsing to runtime error that occurs during code excution.
//  Here are some common practices: 
// 1. **Try-Catch Blocks**: Use `try` to wrap code that may throw an error, and `catch` to handle the error gracefully.
// 2. **Throwing Errors**: Use `throw` to create custom error messages when certain conditions are not met.
// 3. **Error Objects**: Use built-in `Error` objects to provide more context about the error, such as `new Error("Custom error message")`.
// 4. **Finally Block**: Use `finally` to execute code that should run regardless of whether an error occurred or not.
// 5. **Logging Errors**: Use `console.error()` to log errors to the console for debugging purposes.

// try {
//     // Code that may throw an error
//     let result = y/2;
//     console.log(result);
// } catch (error) {
//     // Handle the error
//     console.error("An error occurred:");
// }

try {
    var boom = 5 * y;
    console.log(boom);
}catch (error) {
    console.error("what is cashout?");
}