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
        width: 100%;
        max-width: 300px;

        > button {
            background: #939698;
            padding: 10px 15px;
            color: white;
            margin: 20px 0;
            transition: all 0.2s;
            
            :hover {
                background: #b9b9b9;
                transition: all 0.2s;
            }
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    margin-top: 40px;
    text-align: left;

    label, input, select {
        width: 100%;
        font-size: 20px;
    }

    input, select {
        margin: 5px 0;
        height: 30px;
    }

    input {
        padding: 10px;
    }

    h3 {
        margin: 20px 0;
    }

    button {
        margin-top: 20px;
        width: 100%;
        height: 35px;
        background: #2fc18c;
        color: white;
        font-weight: 700;
        letter-spacing: 2px;
        font-size: 17px;
        border-radius: 5px;
        transition: all 0.1s;

        :hover {
            background: #4dd2a2;
            transition: all 0.1s;
        }
    }
`;

export const Message = styled.div`
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    border: 1px solid transparent;
    border-radius: .25rem;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
`;