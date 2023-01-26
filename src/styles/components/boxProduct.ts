import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 295px;

  background-color: #ffff;
  border-radius: 12px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  :hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;
export const Button = styled.div`
  width: 100%;

  background-color: #0f52ba;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
`;
export const ButtonText = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin-left: 10px;
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;
export const ProductTitle = styled.p`
  width: 50%;
  font-size: 16px;
  font-weight: 500;
`;
export const PriceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #373737;
  width: 64px;
  height: 30px;
  border-radius: 7px;
  font-weight: 700;
  color: #fff;
`;
export const description = styled.p`
  font-size: 12px;
  font-weight: 300;
`;
