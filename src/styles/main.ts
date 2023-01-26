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

  margin-top: 115px;
`;
export const FooterPosition = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`;
