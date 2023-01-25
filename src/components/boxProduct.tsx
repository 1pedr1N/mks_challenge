import * as S from "../styles/components/boxProduct";
import Image from "next/image";
import Product from "../assets/product.svg";
import Bag from "../assets/bag.svg";

interface BoxProductProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

const BoxProduct = () => {
  return (
    <S.Container>
      <Image
        src={Product}
        alt="Product"
        width={160}
        height={160}
        style={{ marginTop: 10 }}
      />

      <S.TextContainer>
        <S.ProductTitle>Apple Watch Series 4 GPS</S.ProductTitle>
        <S.PriceBox>R$100 </S.PriceBox>
      </S.TextContainer>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          width: "100%",
          marginLeft: 23,
        }}
      >
        <S.description>Descrição Produto </S.description>
      </div>
      <S.Button>
        <Image src={Bag} alt="Bag" width={20} height={20} />
        <S.ButtonText>COMPRAR</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default BoxProduct;
