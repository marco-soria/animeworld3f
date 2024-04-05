import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Cart.css';

export const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Variable de estado para el número de productos en el carrito
  const [productCount, setProductCount] = useState(cart.length);

  const handleDeleteProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setProductCount(newCart.length); // Actualizar el número de productos
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
          total: ((product.quantity - 1) * product.price).toFixed(2),
        };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
          total: ((product.quantity + 1) * product.price).toFixed(2),
        };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((acc, product) => acc + parseFloat(product.total), 0);

  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <div className="row">
      <div className="col-md-9 fs-3">Cart</div>
      <div className="col-md-3 fs-3">Summary</div>
      <div className="row">
        <div className="col-md-9">
          <table className="table table-bordered text-center align-middle">
            <thead>
              <tr className="tr-cartheader">
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((product, index) => (
                  <tr className="tr-cartcontent" key={product.id}>
                    <td>{index + 1}</td> {/* Números secuenciales */}
                    <td><img src={product.image} style={{ height: "150px", width: "100px" }} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td>
                      {product.quantity}
                    </td>
                    <td>{product.price}</td>
                    <td>{product.total}</td>
                    <td>
                      <button 
                        type="button"
                        onClick={() => handleDecreaseQuantity(product.id)}
                        className="btn btn-primary btn-sm m-1"
                        disabled={product.quantity <= 1}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => handleIncreaseQuantity(product.id)}
                        className="btn btn-primary btn-sm m-1"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteProduct(product.id)}
                        className="btn btn-danger btn-sm m-1"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{backgroundColor: "#030637", color:"#9e02f9"}}>Empty Cart:  <Link to='/store' className="btn btn-secondary generateOrder mx-3">Go to Store</Link></td>
                 
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-md-3">
          <div className="card summary p-4">
          <p className="fs-4"> Total: USD {parseFloat(total).toFixed(2)}</p>
          <Link to='/order' className={`btn btn-secondary generateOrder ${cart.length === 0 ? 'disabled' : ''}`}>Generate Order</Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

