import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './StoreProducts.css';

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IconContext } from 'react-icons';


import Product1 from '../../assets/store/product1.jpg';
import Product2 from '../../assets/store/product2.jpg';
import Product3 from '../../assets/store/product3.jpg';
import Product4 from '../../assets/store/product4.jpg';
import Product5 from '../../assets/store/product5.jpg';
import Product6 from '../../assets/store/product6.jpg';
import Product7 from '../../assets/store/product7.jpg';
import Product8 from '../../assets/store/product8.jpg';
import Product9 from '../../assets/store/product9.jpg';
import Product10 from '../../assets/store/product10.jpg';
import Product11 from '../../assets/store/product11.jpg';
import Product12 from '../../assets/store/product12.jpg';
import Product13 from '../../assets/store/product13.jpg';
import Product14 from '../../assets/store/product14.jpg';
import Product15 from '../../assets/store/product15.jpg';
import Product16 from '../../assets/store/product16.jpg';
import Product17 from '../../assets/store/product17.jpg';
import Product18 from '../../assets/store/product18.jpg';
import Product19 from '../../assets/store/product19.jpg';
import Product20 from '../../assets/store/product20.jpg';
import Product21 from '../../assets/store/product21.jpg';
import Product22 from '../../assets/store/product22.jpg';
import Product23 from '../../assets/store/product23.jpg';
import Product24 from '../../assets/store/product24.jpg';
import Product25 from '../../assets/store/product25.jpg';
import Product26 from '../../assets/store/product26.jpg';
import Product27 from '../../assets/store/product27.jpg';
import Product28 from '../../assets/store/product28.jpg';
import Product29 from '../../assets/store/product29.jpg';
import Product30 from '../../assets/store/product30.jpg';
import Product31 from '../../assets/store/product31.jpg';
import Product32 from '../../assets/store/product32.jpg';
import Product33 from '../../assets/store/product33.jpg';
import Product34 from '../../assets/store/product34.jpg';
import Product35 from '../../assets/store/product35.jpg';
import Product36 from '../../assets/store/product36.jpg';
import Product37 from '../../assets/store/product37.jpg';
import Product38 from '../../assets/store/product38.jpg';
import Product39 from '../../assets/store/product39.jpg';
import Product40 from '../../assets/store/product40.jpg';
import Product41 from '../../assets/store/product41.jpg';
import Product42 from '../../assets/store/product42.jpg';
import Product43 from '../../assets/store/product43.jpg';
import Product44 from '../../assets/store/product44.jpg';
import Product45 from '../../assets/store/product45.jpg';
import Product46 from '../../assets/store/product46.jpg';
import Product47 from '../../assets/store/product47.jpg';
import Product48 from '../../assets/store/product48.jpg';
import Product49 from '../../assets/store/product49.jpg';
import Product50 from '../../assets/store/product50.jpg';
import Product51 from '../../assets/store/product51.jpg';
import Product52 from '../../assets/store/product52.jpg';
import Product53 from '../../assets/store/product53.jpg';
import Product54 from '../../assets/store/product54.jpg';
import Product55 from '../../assets/store/product55.jpg';
import Product56 from '../../assets/store/product56.jpg';
import Product57 from '../../assets/store/product57.jpg';
import Product58 from '../../assets/store/product58.jpg';
import Product59 from '../../assets/store/product59.jpg';
import Product60 from '../../assets/store/product60.jpg';
import Product61 from '../../assets/store/product61.jpg';
import Product62 from '../../assets/store/product62.jpg';
import Product63 from '../../assets/store/product63.jpg';
import Product64 from '../../assets/store/product64.jpg';
import Product65 from '../../assets/store/product65.jpg';
import Product66 from '../../assets/store/product66.jpg';
import Product67 from '../../assets/store/product67.jpg';
import Product68 from '../../assets/store/product68.jpg';
import Product69 from '../../assets/store/product69.jpg';
import Product70 from '../../assets/store/product70.jpg';
import Product71 from '../../assets/store/product71.jpg';
import Product72 from '../../assets/store/product72.jpg';
import Product73 from '../../assets/store/product73.jpg';
import Product74 from '../../assets/store/product74.jpg';
import Product75 from '../../assets/store/product75.jpg';
import Product76 from '../../assets/store/product76.jpg';
import Product77 from '../../assets/store/product77.jpg';
import Product78 from '../../assets/store/product78.jpg';
import Product79 from '../../assets/store/product79.jpg';
import Product80 from '../../assets/store/product80.jpg';


const StoreProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Simulando la carga de datos
    // Aquí cargarías los datos de productos de tu API o archivo de datos
    const productsData = [

        { product1: { id: 1, name: 'Spy x Family - Anya Expressions', description: '', image: Product1, category: 'Accessories', price: 19.99, favorite: false } },
        { product2: { id: 2, name: 'Jujutsu Kaisen - Character  Box', description: '', image: Product2, category: 'Accessories', price: 9.95, favorite: false } },
        { product3: { id: 3, name: 'Chainsaw Man - Blind Keychain', description: '', image: Product3, category: 'Accessories', price: 14.95, favorite: false } },
        { product4: { id: 4, name: 'Naruto Shippuden - Akatsuki Box', description: '', image: Product4, category: 'Accessories', price: 9.95, favorite: false } },
        { product5: { id: 5, name: 'Ein Cowboy Bebop Nendoroid Pin', description: '', image: Product5, category: 'Accessories', price: 11.24, favorite: false } },
        { product6: { id: 6, name: 'Dragon Ball Z - Shenron FiGPiN', description: '', image: Product6, category: 'Accessories', price: 13.49, favorite: false } },
        /* { product7: { id: 7, name: 'Kingdom Hearts 20th Keychain', description: '', image: Product7 category: 'Accessories', price: 26.99, favorite: false } },
        { product8: { id: 8, name: 'Phantom Thief P5 Metal Keychain', description: '', image: Product8, category: 'Accessories', price: 7.99, favorite: false } },
        { product9: { id: 9, name: 'All Might Glitter FiGPiN', description: '', image: Product9, category: 'Accessories', price: 24.99, favorite: false } },
        { product10: { id: 10, name: 'Jujutsu Kaisen - Geto Pin', description: '', image: Product10, category: 'Accessories', price: 9.95, favorite: false } },
        { product11: { id: 11, name: 'Jujutsu Kaisen - Satoru Watch', description: '', image: Product11, category: 'Accessories', price: 150.00, favorite: false } },
        { product12: { id: 12, name: 'One Piece - Devil Fruit Bucket Hat', description: '', image: Product12, category: 'Accessories', price: 29.95, favorite: false } },
        { product13: { id: 13, name: "Jojo's Bizarre Adventure - Beanie'", description: '', image: Product13, category: 'Accessories', price: 24.99, favorite: false } },
        { product14: { id: 14, name: 'Spy x Family - Blind Poster Set', description: '', image: Product14, category: 'Accessories', price: 9.95, favorite: false } },
        { product15: { id: 15, name: 'Notebook Death Note Keychain', description: '', image: Product15, category: 'Accessories', price: 7.99, favorite: false } },
        { product16: { id: 16, name: 'Naruto Shippuden Backpack', description: '', image: Product16, category: 'Accessories', price: 49.95, favorite: false } }, */
        { product17: { id: 17, name: 'Berserk - The Complete TV Series', description: '', image: Product17, category: 'Blu-ray', price: 44.96, favorite: false } },
        { product18: { id: 18, name: 'Futakoi - The Complete TV Series', description: '', image: Product18, category: 'Blu-ray', price: 22.46, favorite: false } },
        { product19: { id: 19, name: 'Lovely Complex - LA Movie', description: '', image: Product19, category: 'Blu-ray', price: 18.71, favorite: false } },
        { product20: { id: 20, name: 'Bleach Sennen Kessen-hen', description: '', image: Product20, category: 'Blu-ray', price: 40.48, favorite: false } },
        { product21: { id: 21, name: 'Urusei Yatsura (2022) S1-2', description: '', image: Product21, category: 'Blu-ray', price: 67.49, favorite: false } },
        { product22: { id: 22, name: 'Akiba Maid War', description: '', image: Product22, category: 'Blu-ray', price: 52.49, favorite: false } },
        /* { product23: { id: 23, name: 'Insomniacs After School', description: '', image: Product23, category: 'Blu-ray', price: 44.99, favorite: false } },
        { product24: { id: 24, name: 'RWBY: Ice Queendom', description: '', image: Product24, category: 'Blu-ray', price: 52.49, favorite: false } },
        { product25: { id: 25, name: 'Lovely Complex TV', description: '', image: Product25, category: 'Blu-ray', price: 27.46, favorite: false } },
        { product26: { id: 26, name: 'Kurokami The Animation', description: '', image: Product26, category: 'Blu-ray', price: 37.46, favorite: false } },
        { product27: { id: 27, name: 'Sailor Moon SuperS', description: '', image: Product27, category: 'Blu-ray', price: 44.99, favorite: false } },
        { product28: { id: 28, name: 'Naruto Shippuden - Set 2', description: '', image: Product28, category: 'Blu-ray', price: 24.99, favorite: false } },
        { product29: { id: 29, name: 'Mazinger Z - TV Series Collection 2', description: '', image: Product29, category: 'Blu-ray', price: 59.96, favorite: false } },
        { product30: { id: 30, name: 'Lupin the 3rd - 7D Rhapsody', description: '', image: Product30, category: 'Blu-ray', price: 18.71, favorite: false } },*/
        { product31: { id: 31, name: 'B Gata H Kei', description: '', image: Product31, category: 'Blu-ray', price: 37.49, favorite: false } },
        { product32: { id: 32, name: 'Fairy Tail Collection 9', description: '', image: Product32, category: 'Blu-ray', price: 41.24, favorite: false } }, 
        { product33: { id: 33, name: 'Junji Ito - Yon & Mu Holiday Sweater', description: '', image: Product33, category: 'Clothing', price: 38.47, favorite: false } },
        { product34: { id: 34, name: 'One Piece - Gum Gum Sweater', description: '', image: Product34, category: 'Clothing', price: 46.71, favorite: false } },
        { product35: { id: 35, name: "JoJo's Bizarre Adventure - Mista", description: '', image: Product35, category: 'Clothing', price: 24.99, favorite: false } },
        { product36: { id: 36, name: "JoJo's Bizarre Adventure - Hoodie", description: '', image: Product36, category: 'Clothing', price: 64.95, favorite: false } },
        { product37: { id: 37, name: 'Trigun - Ready Set  T-Shirt', description: '', image: Product37, category: 'Clothing', price: 29.95, favorite: false } },
        { product38: { id: 38, name: 'Hunter x Hunter - T-Shirt', description: '', image: Product38, category: 'Clothing', price: 19.96, favorite: false } },
        /* { product39: { id: 39, name: 'Attack on Titan - Sweater', description: '', image: Product39, category: 'Clothing', price: 19.96, favorite: false } },
        { product40: { id: 40, name: 'Jujutsu Kaisen - Gojo Hoodie', description: '', image: Product40, category: 'Clothing', price: 44.95, favorite: false } },
        { product41: { id: 41, name: 'Jujutsu Kaisen - Nobara Sleeve', description: '', image: Product41, category: 'Clothing', price: 34.95, favorite: false } },
        { product42: { id: 42, name: 'DARLING in the FRANXX - Hoodie', description: '', image: Product42, category: 'Clothing', price: 64.95, favorite: false } },
        { product43: { id: 43, name: 'Tokyo Ghoul - T-Shirt', description: '', image: Product43, category: 'Clothing', price: 24.95, favorite: false } },
        { product44: { id: 44, name: 'Hunter x Hunter - Sweatpants', description: '', image: Product44, category: 'Clothing', price: 24.99, favorite: false } },
        { product45: { id: 45, name: 'Jujutsu Kaisen - Tokyo Jacket', description: '', image: Product45, category: 'Clothing', price: 89.95, favorite: false } },
        { product46: { id: 46, name: 'Junji Ito - Uzumaki Camo', description: '', image: Product46, category: 'Clothing', price: 45.96, favorite: false } },
        { product47: { id: 47, name: 'Naruto Shippuden - Jacket', description: '', image: Product47, category: 'Clothing', price: 44.95, favorite: false } },
        { product48: { id: 48, name: 'Akira Leather Jacket', description: '', image: Product48, category: 'Clothing', price: 450.00, favorite: false } }, */
        { product49: { id: 49, name: 'Hades - Zagreus', description: '', image: Product49, category: 'Figures', price: 12.95, favorite: false } },
        { product50: { id: 50, name: 'Chained Soldier - Kyouka Uzen', description: '', image: Product50, category: 'Figures', price: 337.49, favorite: false } },
        { product51: { id: 51, name: 'Bleach - Ichigo Kurosaki', description: '', image: Product51, category: 'Figures', price: 31.99, favorite: false } },
        { product52: { id: 52, name: 'The Apothecary Diaries - Maomao', description: '', image: Product52, category: 'Figures', price: 31.99, favorite: false } },
        { product53: { id: 53, name: 'Frieren - Fern Nendoroid', description: '', image: Product53, category: 'Figures', price: 37.99, favorite: false } },
        { product54: { id: 54, name: 'Jujutsu Kaisen - Satoru Gojo S', description: '', image: Product54, category: 'Figures', price: 419.99, favorite: false } },
        /* { product55: { id: 55, name: 'One Piece - Luffy & Ace ', description: 'Description for Accessory 2', image: Product55, category: 'Figures', price: 252.99, favorite: false } },
        { product56: { id: 56, name: 'Bleach - Toushiro Hitsugaya', description: 'Description for Accessory 2', image: Product56, category: 'Figures', price: 69.99, favorite: false } },
        { product57: { id: 57, name: 'Falslander - Samurai Figma', description: 'Description for Accessory 2', image: Product57, category: 'Figures', price: 100.99, favorite: false } },
        { product58: { id: 58, name: 'Chainsaw Man - Makima S.H', description: 'Description for Accessory 2', image: Product58, category: 'Figures', price: 77.99, favorite: false } },
        { product59: { id: 59, name: 'Astro Boy -  Kit', description: 'Description for Accessory 2', image: Product59, category: 'Figures', price: 24.99, favorite: false } },
        { product60: { id: 60, name: 'Jujutsu Kaisen - Toji Fushiguro', description: 'Description for Accessory 2', image: Product60, category: 'Figures', price: 38.99, favorite: false } },
        { product61: { id: 61, name: 'Naruto - Naruto Uzumaki', description: 'Description for Accessory 2', image: Product61, category: 'Figures', price: 34.99, favorite: false } },
        { product62: { id: 62, name: 'Overlord - Clementiner', description: 'Description for Accessory 2', image: Product62, category: 'Figures', price: 219.99, favorite: false } },
        { product63: { id: 63, name: 'Amnesia - Ikki Nendoroid', description: 'Description for Accessory 2', image: Product63, category: 'Figures', price: 61.99, favorite: false } },
        { product64: { id: 64, name: 'To Love-Ru Darkness - Momo', description: 'Description for Accessory 2', image: Product64, category: 'Figures', price: 43.99, favorite: false } }, */
        { product65: { id: 65, name: 'Initial D V7', description: 'Description for Accessory 2', image: Product65, category: 'Manga', price: 18.99, favorite: false } },
        { product66: { id: 66, name: 'Spy x Family Manga V11', description: 'Description for Accessory 2', image: Product66, category: 'Manga', price: 24.99, favorite: false } },
        { product67: { id: 67, name: 'xxxHOLiC Rei Graphic N3', description: 'Description for Accessory 2', image: Product67, category: 'Manga', price: 8.79, favorite: false } },
        { product68: { id: 68, name: 'Naruto Manga V21', description: 'Description for Accessory 2', image: Product68, category: 'Manga', price: 7.99, favorite: false } },
        { product69: { id: 69, name: 'Rainbow Days Manga V7', description: 'Description for Accessory 2', image: Product69, category: 'Manga', price: 7.99, favorite: false } },
        { product70: { id: 70, name: 'Dragon Ball Z Manga V25', description: 'Description for Accessory 2', image: Product70, category: 'Manga', price: 7.99, favorite: false } },
        /* { product71: { id: 71, name: 'Hunter X Hunter Manga V21', description: 'Description for Accessory 2', image: Product71, category: 'Manga', price: 7.99, favorite: false } },
        { product72: { id: 72, name: 'Your Lie In April Manga V11', description: 'Description for Accessory 2', image: Product72, category: 'Manga', price: 7.99, favorite: false } },
        { product73: { id: 73, name: 'One Piece Manga V61', description: 'Description for Accessory 2', image: Product73, category: 'Manga', price: 7.99, favorite: false } },
        { product74: { id: 74, name: 'Fairy Tail Manga V56', description: 'Description for Accessory 2', image: Product74, category: 'Manga', price: 7.99, favorite: false } },
        { product75: { id: 75, name: 'Monster: Manga 7', description: 'Description for Accessory 2', image: Product75, category: 'Manga', price: 18.39, favorite: false } },
        { product76: { id: 76, name: 'Ponyo Film Comic Manga V4', description: 'Description for Accessory 2', image: Product76, category: 'Manga', price: 7.99, favorite: false } },
        { product77: { id: 77, name: 'Tomie Deluxe Edition', description: 'Description for Accessory 2', image: Product77, category: 'Manga', price: 27.99, favorite: false } },
        { product78: { id: 78, name: 'Given Manga V5', description: 'Description for Accessory 2', image: Product78, category: 'Manga', price: 7.99, favorite: false } },
        { product79: { id: 79, name: 'Food Wars! V9', description: 'Description for Accessory 2', image: Product79, category: 'Manga', price: 7.99, favorite: false } },
        { product80: { id: 80, name: 'World Trigger V', description: 'Description for Accessory 2', image: Product80, category: 'Manga', price: 7.99, favorite: false } }, */
       
      
      ];

      setProductsData(productsData);
      setFilteredProducts(productsData);
    }, []);
  
    const renderProducts = () => {
      if (filteredProducts.length === 0) {
        return <p className="not-found-message">Product not found</p>;
      }
  
      return filteredProducts.map(productObj => {
        const product = Object.values(productObj)[0];
        return (
          <div key={product.id} className="col-md-3 col-6 mb-4">
            <div className="card formbg">
              <img src={product.image} className="card border-0" alt={product.name} style={{ height: '40vh', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#9500ff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.name}</h5>
                <p className="card-text fs-5">${product.price.toFixed(2)}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary storebutton mt-2">Add to Cart</button>
                  
                  <IconContext.Provider value={{ color: '#C21292', size: '24px' }}>
                  {product.favorite ? (
                    
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
        );
      });
    };
  
    const toggleFavorite = (productId) => {
      setFilteredProducts(prevProducts => {
        return prevProducts.map(productObj => {
          const product = Object.values(productObj)[0];
          if (product.id === productId) {
            return { ...productObj, [Object.keys(productObj)[0]]: { ...product, favorite: !product.favorite } };
          }
          return productObj;
        });
      });
    };
  
    const handleSearch = (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filtered = productsData.filter(productObj => Object.values(productObj)[0].name.toLowerCase().includes(searchTerm));
      setFilteredProducts(filtered);
    };
  
    const filterProducts = (category) => {
      if (category === 'All') {
        setFilteredProducts(productsData);
      } else {
        const filtered = productsData.filter(productObj => Object.values(productObj)[0].category === category);
        setFilteredProducts(filtered);
      }
    };
  
    return (
      <div className="container-fluid g-0">
        {/* Sección de búsqueda */}
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
  
        {/* Contenedor de categorías y productos */}
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
  
            {/* Contenedor de productos */}
            <div className="col-md-10">
              <div className="row" id="products-container">
                {renderProducts()}
              </div>
            </div>
          </div>
  
          <hr style={{ border: 'solid 3px' }} />
        </div>
      </div>
    );
  };

export { StoreProducts };
