// Create web server
// 1. Import express
// 2. Create an instance of express
// 3. Create a route for '/comments'
// 4. Create a route for '/comments/:id'
// 5. Start the server
// 6. Test the server using Postman

// 1. Import express
const express = require('express');
const { request } = require('http');

// 2. Create an instance of express
const app = express();

// 3. Create a route for '/comments'
app.get('/comments', (request, response) => {
    response.send('GET request to /comments');
});

// 4. Create a route for '/comments/:id'
app.get('/comments/:id', (request, response) => {
    response.send(`GET request to /comments/${request.params.id}`);
});

// 5. Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// 6. Test the server using Postman
// GET http://localhost:3000/comments
// GET http://localhost:3000/comments/1