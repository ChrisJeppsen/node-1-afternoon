const express = require('express');
const getProducts = require('./getProducts')
const getProduct = require('./getProducts')


const app = express();

const port = 4000;

 
app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);


app.listen(port, () => {
    console.log(`server is listening on port: ${port}` )
})