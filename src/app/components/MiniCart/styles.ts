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
    width: 400px;
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
            color: #001e62;
            font-weight: 700;
            text-align: center;
            margin-top: 50px;
          }
        }

        &-message {
          padding: 0 10px;

          &--content {
            font-size: 16px;
            color: #001e62;
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
      justify-content: space-around;

      &-titleBox {
        font-weight: 700;
        font-style: normal;
        font-size: 21px;
        color: white;
        width: 60%;
      }

      &-closeBtn {
        border: none;
        background: none;
      }
    }

    &-items {
      max-height: 355px;
      background: white;
      position: relative;
      margin: 25px;
      border-radius: 5px;

      &-closeBtn {
        border: none;
        background: none;
        position: absolute;
        right: -7px;
        bottom: 110px;
        z-index: 11;
      }

      &-list {
        position: relative;
        padding: 16px 16px 0;
        list-style: none;
      }
    }
  }
`;
