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
export const Header = styled.div`
background-color: #0f52ba;
  height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 40px;
  margin-left: 30px;
  width:100%;
`;
export const Content = styled.div`
    display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
`
export const ContentTitle = styled.h1`
    color: #000;
    font-size: 40px;
    width:100%;
    display: flex;
    justify-content: center;
`;

export const CenterInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `
export const Inputs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    align-items: center;
    margin-top: 20px;
    width: 80%;
    height:500px;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    color: #fff;
    font-size: 20px;
    background-color: #0f52ba;
    width: 30%;
    height: 50px;
    border-radius: 8px;
    border: none;
    margin-top: 20px;
    cursor: pointer;
    :hover {
        background-color: #0f52ba;
        transform: scale(1.1);
        transition: 0.2s;
    }
`;
export const CenterButton = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

