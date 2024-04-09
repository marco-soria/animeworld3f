import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../helpers/api";
import { isAuthenticated } from "../../helpers/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {  FaCheckCircle } from "react-icons/fa";
import { useRef } from 'react';
import { Modal } from 'bootstrap';

import './Wishlist.css'

export const Wishlist = () => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [selectedProduct, setSelectedProduct] = useState(null);  // New state for the selected product

  const navigate = useNavigate();
  const modalRef = useRef();  // New ref for the modal

  useEffect(() => {
    modalRef.current = new Modal(document.getElementById('exampleModal'));
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (isAuthenticated()) {
        const token = localStorage.getItem("access_token");
        console.log('Access token:', token);  // Log the access token
        const response = await axios.get(`${API_URL}/authenticated_products/`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log('Response data:', response.data);  // Log the response data
        const favoriteProducts = response.data.filter(product => product.is_favorite);
        console.log('Favorite products:', favoriteProducts);  // Log the favorite products
        setFavorites(favoriteProducts);
      } else {
        console.log('User is not authenticated');  // Log authentication status
      }
    };
    fetchFavorites();
  }, []);

  const handleGoToCart = () => {
    modalRef.current.hide();
    navigate('/cart');
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = cart.find((item) => item.id === product.id);
  
    if (productInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            total: (parseFloat(item.total) + parseFloat(item.price)).toFixed(2),
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newProduct = {
        ...product,
        quantity: 1,
        total: parseFloat(product.price).toFixed(2),
      };
      localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
    }
    setSelectedProduct(product);
  };
  
  const handleRemoveFromFavorites = async (productId) => {
    try {
      if (isAuthenticated()) {
        const token = localStorage.getItem("access_token");
        await axios.post(`${API_URL}/products/${productId}/toggle_favorite/`, {}, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setFavorites(favorites.filter(product => product.id !== productId));
      }
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: '/wishlist' }}/>;
  }

  

  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <div className="row">
        <div className="col fs-3">My Wishlist</div>
        
      </div>
        <div className="row">
            <div className="col">
            <table className="table table-bordered text-center align-middle" >
                <thead>
                    <tr className="tr-wishheader">
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Cart</th>
                    <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {favorites.length > 0 ? (
                        favorites.map((product, index) => (
                        <tr className="tr-wishcontent" key={product.id}>
                            <td>{index + 1}</td>
                            <td><img src={product.image} alt={product.name} style={{ height: "150px", width: "100px" }} /></td>
                            <td>{product.name}</td>
                            <td><button 
                            className= "btn btn-secondary wishToCart" 
                            onClick={() => handleAddToCart(product)}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            >
                              Add to Cart</button></td>
                            <td><button className="btn btn-danger" onClick={() => handleRemoveFromFavorites(product.id)}>X</button></td>
                        </tr>
                        )) 
                    ) : (
                            <tr>
                                <td colSpan="7" style={{backgroundColor: "#030637", color:"#9e02f9"}}>
                                    Empty Wishlist: <Link to='/store' className="btn btn-secondary generateOrder mx-3">Go to Store</Link>
                                </td>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Product Added to Cart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column align-items-center justify-content-center">
              {selectedProduct && (
                <>
                  <img src={selectedProduct.image} alt={selectedProduct.name} style={{ height: '400px', width: '300px', margin: '10px 0' }} />
                  <p><FaCheckCircle /> {selectedProduct.name}</p>
                  <button onClick={handleGoToCart} className="btn btn-secondary gotocartbutton" data-bs-dismiss="modal">Go to Cart</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

        <div className="row">
          <Link to='/store' className="mt-2 linkstorecart"> Go back to store</Link>
        </div>
    </div>
  );
};