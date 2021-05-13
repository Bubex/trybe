import React, { useEffect, useState } from 'react';
import { useHistory  } from 'react-router-dom';
import api from '../../services/api';

import { Container, Box, Error } from './style';
import logo from '../../assets/logo.png';

export default function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
    }, [email, password]);

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const { data } = await api.post('/api/login', {
                email, password
            });

            localStorage.setItem('TRYBE@TOKEN', data.token);
            api.defaults.headers.common['authorization'] = data.token;
            history.push('/');
        } catch(e) {
            setError(e.response.data.message);
        }
    }

    return (
        <Container>
            <Box onSubmit={handleLogin}>
                <img src={logo} alt="" />
                <span>+<br/>Marlon Ferreira<br/>Bora dar esse match?</span>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="E-mail" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Senha" />
                {error && <Error>{error}</Error>}
                <button type="submit">ENTRAR</button>
            </Box>
        </Container>
    );
};