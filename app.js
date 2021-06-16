const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Kumar Rahul Ranjan! Welcome to Devops again Full Pipeline review test'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
