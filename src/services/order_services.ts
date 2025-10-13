import { API_URL } from "../helpers/api";

interface OrderDetail {
  product: number;
  quantity: number;
  subtotal: string;
}

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  total: string;
}

interface OrderData {
  code: string;
  client: number;
  total_price: number;
  discount: number;
  details: OrderDetail[];
}

interface OrderResponse {
  id: number;
  code: string;
  client: number;
  total_price: string;
  discount: string;
  created_at: string;
}

export const postNewOrder = async (
  clientId: number
): Promise<OrderResponse | null> => {
  try {
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const order_details: OrderDetail[] = cart.map((product) => ({
      product: product.id,
      quantity: product.quantity,
      subtotal: product.total,
    }));
    const total = cart.reduce(
      (acc, product) => acc + parseFloat(product.total),
      0
    );
    const timestamp = Date.now();
    const order: OrderData = {
      code: `ORD${clientId}${timestamp}`,
      client: clientId,
      total_price: total,
      discount: 0,
      details: order_details,
    };

    console.log("order :", order);

    const response = await fetch(`${API_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
