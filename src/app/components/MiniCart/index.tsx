"use client";
import { useCart, Product } from "@/app/context/CartContext";
import { MiniCartContainer } from "./styles";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";

export function MiniCart() {
  const [loading, setLoading] = useState(true);
  const { isCartOpen, closeCart, cart, updateCart } = useCart();

  const totalAmount = cart.reduce(
    (total, cartItem) => total + Number(cartItem.price) * cartItem.quantity,
    0
  );

  const addItemToCart = (cartItem: Product, event: React.FormEvent) => {
    event.preventDefault();

    const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      updateCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...cartItem, quantity: 1 }];
      updateCart(updatedCart);
    }
  };

  const removeItemFromCart = (itemId: number, event: React.FormEvent) => {
    event.preventDefault();

    const existingItem = cart.find((item) => item.id === itemId);

    if (existingItem) {
      const updatedCart = [...cart];
      if (existingItem.quantity > 1) {
        const existingItemIndex = updatedCart.findIndex(
          (item) => item.id === itemId
        );
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        updateCart(updatedCart);
      }
    }
  };

  const removeTotalItemFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    updateCart(updatedCart);
  };

  useEffect(() => {
    setLoading(false);
  }, [cart]);

  return (
    <MiniCartContainer>
      {loading ? (
        <Skeleton count={0} />
      ) : (
        <div className={`minicart__overlay ${isCartOpen ? "actived" : ""}`}>
          <div className={`minicart__overlay ${isCartOpen ? "actived" : ""}`}>
            <div className={`minicart__content ${isCartOpen ? "actived" : ""}`}>
              <div className="minicart__content--header">
                <div className="minicart__content--header-titleBox">
                  <p className="minicart__content--header-title">
                    Carrinho <span>de Compras</span>
                  </p>
                </div>
                <button
                  className="minicart__content--header-closeBtn"
                  onClick={closeCart}
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
              <div className="minicart__content-items-container">
                {cart.map((cartItem) => (
                  <div className="minicart__content-items" key={cartItem.id}>
                    <button
                      className="minicart__content-items-closeBtn"
                      onClick={() => removeTotalItemFromCart(cartItem.id)}
                    >
                      <Image
                        src="/Close_cart.svg"
                        width={15}
                        height={15}
                        alt="Botão para fechar"
                      />
                    </button>
                    <div className="minicart__content-items-container">
                      <ul className="minicart__content-items-list">
                        <li data-product-id={cartItem.id}>
                          <div className="minicart__content-items-list-img">
                            <a href="/">
                              <Image
                                src={cartItem.photo}
                                width={50}
                                height={50}
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
                                    disabled={cartItem.quantity <= 1}
                                    onClick={(e) =>
                                      removeItemFromCart(cartItem.id, e)
                                    }
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
                                    value={cartItem.quantity}
                                    readOnly={true}
                                    min={1}
                                    max={10}
                                    className="minicart__form-input minicart-qty"
                                  />
                                  <button
                                    className="minicart__form-btn minicart-plus"
                                    onClick={(e) => addItemToCart(cartItem, e)}
                                  >
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
                                    {`${(
                                      Number(cartItem.price) * cartItem.quantity
                                    ).toLocaleString("pt-BR", {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    })}`}
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
              </div>
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
                <a
                  className="minicart__content-bottom-link-refresh-buy"
                  href="/"
                >
                  <button
                    className="minicart__content-bottom-button-buy"
                    id="buy-button"
                  >
                    Finalizar compra
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </MiniCartContainer>
  );
}
