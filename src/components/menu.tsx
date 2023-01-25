import * as S from "../styles/components/menu";
import Image from "next/image";
import Close from "../assets/close.svg";
const Menu = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: "0px",
      }}
    >
      <S.Menu>
        <S.MenuHeader>
          <S.MenuTitle>
            Carrinho <br /> de compras
          </S.MenuTitle>
          <S.MenuCloseImage onClick={onClick}>
            <Image src={Close} alt="Close Icon" width={40} height={40} />
          </S.MenuCloseImage>
        </S.MenuHeader>
        <S.MenuContent />
        <S.MenuFooter>
          <S.Value>
            <S.ValueText>Total:</S.ValueText>
            <S.ValueText>R$ 0,00</S.ValueText>
          </S.Value>
          <S.Button>
            <S.ButtonText>Finalizar compra</S.ButtonText>
          </S.Button>
        </S.MenuFooter>
      </S.Menu>
    </div>
  );
};
export default Menu;
