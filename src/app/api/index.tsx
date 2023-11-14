import axios from "axios";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

export async function fetchProducts() {
  try {
    const response = await axios.get(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products",
      {
        params: {
          page: 1,
          rows: 10,
          sortBy: "id",
          orderBy: "ASC",
        },
      }
    );

    const products: Product[] = response.data.products;

    return {
      products,
      revalidate: 86400,
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    return {
      products: [],
      revalidate: 86400,
    };
  }
}
