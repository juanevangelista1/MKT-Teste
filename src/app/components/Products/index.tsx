"use client";
import { useEffect, useState } from "react";
import { ProductGrid, ProductGridContainer } from "./styles";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

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

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <ProductGrid>
      <ProductGridContainer>
        {products.map((product) => (
          <section key={product.id} className="product__content">
            <div className="product__content-image">
              <Image
                src={product.photo}
                width={138}
                height={138}
                alt={product.name}
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
    </ProductGrid>
  );
}
