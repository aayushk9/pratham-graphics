const express = require('express');
const path = require('path')
const app = express();

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../client/pages/home.html'); 
    res.sendFile(filePath);   
})        

app.get('/designing', (req, res) => {  

});

app.get('/printing', (req, res) => {

});

app.listen(3000, (req, res) => {
    console.log('Server is listening on port 3000');
})  