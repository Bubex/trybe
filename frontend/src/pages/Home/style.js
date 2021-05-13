import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: #242424;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            width: 140px;
        }

        button {
            color: white;
            background: #5a5858;
            padding: 5px 10px;
            font-size: 14px;
            border-radius: 5px;
            transition: all 0.2s;

            :hover {
                background: #827e7e;
                transition: all 0.2s;
            }
        }
    }

    main {
        margin: 40px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > button {
            background: #19805a;
            padding: 10px 15px;
            color: white;
            margin: 20px 0;
            transition: all 0.2s;
            
            :hover {
                background: #1ca271;
                transition: all 0.2s;
            }
        }
    }
`;

export const CurrencyBoxEdit = styled.div`
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
    border: 1px solid transparent;
    border-radius: .25rem;
    width: 100%;
    max-width: 150px;
    margin: 10px 0;
    padding: 10px;
    text-align: center;

    h1 {
        margin: 10px 0;
    }

    input {
        font-size: 26px;
        padding: 10px;
        width: 100%;
        text-align: center;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CurrencyBox = styled.div`
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
    border: 1px solid transparent;
    border-radius: .25rem;
    width: 100%;
    max-width: 300px;
    margin: 10px 10px;
    padding: 10px;
    text-align: center;

    h1 {
        margin: 10px 0;
    }

    input {
        font-size: 26px;
        padding: 10px;
        width: 100%;
        text-align: center;
    }
`;