require('dotenv').config(); 
const express = require('express');   
const path = require('path');
const app = express();     
const config = require('./config');


app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../client/pages/home.html');
  const htmlContent = getHtmlContent(filePath, config.apiKey);
  res.send(htmlContent);   
})        

app.get('/design', (req, res) => {  
  const filePath = path.join(__dirname, '../client/pages/design.html');  
  res.sendFile(filePath);
});

app.get('/printing', (req, res) => {
  const filePath = path.join(__dirname, '../client/pages/printing.html');
  res.sendFile(filePath);  
});

function getHtmlContent(filePath, apiKey) {
  const fs = require('fs');
  let htmlContent = fs.readFileSync(filePath, 'utf-8');
  htmlContent = htmlContent.replace('${process.env.GOOGLE_MAPS_API_KEY}', apiKey);
  return htmlContent;
}

app.listen(3000, (req, res) => {   
    console.log('Server is listening on port 3000');
});