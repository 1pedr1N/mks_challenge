import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 380px;
  height: 100px;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 17px;
  width: 15%;
  color: #2c2c2c;
  margin-left: 5px;
`;
export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  height: 20px;
  border: 1px solid #bfbfbf;
  padding: 8px;
  border-radius: 10px;
`;
export const CounterDiv = styled.div`
  display: flex;
  height: 115px;
  margin-left: 10px;

  justify-content: center;
  flex-direction: column;
`;
export const CounterText = styled.p`
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
  padding: 0 10px;
`;
export const CounterButton = styled.div`
  cursor: pointer;
`;
export const ButtonText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #000;
`;
export const Price = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
export const Close = styled.div`
  width: 25px;
  height: 25px;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;
export const PositionClose = styled.div`
  position: relative;
  top: 10px;
  left: 190px;
`;
