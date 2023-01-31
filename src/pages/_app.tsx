import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/globalStyles";
import { CartProvider } from "../context/cartContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CartProvider>
  );
}
