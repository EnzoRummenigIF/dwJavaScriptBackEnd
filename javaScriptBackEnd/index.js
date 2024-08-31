const express = require('express');
const utiltext = require('./util/utiltext/ut');
const utilnum = require('./util/utilnum/un');

const app = express();
const port = 3000;

app.use(express.json());

utiltext(app);
utilnum(app);

app.listen(port, () => {
    console.log(`ouvindo http://localhost:${port}`);
});
