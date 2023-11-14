"use client";
import { GlobalStyles } from "@/styles/Global";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ProductList } from "@/app/components/Products";
import { MiniCart } from "@/app/components/MiniCart";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <ProductList />
        <MiniCart />
        <Footer />
      </CartProvider>
    </QueryClientProvider>
  );
}
