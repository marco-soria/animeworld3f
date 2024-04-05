import { API_URL } from "../helpers/api";

export const postNewOrder = async (clientId) => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart"))
    const order_details = cart.map(product => ({
        product: product.id,
        quantity: product.quantity,
        subtotal: product.total
    }));
    const total = cart.reduce((acc, product) => acc + product.total, 0);
    const order = {
        code: "P" + clientId,
        client: clientId,
        total_price: total,
        discount: 0,
        details: order_details
    }

    console.log("order :",order)

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