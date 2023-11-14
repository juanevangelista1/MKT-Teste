"use client";

import { useCart, Product } from "@/app/context/CartContext";
import { fetchProducts } from "@/app/api/index";
import { ProductGrid, ProductGridContainer, SkeletonGrid } from "./styles";
import { useEffect, useState, memo } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import axios from "axios";

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { updateCart, cart } = useCart();

  const addToCart = (product: Product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity =
        updatedCart[existingItemIndex].quantity + 1;
      updateCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      updateCart(updatedCart);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products",
          {
            params: {
              page: 1,
              rows: 10,
              sortBy: "id",
              orderBy: "ASC",
            },
          }
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductGrid>
      {loading ? (
        <SkeletonGrid>
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index}>
              <Skeleton width={200} height={200} />
              <Skeleton width={200} height={18} style={{ marginTop: "5px" }} />
              <Skeleton width={120} height={20} style={{ marginTop: "5px" }} />
            </div>
          ))}
        </SkeletonGrid>
      ) : (
        <ProductGridContainer>
          {products.map((product) => (
            <section key={product.id} className="product__content">
              <div className="product__content-image">
                <Image
                  src={product.photo}
                  width={138}
                  height={138}
                  alt={product.name}
                  loading="lazy"
                />
              </div>
              <section className="product__content-infos">
                <div className="product__content-infos-title">
                  {product.name}
                  <div className="product__content-infos-price">
                    <span>{`R$ ${Number(product.price).toLocaleString("pt-BR", {
                      maximumFractionDigits: 0,
                    })}`}</span>
                  </div>
                </div>
                <div className="product__content-infos-description">
                  <p>{product.description}</p>
                </div>
                <div className="product__content-infos-button">
                  <button
                    className="button__buy"
                    onClick={() => addToCart(product)}
                  >
                    <Image
                      src="/shopping-bag-svg.svg"
                      width={15}
                      height={15}
                      alt="Ícone de bolsa"
                    />
                    <p>COMPRAR</p>
                  </button>
                </div>
              </section>
            </section>
          ))}
        </ProductGridContainer>
      )}
    </ProductGrid>
  );
}
