import { Inter } from "@next/font/google";
import Header from "@/components/header";
import * as S from "@/styles/main";
import BoxProduct from "@/components/boxProduct";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <S.MainContainer>
        <BoxProduct />
        <BoxProduct />
        <BoxProduct />
        <BoxProduct />
        <BoxProduct />
        <BoxProduct />
        <BoxProduct />
        <BoxProduct />
      </S.MainContainer>

      <footer>FOOTER</footer>
    </>
  );
}
