"use client";
import styled from "styled-components";

export const MiniCartContainer = styled.section`
  .minicart__ {
    &overlay {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9;

      &.actived {
        background-color: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100vh;
      }
    }
  }

  .minicart__content {
    position: fixed;
    right: -100%;
    width: 450px;
    height: 100vh;
    background-color: #0f52ba;
    z-index: 9;
    top: 0;
    border-radius: 4px;
    transition: all 0.4s ease-in-out 0s;

    &.actived {
      right: 0;
      transition: all 0.4s ease-in-out 0s;
    }
    &-items-empty {
      display: none;
      &.actived {
        text-align: center;
        display: flex;
      }
      .minicart__empty {
        &-title {
          &--content {
            font-size: 22px;
            color: var(--white);
            font-weight: 700;
            text-align: center;
            margin: 50px;
          }
        }

        &-message {
          padding: 0 10px;

          &--content {
            font-size: 16px;
            color: var(--white);
            text-align: center;
            margin-top: 10px;
          }
        }

        &-button {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translate(-50%, 0%);

          #minicart-empty-button--close {
            width: 368px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            background-color: #001e62;
            border-radius: 32px;
            color: #ffffff;
            cursor: pointer;

            @media (max-width: 768px) {
              width: 280px;
            }
          }
        }
      }
    }

    &--header {
      height: 45px;
      position: relative;
      margin: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-titleBox {
        font-weight: 700;
        font-style: normal;
        color: var(--white);
        width: 34%;
      }
      &-title {
        font-size: 23px;
        span {
          font-size: 20px;
        }
      }

      &-closeBtn {
        border: none;
        background: none;
      }
    }
    &-items-container {
      max-height: 500px;
      width: fit-content;
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
    }

    &-items {
      background: white;
      position: relative;
      margin: 25px;
      border-radius: 5px;

      &-closeBtn {
        border: none;
        background: none;
        position: absolute;
        right: -7px;
        bottom: 127px;
        z-index: 11;
      }

      &-list {
        position: relative;
        padding: 16px 16px 0;
        list-style: none;
        height: 140px;

        li {
          display: flex;
          align-items: center;
          height: 105px;
        }
        &-product {
          display: flex;
          align-items: center;
        }

        &-name {
          text-decoration: none;
          color: black;
          font-size: 15px;
          margin: 0 0 0 10px;
        }

        &-bottom {
          display: flex;
          align-items: center;
          padding: 0 9px 10px;

          &-input {
            &-title {
              font-size: 10px;
              margin: 0 0 5px;
            }
          }

          .minicart__form {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 95px;
            height: 30px;
            border: 1px solid #bfbfbf;
            border-radius: 7px;

            &-btn {
              background-color: transparent;
              border: none;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;

              .minocart-minus[disabled="true"] {
                cursor: not-allowed;
              }
            }

            &-input {
              border-top: none;
              width: 60%;
              font-style: normal;
              font-weight: 700;
              font-size: 14px;
              line-height: 20px;
              text-align: center;
              color: #001e62;
              outline: none;
              padding-top: 2px;
              border-bottom: none;
              border-left: 1px solid #bfbfbf;
              border-right: 1px solid #bfbfbf;
            }
          }
          &-price {
            span {
              font-weight: bold;
              font-size: 15px;
            }
          }
        }

        &-price {
          span {
            font-weight: 700;
          }
        }
      }
    }

    &-bottom {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;

      &-price {
        &_total {
          margin: 0 0 10px;
          color: var(--white);
          p {
            font-weight: 700;
            font-size: 19px;
            span {
              margin: 0 0 0 170px;
            }
          }
        }
      }

      &-link-refresh-buy {
        width: 100%;
      }
      &-button {
        &-buy {
          width: 100%;
          height: 60px;
          background-color: black;
          border: none;
          color: white;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 15px;
        }
      }
    }
  }
`;
