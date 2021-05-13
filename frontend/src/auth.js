import api from './services/api';

export const isAuthenticated = () => {
    const token = localStorage.getItem('TRYBE@TOKEN');
    if(token) {
        api.defaults.headers.common['authorization'] = token;
        return true;
    }
    return false;
};

