const express = require('express');
const app = express();
const port = 3000;

module.exports = (app) => {
    app.post('/util/text/lowercase', (req, res) => {
        const { input } = req.body;
        res.json({
            action: 'lowercase',
            input: input,
            output: input.toLowerCase()
        });
    });

    app.post('/util/text/uppercase', (req, res) => {
        const { input } = req.body;
        res.json({
            action: 'uppercase',
            input: input,
            output: input.toUpperCase()
        });
    });
};
