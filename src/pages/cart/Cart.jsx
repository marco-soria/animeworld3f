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

  const total = cart.reduce((acc, product) => acc + parseFloat(product.total), 0);


  return (
    <div style={{ marginTop: '80px' }}>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Actions</th>
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
              <td>Empty Cart</td>
            </tr>
          )}
        </tbody>
      </table>
      <span>total : {parseFloat(total).toFixed(2)}</span>
      <Link to='/order'>Generate Order</Link>
    </div>
  );
};