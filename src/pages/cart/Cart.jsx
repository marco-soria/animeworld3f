import { useState } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const handleDeleteProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div>
      <h1>Carrito</h1>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? (
            cart.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.total}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDeleteProduct(product.id)}
                    className="p-3 bg-white text-gray-900"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Carrito sin productos</td>
            </tr>
          )}
        </tbody>
      </table>
      <Link to='/order'>GENERAR PEDIDO</Link>
    </div>
  );
};