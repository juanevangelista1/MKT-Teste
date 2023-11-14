"use client";
import Image from "next/image";
import { Product } from "@/app/context/CartContext";
import { Item } from "./styles";

interface ProductItemProps {
  product: Product;
  addToCart: (product: Product) => any;
}

export const ProductItem = ({ product, addToCart }: ProductItemProps) => (
  <Item>
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
          <button className="button__buy" onClick={() => addToCart(product)}>
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
  </Item>
);
