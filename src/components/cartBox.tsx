import * as S from "../styles/components/cartBox";
import Image from "next/image";
import Product from "../assets/product.svg";
const CartBox = () => {
  return (
    <>
      <S.PositionClose>
        <S.Close>X</S.Close>
      </S.PositionClose>

      <S.Container>
        <Image src={Product} alt="Product" width={80} height={80} />
        <S.Text> Apple Watch Series 4 GPS </S.Text>
        <S.CounterDiv>
          <S.Counter>
            <S.CounterButton>
              <S.ButtonText>-</S.ButtonText>
            </S.CounterButton>
            <S.CounterText>1</S.CounterText>
            <S.CounterButton>
              <S.ButtonText>+</S.ButtonText>
            </S.CounterButton>
          </S.Counter>
        </S.CounterDiv>
        <S.Price>R$500 </S.Price>
      </S.Container>
    </>
  );
};
export default CartBox;
