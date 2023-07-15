import * as S from "../styles/components/menu";
import Image from "next/image";
import Close from "../assets/close.svg";
import CartBox from "./cartBox";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IProductProps } from "@/interfaces/interface.product";
import { useContext } from "react";
import { user } from "@/service/user";
import Lottie from "react-lottie";
import { CartContext } from "@/context/cartContext";
import Animation from "../assets/animation.json";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
const Menu = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  const [products, setProducts] = useState<IProductProps[]>([]);

  const { cart, totalPrice } = useContext(CartContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
  };
  // const handleClickPayPal = () => {
  //   const res = user.payment()
  //   console.log(res)
   
      
  // }
  // const createOrder = (data:any, actions:any) => {
  //   return actions.order.create({
  //     purchase_units: [
  //       {
  //         amount: {
  //           value: totalPrice,
  //           currency_code: "USD",
  //         },
  //       },
  //     ],
  //   });
  // };
  // const onApprove = (data:any, actions:any) => {
  //   return actions.order.capture().then(function (details:any) {
  //     alert("Transaction completed by " + details.payer.name.given_name);
  //   });
  // };

  // const onError = (err:any) => {
  //   console.log(err);
  // };
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
            Your Cart
          </S.MenuTitle>
          <S.MenuCloseImage onClick={onClick}>
            <Image src={Close} alt="Close Icon" width={40} height={40} />
          </S.MenuCloseImage>
        </S.MenuHeader>
        <S.MenuContent>
          {!cart.length && (
            <>
              <S.EmptyText>Your Cart its empty!</S.EmptyText>
              <Lottie options={defaultOptions} height={500} width={500} />
            </>
          )}

          {!!cart.length && (
            <>
              {cart.map(({ product, amount }) => (
                <CartBox
                  {...product}
                  key={product.id}
                  id={product.id}
                  numberProducts={amount}
                />
              ))}
           
              <S.MenuFooter>
                <S.Value>
                  <S.ValueText>Total:</S.ValueText>
                  <S.ValueText>R$ {totalPrice} </S.ValueText>
                </S.Value>
    <PayPalScriptProvider options={{ clientId: 'AQr5Q2N_DlhfJGDh3HZ4nhFVGg-RM4ssxMDjyM4wcxj3mmU0bV_rp_ZbTKaDyfOlzo56sVXIZfi3J4yJ' }} >
      <PayPalButtons style={{ layout: 'horizontal' }} />
    </PayPalScriptProvider>
                <S.Button>
                  <S.ButtonText>Buy Now</S.ButtonText>
                </S.Button>
              </S.MenuFooter>
            </>
          )}
        </S.MenuContent>
      </S.Menu>
    </div>
  );
};
export default Menu;
