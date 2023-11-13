"use client";
import { useMemo, useState } from "react";
import { HeaderContainer, MiniCartContainer } from "./styles";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}
export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  const handleOpenCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  // teste
  const totalAmount = cart.reduce(
    (total, cartItem) => total + Number(cartItem.price),
    0
  );

  return (
    <HeaderContainer>
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
          <span className="header__button-cart-qtd">{cart.length}</span>
        </button>
      </div>

      <MiniCartContainer>
        <div
          className={`minicart__overlay ${isCartOpen ? "actived" : ""}`}
          onClick={handleCloseCart}
        >
          <div className={`minicart__content ${isCartOpen ? "actived" : ""}`}>
            <div className="minicart__content--header">
              <div className="minicart__content--header-titleBox">
                <p className="minicart__content--header-title">
                  Carrinho de Compras
                </p>
              </div>
              <button
                className="minicart__content--header-closeBtn"
                onClick={handleCloseCart}
              >
                <Image
                  src="/Close_cart.svg"
                  width={25}
                  height={25}
                  alt="Botão para fechar"
                />
              </button>
            </div>
            <div
              className={`minicart__content-items-empty ${
                cart.length === 0 ? "actived" : ""
              }`}
            >
              <div className="minicart__empty">
                <div className="minicart__empty-title">
                  <p className="minicart__empty-title--content">
                    Adicione produtos ao seu carrinho
                  </p>
                </div>
                <div className="minicart__empty-message">
                  <p className="minicart__empty-message--content">
                    Para isso basta navegar pelo site para encontrar seus
                    produtos desejados.
                  </p>
                </div>
              </div>
            </div>
            {cart.map((cartItem) => (
              <div className="minicart__content-items">
                <button className="minicart__content-items-closeBtn">
                  <Image
                    src="/Close_cart.svg"
                    width={15}
                    height={15}
                    alt="Botão para fechar"
                  />
                </button>
                <div className="minicart__content-items-container">
                  <ul className="minicart__content-items-list">
                    <li key={cartItem.id} data-product-id={cartItem.id}>
                      <div className="minicart__content-items-list-img">
                        <a href="/">
                          <Image
                            src={cartItem.photo}
                            width={38}
                            height={45}
                            alt={cartItem.name}
                          />
                        </a>
                      </div>
                      <div className="minicart__content-items-list-product">
                        <a
                          href="/"
                          className="minicart__content-items-list-name"
                        >
                          {cartItem.name}
                        </a>
                        <div className="minicart__content-items-list-bottom">
                          <div className="minicart__content-items-list-bottom-input">
                            <p className="minicart__content-items-list-bottom-input-title">
                              Qtd:
                            </p>
                            <form className="minicart__form ">
                              <button
                                className="minicart__form-btn minicart-minus"
                                disabled={true}
                              >
                                <Image
                                  src="/button-minus.svg"
                                  width={15}
                                  height={15}
                                  alt="imagem teste"
                                />
                              </button>
                              <input
                                type="text"
                                value="1"
                                readOnly={true}
                                min="1"
                                max="3"
                                className="minicart__form-input minicart-qty"
                              />
                              <button className="minicart__form-btn minicart-plus">
                                <Image
                                  src="/button-plus.svg"
                                  width={15}
                                  height={15}
                                  alt="imagem teste"
                                />
                              </button>
                            </form>
                          </div>
                        </div>
                        <div className="minicart__content-items-list-pricesBox">
                          <div className="minicart__content-items-list-price">
                            <span className="minicart__content-items-list-price-current">
                              R$
                              <span className="minicart__content-items-list-price-current-total">
                                {`${Number(cartItem.price).toLocaleString(
                                  "pt-BR",
                                  {
                                    maximumFractionDigits: 0,
                                  }
                                )}`}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ))}

            <div className="minicart__content-bottom">
              {cart.length > 0 && (
                <div className="minicart__content-bottom-price_total">
                  <p className="minicart__content-bottom-price_total">
                    Total:
                    <span>{`R$ ${totalAmount.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`}</span>
                  </p>
                </div>
              )}
              <button
                className="minicart__content-bottom-button-buy"
                id="buy-button"
              >
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      </MiniCartContainer>
    </HeaderContainer>
  );
}
