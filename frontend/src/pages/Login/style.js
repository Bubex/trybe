import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: #242424;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.form`
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 240px;
        cursor: help;

        :hover ~ span {
            display: block;
            transition: all 0.2s;
        }
    }

    img ~ span {
        color: white;
        text-align: center;
        font-size: 18px;
        display: none;
        transition: all 0.2s;
    }

    input:first-of-type {
        margin-top: 40px;
    }

    input {
        background: #ffffff;
        border-radius: 5px;
        margin: 5px 0;
        height: 35px;
        width: 100%;
        padding: 10px;
        box-shadow: 2px 2px 1px #a4e2cc;
        font-size: 16px;
    }

    button {
        margin-top: 10px;
        width: 100%;
        height: 35px;
        background: #2fc18c;
        color: white;
        font-weight: 700;
        letter-spacing: 2px;
        font-size: 17px;
        border-radius: 5px;
        box-shadow: 2px 2px 1px #a4e2cc;
        transition: all 0.1s;

        :hover {
            box-shadow: none;
            transform: translate(2px, 2px);
            transition: all 0.1s;
        }
    }
`;

export const Error = styled.div`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    border: 1px solid transparent;
    border-radius: .25rem;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
`;