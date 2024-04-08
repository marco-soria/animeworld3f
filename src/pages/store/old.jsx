import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './StoreProducts.css';
import { FaRegHeart, FaHeart, FaCheckCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import axios from 'axios';
import { API_URL } from '../../helpers/api';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'bootstrap';

const StoreProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate= useNavigate();
  const modalRef = useRef();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    modalRef.current = new Modal(document.getElementById('exampleModal'));
  }, []);

  const handleGoToCart = () => {
    modalRef.current.hide();
    navigate('/cart');
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products/`);
      setProductsData(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const renderProducts = () => {
    if (filteredProducts.length === 0) {
      return <p className="not-found-message">Product not found</p>;
    }

    return filteredProducts.map(product => (
      <div key={product.id} className="col-md-3 col-6 mb-4">
        <div className="card formbg">
          <img src={product.image} className="card border-0" alt={product.name} style={{ height: '40vh', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title" style={{ color: '#9500ff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.name}</h5>
            <p className="card-text fs-5">{`$${parseFloat(product.price).toFixed(2)}`}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
              <button 
                className="btn btn-primary storebutton mt-2 me-2" 
                onClick={() => handleAddToCart(product)}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add to Cart
              </button>
                <Link to="/cart">
                  <IconContext.Provider value={{ color: '#C21292', size: '24px' }}>
                    <FaCartShopping className="cart-icon" style={{ cursor: 'pointer', size: '200px', color: '#ff0088' }} onClick={() => { }} />
                  </IconContext.Provider>
                </Link>
              </div>
              <IconContext.Provider value={{ color: '#C21292', size: '24px' }}>
                {product.is_favorite ? (
                  <FaHeart
                    className="heart-icon"
                    style={{ cursor: 'pointer', size: '80px', color: '#ff0088' }}
                    onClick={() => toggleFavorite(product.id)}
                  />
                ) : (
                  <FaRegHeart
                    className="heart-icon"
                    style={{ cursor: 'pointer', size: '80px', color: '#ff0088' }}
                    onClick={() => toggleFavorite(product.id)}
                  />
                )}
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const handleAddToCart = (product) => {
    const cart = localStorage.getItem("cart") || "[]";
    const cartParsed = JSON.parse(cart);
    const productInCart = cartParsed.find((item) => item.id === product.id);

    if (productInCart) {
      const newCart = cartParsed.map((item) => {
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
      localStorage.setItem("cart", JSON.stringify([...cartParsed, newProduct]));
    }
    setSelectedProduct(product);// No es necesario setShowModal(true) ya que el modal se abrirá automáticamente debido a las propiedades data-toggle y data-target
  };

  const toggleFavorite = async (productId) => {
    try {
      const product = productsData.find(product => product.id === productId);
      setFilteredProducts(prevProducts => prevProducts.map(prevProduct => {
        if (prevProduct.id === productId) {
          return { ...prevProduct, is_favorite: !prevProduct.is_favorite };
        }
        return prevProduct;
      }));
      await axios.post(`${API_URL}/products/${productId}/toggle_favorite/`);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = productsData.filter(product => product.name.toLowerCase().includes(searchTerm));
    setFilteredProducts(filtered);
  };

  const filterProducts = async (category) => {
    try {
      if (category === 'All') {
        setFilteredProducts(productsData);
      } else {
        const response = await axios.get(`${API_URL}/categories/${category}/products/`);
        if (response.data && Array.isArray(response.data)) {
          const selectedCategory = response.data.find(item => item.name === category);
          if (selectedCategory && Array.isArray(selectedCategory.products)) {
            setFilteredProducts(selectedCategory.products);
          } else {
            console.log('Products not found for category:', category);
            setFilteredProducts([]);
          }
        } else {
          console.log('Invalid response format:', response.data);
          setFilteredProducts([]);
        }
      }
    } catch (error) {
      console.error('Error filtering products by category:', error);
      setFilteredProducts([]);
    }
  };

  return (
    <>
      <div className="container-fluid g-0">
        <section className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="input-group mb-1">
                <input type="text" className="form-control" id="searchInput" placeholder="Search Your Product" onChange={handleSearch} />
                <button className="btn btn-success storebutton" type="button" id="searchButton"> Search Product</button>
              </div>
            </div>
          </div>
          <div className="row" id="row-search-results"></div>
        </section>
        <div className="container-fluid">
          <div className="row">
            <h3>Categories</h3>
          </div>
          <div className="row">
            <div className="col-md-2 mb-3">
              <ul className="list-group" id="js-categories-list">
                <li className="list-group-item" onClick={() => filterProducts('All')}>All</li>
                <li className="list-group-item" onClick={() => filterProducts('Accessories')}>Accessories</li>
                <li className="list-group-item" onClick={() => filterProducts('Blu-ray')}>Blu-ray</li>
                <li className="list-group-item" onClick={() => filterProducts('Clothing')}>Clothing</li>
                <li className="list-group-item" onClick={() => filterProducts('Figures')}>Figures</li>
                <li className="list-group-item" onClick={() => filterProducts('Manga')}>Manga</li>
              </ul>
            </div>
            <div className="col-md-10">
              <div className="row" id="js-products-list">
                {renderProducts()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido del modal */}
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
                  
                  <img src={selectedProduct.image} alt={selectedProduct.name} style={{ height: '400px', width: '300px', margin: '10px 0' }} /> {/* Imagen del producto */}
                  
                   <p> <FaCheckCircle /> {/* Icono de confirmación */}{selectedProduct.name}</p> {/* Nombre del producto */}
                   
                   
                   <button onClick={handleGoToCart} className="btn btn-secondary gotocartbutton" data-bs-dismiss="modal">Go to Cart</button>
                </>
              )}
            </div>
            {/* <div className="modal-footer">
              
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export { StoreProducts };