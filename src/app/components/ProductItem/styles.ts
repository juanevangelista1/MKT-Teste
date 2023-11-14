import styled from "styled-components";

export const Item = styled.div`
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
