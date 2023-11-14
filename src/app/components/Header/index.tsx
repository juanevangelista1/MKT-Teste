"use client";
import { useState, useEffect } from "react";
import { HeaderContainer } from "./styles";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import Skeleton from "react-loading-skeleton";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

interface HeaderProps {
  onOpenCart?: (isOpen: boolean) => any;
}

export function Header({ onOpenCart }: HeaderProps) {
  const { cart, isCartOpen, openCart, closeCart } = useCart();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sumQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(sumQuantity);
    setLoading(false);
  }, [cart]);

  const handleOpenCart = () => {
    onOpenCart && onOpenCart(!isCartOpen);
    isCartOpen ? closeCart() : openCart();
  };

  return (
    <HeaderContainer>
      {loading ? (
        <Skeleton count={0} />
      ) : (
        <>
          <div className="header__title">
            <h1>MKS</h1>
            <span>Sistemas</span>
          </div>

          <div className="header__button">
            <button
              className="header__button-cart"
              id="button__open-cart"
              onClick={handleOpenCart}
            >
              <div className="header__button-cart-svg">
                <Image
                  src="/cart-header.svg"
                  width={18}
                  height={18}
                  alt="Ícone do carrinho de compras"
                />
              </div>
              <span className="header__button-cart-qtd">
                {loading ? <Skeleton width={20} /> : totalQuantity}
              </span>
            </button>
          </div>
        </>
      )}
    </HeaderContainer>
  );
}
