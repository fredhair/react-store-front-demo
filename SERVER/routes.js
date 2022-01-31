const products = require('./products');
const router = require('express').Router();

router.get('/products', (req, res) => {
    //Send all if no query specified
    // if(!res.query?.query)
    return res.json(products);

    //Houston we have a query..
    //etc
});

router.post('/checkout', (req, res) => {
    //Send okay, could take the cart in the body and send back a confirmation
    //but seems a little pointless just resending back the same info.
    return res.status(200);
});

module.exports = router;