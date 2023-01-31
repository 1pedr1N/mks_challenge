import * as S from "../styles/components/cartBox";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { CartBoxProps } from "@/interfaces/interface.cardBoxProps";

const CartBox = ({ ...props }: CartBoxProps) => {
  const number = 1;
  const { removeProduct } = useContext(CartContext);

  return (
    <>
      <S.PositionClose onClick={props.click}>
        <S.Close>X</S.Close>
      </S.PositionClose>

      <S.Container>
        <img src={props.img} alt="Product" width={70} height={70} />
        <S.Text> {props.name} </S.Text>
        <S.CounterDiv>
          <S.Counter>
            <S.CounterButton>
              <S.ButtonText onClick={props.remove}>-</S.ButtonText>
            </S.CounterButton>
            <S.CounterText> {props.numberProducts} </S.CounterText>
            <S.CounterButton>
              <S.ButtonText onClick={props.add}>+</S.ButtonText>
            </S.CounterButton>
          </S.Counter>
        </S.CounterDiv>
        <S.Price>R$ {props.price} </S.Price>
      </S.Container>
    </>
  );
};
export default CartBox;
