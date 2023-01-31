import * as S from "../styles/components/cartBox";
import Image from "next/image";
import Product from "../assets/product.svg";
interface CartBoxProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  img: string;
}
const CartBox = ({ ...props }: CartBoxProps) => {
  return (
    <>
      <S.PositionClose>
        <S.Close>X</S.Close>
      </S.PositionClose>

      <S.Container>
        <img src={props.img} alt="Product" width={70} height={70} />
        <S.Text> {props.name} </S.Text>
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
        <S.Price>R$ {props.price} </S.Price>
      </S.Container>
    </>
  );
};
export default CartBox;
