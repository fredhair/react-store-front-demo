const fs = require('fs');
const path = require('path');

const productsRAW = fs.readFileSync(path.resolve(__dirname, 'products.json'));

module.exports = JSON.parse(productsRAW);
