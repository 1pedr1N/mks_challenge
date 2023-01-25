import * as S from "../styles/components/header";
import Image from "next/image";
import CartIcon from "../assets/cart_icon.svg";
import { useState } from "react";
import Menu from "../components/menu";
const Header = () => {
  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active);
  };

  return (
    <>
      <S.Header>
        <S.HeaderDiv>
          <S.HeaderTitle>MKS</S.HeaderTitle>
          <S.HeaderSubTitle>Sistemas</S.HeaderSubTitle>
        </S.HeaderDiv>

        {active ? null : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <S.Cart onClick={toggleMode}>
              <Image src={CartIcon} alt="Cart Icon" width={30} height={30} />
              <S.CartText>0</S.CartText>
            </S.Cart>
          </div>
        )}
        {active ? <Menu onClick={toggleMode} /> : null}
      </S.Header>
    </>
  );
};
export default Header;
