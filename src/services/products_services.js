import { API_URL } from "../helpers/api";

export const getProductsService = async () => {
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