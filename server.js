const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/./dist'));

// create a GET route
app.get('/photos', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});
  
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'))
});

const port = process.env.PORT || 8080;

// console.log that your server is up and running
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});