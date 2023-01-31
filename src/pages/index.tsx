import { Inter } from "@next/font/google";
import Header from "@/components/header";
import * as S from "@/styles/main";
import Footer from "@/components/footer";
import BoxProduct from "@/components/boxProduct";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IProductProps } from "@/interfaces/interface.product";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
    <>
      <Header />
      <S.AlignCenter>
        <S.MainContainer>
          {products.map((product, idx) => (
            <BoxProduct
              key={idx}
              id={product.id}
              brand={product.brand}
              description={product.description}
              name={product.name}
              img={product.photo}
              price={product.price}
            />
          ))}
        </S.MainContainer>
      </S.AlignCenter>
      <S.FooterPosition>
        <Footer />
      </S.FooterPosition>
    </>
  );
}
