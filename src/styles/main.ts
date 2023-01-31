import styled from "styled-components";
export const AlignCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 50px;
  width: 70%;
  place-items: center;
  height: 100%;
  margin: 115px 0px;
`;
export const FooterPosition = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`;
