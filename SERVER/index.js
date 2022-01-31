
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});