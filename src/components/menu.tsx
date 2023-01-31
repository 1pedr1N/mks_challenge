import * as S from "../styles/components/menu";
import Image from "next/image";
import Close from "../assets/close.svg";
import CartBox from "./cartBox";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { IProductProps } from "@/interfaces/interface.product";
import { useContext } from "react";
import lottie from "lottie-web";
import Lottie from "react-lottie";
import { CartContext } from "@/context/cartContext";
import Animation from "../assets/animation.json";
const Menu = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  const [products, setProducts] = useState<IProductProps[]>([]);
  const { cart } = useContext(CartContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
  };
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
          {cart.map((product: IProductProps) => (
            <CartBox
              key={product.id}
              id={product.id}
              brand={product.brand}
              description={product.description}
              name={product.name}
              img={product.photo}
              price={product.price}
            />
          ))}
          {/* {products.map((product, idx) => (
            <CartBox
              key={idx}
              id={product.id}
              brand={product.brand}
              description={product.description}
              name={product.name}
              img={product.photo}
              price={product.price}
            />
          ))} */}
          {cart.length > 0 ? (
            <>
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
              {/* {cart.map((product: IProductProps) => (
              <CartBox
                key={product.id}
                id={product.id}
                brand={product.brand}
                description={product.description}
                name={product.name}
                img={product.photo}
                price={product.price}
              />
            ))} */}
              <S.MenuFooter>
                <S.Value>
                  <S.ValueText>Total:</S.ValueText>
                  <S.ValueText>R$ 0,00</S.ValueText>
                </S.Value>
                <S.Button>
                  <S.ButtonText>Finalizar compra</S.ButtonText>
                </S.Button>
              </S.MenuFooter>
            </>
          ) : (
            <>
              <S.EmptyText>Seu carrinho de compras está vazio!</S.EmptyText>
              <Lottie options={defaultOptions} height={500} width={500} />
            </>
          )}
        </S.MenuContent>
      </S.Menu>
    </div>
  );
};
export default Menu;
