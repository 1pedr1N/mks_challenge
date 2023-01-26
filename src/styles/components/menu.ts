import styled from "styled-components";
export const Menu = styled.div`
  width: 500px;
  height: 100%;
  background-color: #0f52ba;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
`;
export const MenuTitle = styled.h1`
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  margin: 30px 50px;
`;
export const MenuHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const MenuCloseImage = styled.div`
  margin: 30px 50px;
  cursor: pointer;
`;
export const MenuContent = styled.div``;
export const MenuFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  flex-direction: column;
`;
export const Value = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 42px 50px 10px 42px;
`;
export const ValueText = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
`;
export const Button = styled.button`
  background-color: #000;
  color: #fff;
  height: 100px;
  cursor: pointer;
  width: 100%;
  border: none;
  :hover {
    background-color: #fff;
    transition: 0.5s ease-in-out;
    color: #000;
  }
`;
export const ButtonText = styled.p`
  font-size: 28px;
  font-weight: 700;
`;
