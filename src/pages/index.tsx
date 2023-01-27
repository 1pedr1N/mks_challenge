import { Inter } from "@next/font/google";
import Header from "@/components/header";
import * as S from "@/styles/main";
import Footer from "@/components/footer";
import BoxProduct from "@/components/boxProduct";
import React, { useState, useEffect } from "react";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });
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

export default function Home() {
  const [products, setProducts] = useState<IProductProps[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=DESC"
      )
      .then((response) => {
        setProducts(response.data);
        console.log(Array(response.data));
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
          {Array.from(products).map((product, idx) => (
            <S.MainContainer>
              <BoxProduct
                img={product.photo}
                key={product.id}
                id={product.id}
                name={product.name}
                brand={product.brand}
                description={product.description}
                price={product.price}
              />
            </S.MainContainer>
          ))}
        </S.MainContainer>
      </S.AlignCenter>

      <S.FooterPosition>
        <Footer />
      </S.FooterPosition>
    </>
  );
}
