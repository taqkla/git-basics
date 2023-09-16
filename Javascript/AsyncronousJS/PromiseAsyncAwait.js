async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}

// Call the fetchData function and handle the promise it returns
fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error.message);
    });