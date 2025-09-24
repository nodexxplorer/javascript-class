

async function getUsers() {
    try { response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error(`unable to fetch: ${response.status}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.log("message: Runtime error", error)
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const userResult = document.getElementById('userResult')
    const userButton = document.getElementById('userButton')

    userButton.addEventListener('click',async () => {
        userResult.innerHTML = 'loading...';
        
        try {
            const users = await getUsers();
            setTimeout(() => {
            const info = users.map(user => 
                `<li>
                <strong>${user.name}</strong> (${user.email})<br>
                ${user.address.street}, ${user.address.city}
                </li>`
            );
            userResult.innerHTML = `<ul>${info.join('')}</ul>`;
            }, 1000);
        } catch (error) {
            userResult.innerHTML = `Error Fetching Result: ${error.message}`;
        }
    })
})
