import React, { useEffect, useState } from 'react';
import { useHistory  } from 'react-router-dom';
import api from '../../services/api';

import { Container, Box, Form, Message } from './style';
import logo from '../../assets/logo.png';

export default function Login() {
    const history = useHistory();

    const [message, setMessage] = useState('');
    const [currencies, setCurrencies] = useState(null);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [oldValue, setOldValue] = useState('');
    const [newValue, setNewValue] = useState('');

    useEffect(async () => {
        try {
            const { data } = await api.get('/api/crypto/btc');
            setCurrencies(data.data.bpi);
            setSelectedCurrency('BRL');
        } catch(e) {
            if(e.response.status === 401) {
                history.push('/login');
            }
            setMessage(e.response.data.message);
        }
    }, []);

    useEffect(() => {
        setMessage('');
    }, [selectedCurrency, newValue])

    useEffect(() => {
        if(!currencies) {
            return;
        }

        const calcOldValue = currencies[selectedCurrency].rate_float / currencies.USD.rate_float;
        updateOldValue(parseFloat(calcOldValue).toFixed(2));
    }, [selectedCurrency]);

    function handleLogout() {
        localStorage.removeItem('TRYBE@TOKEN');
        history.push('/login');
    }

    function updateOldValue(value) {
        let formatted;

        if(selectedCurrency === "BRL") {
            formatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        } else if(selectedCurrency === "EUR") {
            formatted = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
        } else if(selectedCurrency === "CAD") {
            formatted = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(value);
        }

        setOldValue(formatted);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/api/crypto/btc', {
                currency: selectedCurrency,
                value: newValue
            });
            setMessage(response.data.message);
            const { data } = await api.get('/api/crypto/btc');
            setCurrencies(data.data.bpi);
            updateOldValue(parseFloat(newValue).toFixed(2));
        } catch(e) {
            if(e.response.status === 401) {
                history.push('/login');
            }
            setMessage(e.response.data.message);
        }
    }

    return (
        <Container>
            <Box>
                <header>
                    <img src={logo} alt="" />
                    <button onClick={handleLogout}>Logout</button>
                </header>
                <main>
                    <button onClick={() => history.push('/')}>Voltar</button>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="currency">Moeda</label>
                        <select id="currency" onChange={(e) => setSelectedCurrency(e.target.value)} value={selectedCurrency}>
                            <option value="BRL">BRL</option>
                            <option value="EUR">EUR</option>
                            <option value="CAD">CAD</option>
                        </select>
                        <h3>Valor atual: <span>{oldValue}</span></h3>
                        <label htmlFor="newValue">Novo valor</label>
                        <input id="newValue" type="number" step="0.01" min="0.01" onChange={(e) => setNewValue(e.target.value)} value={newValue} />
                        {message && <Message>{message}</Message>}
                        <button type="submit">ATUALIZAR</button>
                    </Form>
                </main>
            </Box>
        </Container>
    );
};