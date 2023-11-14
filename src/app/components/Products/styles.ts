"use client";
import styled from "styled-components";

export const ProductGrid = styled.div`
  background-color: #e5e5e5;
  display: grid;
  justify-items: center;
  padding: 20px 0 50px;
  height: 90vh;
  overflow-y: auto;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const ProductGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 15px 0;
  margin: 10px 0;

  height: 100%;

  .product__content {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    height: 100%;
    background-color: var(--white);

    &-infos {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 90%;

      &-title {
        font-size: 16px;
        font-weight: normal;
        line-height: 19px;
        display: flex;
        margin: 10px 5px;
        align-items: center;
        gap: 5px;
        justify-content: space-between;
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
        .button__buy {
          width: 100%;
          border: none;
          background-color: #0f52ba;
          height: 30px;
          border-radius: 0 0 5px 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          p {
            color: white;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

export const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
