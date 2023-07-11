import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Label = styled.label`
    color: #000;
    font-size: 20px;
    width:100%;
    display: flex;
`;
export const Input = styled.input`
    color: #000;
    font-size: 20px;
    margin-top: 10px;
    width:90%;
    padding: 10px;
    display: flex;
    justify-content: center;
    border: 1px solid #000;
    border-radius: 8px;
`;
