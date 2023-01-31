import * as S from "../styles/components/cartBox";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { CartBoxProps } from "@/interfaces/interface.cardBoxProps";

const CartBox = ({ ...props }: CartBoxProps) => {
  const number = 1;
  const { cart, addProduct, removeProduct } = useContext(CartContext);
  return (
    <>
      <S.PositionClose onClick={removeProduct}>
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
            <S.CounterText> {number} </S.CounterText>
            <S.CounterButton>
              <S.ButtonText onClick={() => console.log("legal")}>
                +
              </S.ButtonText>
            </S.CounterButton>
          </S.Counter>
        </S.CounterDiv>
        <S.Price>R$ {props.price} </S.Price>
      </S.Container>
    </>
  );
};
export default CartBox;
