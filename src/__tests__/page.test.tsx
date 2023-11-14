import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { ProductList } from "../app/components/Products";
import { CartProvider } from "../app/context/CartContext";
import "@testing-library/jest-dom";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockProducts = [
  {
    id: 1,
    name: "Product 1",
    photo: "/apple-watch.png",
    price: 10.99,
    description: "Description 1",
  },
  {
    id: 2,
    name: "Product 2",
    photo: "/apple-watch.png",
    price: 15.99,
    description: "Description 2",
  },
];

describe("ProductList", () => {
  it("fetches and displays products", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { products: mockProducts } });

    render(
      <CartProvider>
        <ProductList />
      </CartProvider>
    );

    await waitFor(() => {
      mockProducts.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(
          screen.getByText(
            `R$ ${product.price.toLocaleString("pt-BR", {
              maximumFractionDigits: 0,
            })}`
          )
        ).toBeInTheDocument();
        expect(screen.getByText(product.description)).toBeInTheDocument();
      });
    });
  });

  it("adds product to cart on button click", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: { products: mockProducts } });

    render(
      <CartProvider>
        <ProductList />
      </CartProvider>
    );

    await waitFor(() => {
      mockProducts.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument();

        mockedAxios.post.mockResolvedValueOnce({ data: { success: true } });

        const comprarButtons = screen.getAllByText("COMPRAR");

        expect(comprarButtons.length).toBeGreaterThanOrEqual(1);

        comprarButtons.forEach((button) => {
          expect(button).toBeInTheDocument();
        });

        comprarButtons[0].click();

        const successMessage = screen.findByText(
          `Produto adicionado: ${product.name}`
        );
        return expect(successMessage).resolves.toBeInTheDocument();
      });
    });
  });
});
