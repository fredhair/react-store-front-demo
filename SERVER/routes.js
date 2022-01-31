const products = require('./products');
const router = require('express').Router();

router.get('/products', (req, res) => {
    //Send all if no query specified
    // if(!res.query?.query)
    return res.json(products);

    //Houston we have a query..
    //etc
});

// Would cache this kinda stuff in prod
router.get('/categories', (req, res) => {
    //Get all unique categories
    let categories = [];

    products.forEach(el => categories.includes(el.category) ? null : categories.push(el.category));

    return res.json(categories);
});

router.post('/checkout', (req, res) => {
    //Send okay, could take the cart in the body and send back a confirmation
    //but seems a little pointless just resending back the same info.
    return res.status(200);
});

module.exports = router;