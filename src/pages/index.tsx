import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>HEADER</h1>
      <h2>MAIN CONTENT</h2>
      <footer>FOOTER</footer>
    </>
  );
}
