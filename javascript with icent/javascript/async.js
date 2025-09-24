// async function getUsers() {

// try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let users = await response.json();
//     console.log(users );

// } catch (error) {
//     console.log("message: Runtime error", error);
// }

// }
// getUsers();

// step by step


async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();
        let address = users.map(item => item.address.street);
        console.log(address)
    } catch (error) {
        console.log("message: Runtime error", error);
    }
    
}

getUsers();