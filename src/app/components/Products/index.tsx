import { ProductGrid, ProductGridContainer } from "./styles";
import Image from "next/image";
export function ProductList() {
  return (
    <ProductGrid>
      <ProductGridContainer>
        <section className="product__content">
          <div className="product__content-image">
            <Image
              src="/apple-watch.png"
              width={111}
              height={138}
              alt="imagem teste"
            />
          </div>
          <section className="product__content-infos">
            <div className="product__content-infos-title">
              Apple Watch Series 4 GPS
              <div className="product__content-infos-price">
                <span>R$399</span>
              </div>
            </div>
            <div className="product__content-infos-description">
              <p>Redesigned from scratch and completely revised.</p>
            </div>
            <div className="product__content-infos-button">
              <button className="buy-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                >
                  <path
                    opacity="0.737212"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.737212"
                    d="M1 4.375H13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.737212"
                    d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>COMPRAR</p>
              </button>
            </div>
          </section>
        </section>
      </ProductGridContainer>
    </ProductGrid>
  );
}