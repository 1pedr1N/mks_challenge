import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;

  background-color: #0f52ba;
  height: 100px;
  justify-content: space-between;
  .menu .menuOpen {
    width: 200px;
    height: 100vh;
    background-color: red;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    position: fixed;
  }
`;
export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 40px;
`;
export const HeaderSubTitle = styled.div`
  color: #fff;
  font-size: 20px;
  display: flex;
  margin-left: 5px;
  font-weight: 300;
`;
export const HeaderDiv = styled.div`
  display: flex;
  margin-left: 65px;
  flex-direction: row;
  align-items: baseline;
`;
export const Cart = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-right: 90px;
  width: 90px;
  height: 50px;
  border-radius: 10px;
  :hover {
    background-color: #fffafa;
    transform: scale(1.1);
    transition: 0.2s;
  }
`;
export const CartText = styled.p`
  color: #000;
  margin-left: 4px;
  font-size: 20px;
  font-weight: 700;
`;
