import * as S from "../styles/components/cartBox";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { CartBoxProps } from "@/interfaces/interface.cardBoxProps";

const CartBox = ({ ...props }: CartBoxProps) => {
  const { removeProduct, addProduct } = useContext(CartContext);

  return (
    <>
      <S.PositionClose onClick={() => removeProduct({ ...props }, true)}>
        <S.Close>X</S.Close>
      </S.PositionClose>

      <S.Container>
        <img src={props.photo} alt="Product" width={70} height={70} />
        <S.Text> {props.name} </S.Text>
        <S.CounterDiv>
          <S.Counter>
            <S.CounterButton>
              <S.ButtonText onClick={() => removeProduct({ ...props })}>
                -
              </S.ButtonText>
            </S.CounterButton>
            <S.CounterText> {props.numberProducts} </S.CounterText>
            <S.CounterButton>
              <S.ButtonText onClick={() => addProduct({ ...props })}>
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
