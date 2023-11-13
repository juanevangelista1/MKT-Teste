import { Header } from "@/app/components/Header";
import { GlobalStyles } from "@/styles/Global";
import { Footer } from "@/app/components/Footer";
import { ProductList } from "@/app/components/Products";
import { MiniCart } from "./components/MiniCart";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ProductList />
      <MiniCart />
      <Footer />
    </>
  );
}
