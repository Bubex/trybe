import { Request, Response } from 'express';
import fs from 'fs';
import axios from 'axios';

export default {
    async index(req: Request, res: Response) {

        try {
            let { data } = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');

            const rawCurrencies = fs.readFileSync('./src/currencies.json');
            const currencies = JSON.parse(rawCurrencies.toString());
        
            data.bpi.BRL = {
                code: "BRL",
                rate: (data.bpi.USD.rate_float * currencies["BRL"]).toFixed(4),
                rate_float: parseFloat((data.bpi.USD.rate_float * currencies["BRL"]).toFixed(4)),
                description: "Brazilian Real"
            };
        
            data.bpi.EUR = {
                code: "EUR",
                rate: (data.bpi.USD.rate_float * currencies["EUR"]).toFixed(4),
                rate_float: parseFloat((data.bpi.USD.rate_float * currencies["EUR"]).toFixed(4)),
                description: "Euro"
            };
        
            data.bpi.CAD = {
                code: "CAD",
                rate: (data.bpi.USD.rate_float * currencies["CAD"]).toFixed(4),
                rate_float: parseFloat((data.bpi.USD.rate_float * currencies["CAD"]).toFixed(4)),
                description: "Canadian Dollar"
            };

            return res.json({ data });
        } catch(e) {
            return res.json({ message: e.response.message });
        }
    },

    async update(req: Request, res: Response) {
        const { currency, value } = req.body;

        const allowCurrencies = ["BRL", "EUR", "CAD"];

        if(!allowCurrencies.includes(currency)) {
            return res.status(400).json({ message: "Moeda inválida" });
        }

        if(value <= 0) {
            return res.status(400).json({ message: "Valor inválido" });
        }

        const rawCurrencies = fs.readFileSync('./src/currencies.json');
        let currencies = JSON.parse(rawCurrencies.toString());

        currencies[currency] = parseFloat(value).toFixed(3);

        fs.writeFileSync('./src/currencies.json', JSON.stringify(currencies));

        return res.json({ "message": "Valor alterado com sucesso!" });
    }
};