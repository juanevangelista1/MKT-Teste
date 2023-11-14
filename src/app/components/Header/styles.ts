"use client";
import styled from "styled-components";
import "@/styles/Global";

export const HeaderContainer = styled.div`
  background-color: #0f52ba;
  height: 65px;
  display: flex;
  align-items: center;
  gap: 80%;
  padding: 0px 50px;

  .header {
    &__title {
      color: var(--white);
      font-weight: 400;
      line-height: 19px;
      align-items: center;
      display: flex;
      gap: 10px;

      span {
        font-weight: 200;
      }
    }

    &__button {
      &-cart {
        border: none;
        border-radius: 10px;
        display: flex;
        height: 36px;
        width: 85px;
        gap: 20px;
        justify-content: center;
        align-items: center;

        &-qtd {
          font-weight: bold;
          font-size: 20px;
        }
      }
    }
  }
`;
