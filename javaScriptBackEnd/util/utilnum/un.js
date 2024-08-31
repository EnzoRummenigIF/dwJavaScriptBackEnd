const express = require('express');
const app = express();
const port = 3000;

module.exports = (app) => {
    app.get('/util/number/minimum', (req, res) => {
        const input = req.query.input;
        const numeros = input.split(',').map(Number);
        res.json({
            action: 'minimum',
            input: input,
            output: Math.min(...numeros)
        });
    });

    app.get('/util/number/maximum', (req, res) => {
        const input = req.query.input;
        const numeros = input.split(',').map(Number);
        res.json({
            action: 'maximum',
            input: input,
            output: Math.max(...numeros)
        });
    });
};
