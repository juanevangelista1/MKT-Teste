import { MiniCartContainer } from "./styles";
import Image from "next/image";
export function MiniCart() {
  return (
    <MiniCartContainer>
      <div className="minicart__overlay ">
        <div className="minicart__content ">
          <div className="minicart__content--header">
            <div className="minicart__content--header-titleBox">
              <p className="minicart__content--header-title">
                Carrinho de Compras
              </p>
            </div>
            <button className="minicart__content--header-closeBtn">
              <Image
                src="/Close_cart.svg"
                width={25}
                height={25}
                alt="Botão para fechar"
              />
            </button>
          </div>
          <div className="minicart__content-items-empty">
            <div className="minicart__empty">
              <div className="minicart__empty-title">
                <p className="minicart__empty-title--content">
                  Adicione produtos ao seu carrinho
                </p>
              </div>
              <div className="minicart__empty-message">
                <p className="minicart__empty-message--content">
                  Para isso basta navegar pelo site, use a busca e menu, para
                  encontrar seus produtos desejados.
                </p>
              </div>
            </div>
          </div>
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
                <li data-index="0" data-product-id="9409">
                  <div className="minicart__content-items-list-img">
                    <a href="/">
                      <Image
                        src="/apple-watch.png"
                        width={38}
                        height={45}
                        alt="imagem teste"
                      />
                    </a>
                  </div>
                  <div className="minicart__content-items-list-product">
                    <a href="/" className="minicart__content-items-list-name">
                      Apple Watch Series 4 GPS
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
                            399
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="minicart__content-bottom">
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
  );
}
