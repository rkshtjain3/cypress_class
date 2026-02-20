exports.api1={
        method: 'POST',
        url: '/login_with_form', // baseUrl is prepend to URL
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
            username: 'jane.lane',
            password: 'password123',
        },
        headers: {
            'authorization': 'bearer token123'
        }
    }