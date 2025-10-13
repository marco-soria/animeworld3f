import { API_URL } from "../helpers/api";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: number;
  is_favorite?: boolean;
}

export const getProductsService = async (): Promise<Product[] | null> => {
  try {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch (error) {
    return null;
  }
};
