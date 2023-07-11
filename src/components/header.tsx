import * as S from "../styles/components/header";
import Image from "next/image";
import CartIcon from "../assets/cart_icon.svg";
import { useState } from "react";
import Menu from "../components/menu";
import Perfil from "../assets/stick-man.png"
import Link from "next/link";
const Header = () => {
  const [active, setMode] = useState(false);
  const [logged, setLogged] = useState(true);
  const toggleMode = () => {
    setMode(!active);
  };
  return (
    <>
      <S.Header>
        <S.HeaderDiv>
          <S.HeaderTitle>Payment</S.HeaderTitle>
          <S.HeaderSubTitle>System</S.HeaderSubTitle>
        </S.HeaderDiv>
        <Link href="/profile">
          {logged === true && (
 <S.Perfil>
 <Image src={Perfil}    alt="Perfil" width={30} height={30}/>
</S.Perfil>
          )}

        </Link>

        {active ? null : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <S.Cart onClick={toggleMode}>
              <Image src={CartIcon} alt="Cart Icon" width={30} height={30} />
            </S.Cart>
          </div>
        )}
         
        {active ? <Menu onClick={toggleMode} /> : null}
        
      </S.Header>
    </>
  );
};
export default Header;
