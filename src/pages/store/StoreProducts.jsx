import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './StoreProducts.css';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IconContext } from 'react-icons';
import axios from 'axios';
import { API_URL } from '../../helpers/api';

const StoreProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

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
          <img src={`http://res.cloudinary.com/dh5kaw1ea/${product.image}`} className="card border-0" alt={product.name} style={{ height: '40vh', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title" style={{ color: '#9500ff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.name}</h5>
            <p className="card-text fs-5">{`$${parseFloat(product.price).toFixed(2)}`}</p>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-primary storebutton mt-2">Add to Cart</button>
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

  const toggleFavorite = async (productId) => {
    try {
      const response = await axios.post(`${API_URL}/products/${productId}/toggle_favorite/`);
      setFilteredProducts(prevProducts => prevProducts.map(product =>
        product.id === productId ? { ...product, is_favorite: response.data.is_favorite } : product
      ));
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
        // Mostrar todos los productos sin realizar una solicitud adicional a la API
        setFilteredProducts(productsData);
      } else {
        // Filtrar productos por categoría utilizando la API
        const response = await axios.get(`${API_URL}/categories/${category}/products/`);
        
        if (response.data && Array.isArray(response.data)) {
          // Buscar la categoría seleccionada en la respuesta
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
  );
};

export { StoreProducts };

