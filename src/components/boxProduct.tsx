import * as S from "../styles/components/boxProduct";
import Image from "next/image";
import Bag from "../assets/bag.svg";
import { BoxProductProps } from "@/interfaces/interface.BoxProducts";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
const BoxProduct = ({ ...props }: BoxProductProps) => {
  const { cart, addProduct } = useContext(CartContext);
  return (
    <S.Container>
      <img
        src={props.img}
        alt="Product"
        width={160}
        height={160}
        style={{ marginTop: 10 }}
      />

      <S.TextContainer>
        <S.ProductTitle>{props.name} </S.ProductTitle>
        <S.PriceBox>R${props.price} </S.PriceBox>
      </S.TextContainer>

      <S.description>{props.description} </S.description>

      <S.Button onClick={addProduct}>
        <Image src={Bag} alt="Bag" width={20} height={20} />
        <S.ButtonText>COMPRAR</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default BoxProduct;
