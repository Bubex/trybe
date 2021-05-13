import React, { useEffect, useState } from 'react';
import { useHistory  } from 'react-router-dom';
import api from '../../services/api';

import { Container, Box, CurrencyBoxEdit, Row, CurrencyBox } from './style';
import logo from '../../assets/logo.png';

export default function Login() {
    const history = useHistory();

    const [error, setError] = useState('');
    const [btc, setBtc] = useState(1);
    const [currency, setCurrency] = useState({ usd: 0, brl: 0, eur: 0, cad: 0 });

    useEffect(async () => {
        try {
            const { data } = await api.get('/api/crypto/btc');

            const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.data.bpi.USD.rate_float * btc);
            const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.data.bpi.BRL.rate_float * btc);
            const eur = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(data.data.bpi.EUR.rate_float * btc);
            const cad = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(data.data.bpi.CAD.rate_float * btc);

            setCurrency({ usd, brl, eur, cad });

        } catch(e) {
            if(e.response.status === 401) {
                history.push('/login');
            }
            setError(e.response.data.message);
        }
    }, [btc]);

    function handleLogout() {
        localStorage.removeItem('TRYBE@TOKEN');
        history.push('/login');
    }

    return (
        <Container>
            <Box>
                <header>
                    <img src={logo} alt="" />
                    <button onClick={handleLogout}>Logout</button>
                </header>
                <main>
                    <CurrencyBoxEdit>
                        <h1>BTC</h1>
                        <input type="number" onChange={(e) => setBtc(e.target.value)} value={btc}/>
                    </CurrencyBoxEdit>
                    <Row>
                        <CurrencyBox>
                            <h1>USD</h1>
                            <input type="text" value={currency.usd} readOnly={true}/>
                        </CurrencyBox>
                        <CurrencyBox>
                            <h1>BRL</h1>
                            <input type="text" value={currency.brl} readOnly={true}/>
                        </CurrencyBox>
                        <CurrencyBox>
                            <h1>EUR</h1>
                            <input type="text" value={currency.eur} readOnly={true}/>
                        </CurrencyBox>
                        <CurrencyBox>
                            <h1>CAD</h1>
                            <input type="text" value={currency.cad} readOnly={true}/>
                        </CurrencyBox>
                    </Row>
                    <button onClick={() => history.push('/currencies')}>Atualizar cotações</button>
                </main>
            </Box>
        </Container>
    );
};