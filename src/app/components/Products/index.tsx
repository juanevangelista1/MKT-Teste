"use client";
import { useQuery } from "react-query";
import { useCart, Product } from "@/app/context/CartContext";
import { ProductGrid, ProductGridContainer, SkeletonGrid } from "./styles";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductItem } from "../ProductItem";
import { ProductSkeleton } from "../ProductSkeleton";
import { fetchProducts } from "@/app/api/fetchProducts";

export function ProductList() {
  const { data: products, isLoading } = useQuery("products", fetchProducts);
  const { updateCart, cart } = useCart();

  const addToCart = (product: Product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      updateCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      updateCart(updatedCart);
    }
  };

  return (
    <ProductGrid>
      {isLoading ? (
        <SkeletonGrid>
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </SkeletonGrid>
      ) : (
        <ProductGridContainer>
          {products.map((product: Product) => (
            <ProductItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </ProductGridContainer>
      )}
    </ProductGrid>
  );
}
