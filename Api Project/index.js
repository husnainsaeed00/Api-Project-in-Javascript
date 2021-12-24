fetch('https://reqres.in/api/users', {
    method:'Post',
    headers: {
        'content-Type': 'application/json'
    },
    body:JSON.stringify({
        name: 'user 1'
    })
}).then(res =>{
    return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('error'))