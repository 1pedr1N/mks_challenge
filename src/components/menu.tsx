import * as S from "../styles/components/menu";
import Image from "next/image";
import Close from "../assets/close.svg";
import CartBox from "./cartBox";
import React, { useState, useEffect } from "react";
import axios from "axios";
interface IProductProps {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  updatedAt: string;
}
const Menu = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  const [products, setProducts] = useState<IProductProps[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=DESC"
      )
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
        <S.MenuContent>
          {products.map((product, idx) => (
            <CartBox
              key={idx}
              id={product.id}
              brand={product.brand}
              description={product.description}
              name={product.name}
              img={product.photo}
              price={product.price}
            />
          ))}
        </S.MenuContent>

        <S.Value>
          <S.ValueText>Total:</S.ValueText>
          <S.ValueText>R$ 0,00</S.ValueText>
        </S.Value>
        <S.Button>
          <S.ButtonText>Finalizar compra</S.ButtonText>
        </S.Button>
      </S.Menu>
    </div>
  );
};
export default Menu;
