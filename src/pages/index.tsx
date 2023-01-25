import { Inter } from "@next/font/google";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <h2>MAIN CONTENT</h2>
      <footer>FOOTER</footer>
    </>
  );
}
