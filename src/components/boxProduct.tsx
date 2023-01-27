import * as S from "../styles/components/boxProduct";
import Image from "next/image";
import Product from "../assets/product.svg";
import Bag from "../assets/bag.svg";

interface BoxProductProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  img: string;
}

const BoxProduct = ({ ...props }: BoxProductProps) => {
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

      <S.Button>
        <Image src={Bag} alt="Bag" width={20} height={20} />
        <S.ButtonText>COMPRAR</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default BoxProduct;
