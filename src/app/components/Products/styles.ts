"use client";
import styled from "styled-components";

export const ProductGrid = styled.div`
  max-height: 900px;
  height: 555px;
  background-color: #e5e5e5;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const ProductGridContainer = styled.div`
  .product__content {
    margin: 10px;
    width: 217.56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 16px 24px rgb(0 0 0 / 10%);
    border-radius: 10px;

    &-infos {
      &-title {
        font-size: 16px;
        font-weight: normal;
        line-height: 19px;
        display: flex;
        margin: 10px;
        align-items: center;
      }

      &-price {
        height: 25px;
        background-color: #373737;
        color: white;
        border-radius: 5px;
        width: 55%;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          font-weight: bold;
          font-size: 15px;
        }
      }

      &-description {
        font-weight: normal;
        font-size: 10px;
        margin: 10px;
      }

      &-button {
        .buy-button {
          width: 100%;
          border: none;
          background-color: #0f52ba;
          height: 30px;
          border-radius: 0 0 5px 5px;
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            margin-right: 10px;
          }

          p {
            color: white;
            font-weight: bold;
          }
        }
      }
    }
  }
`;
