import { AppProps } from "next/app";
import { CartProvider } from "@/app/context/CartContext";
import { GlobalStyles } from "@/styles/Global";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ProductList } from "@/app/components/Products";
import { MiniCart } from "@/app/components/MiniCart";

export default function Home(props: AppProps) {
  return (
    <CartProvider>
      <GlobalStyles />
      <Header />
      <ProductList />
      <MiniCart />
      <Footer />
    </CartProvider>
  );
}
