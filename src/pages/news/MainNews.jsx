import React from 'react';
import './MainNews.css'; // Importa los estilos CSS

import NewsImage1 from '../../assets/news/mainnews1.webp';
import NewsImage2 from '../../assets/news/newsmain2.jpeg';
import NewsImage3 from '../../assets/news/newsmain3.png';

function MainNews() {
  return (
    <div className="container g-0" style={{ marginTop: '80px' }}>
      <div className="row g-1">
        <h2>Latest News</h2>
        <hr className="mainhr" />
      </div>
      <div className="row mb-3 g-1" style={{ border: 'solid 1px #9500ff' }}>
        {/* Primer Componente */}
        <div className="col">
          <div className="card border-0 m-1 position-relative">
            <img src={NewsImage1} className="card-img" alt="Jujutsu Kaisen" />
            <div className="position-absolute bottom-0 start-0 p-3">
              <button className="btn btn-secondary newsbutton mt-3 mb-3" >Kusuriya no Hitorigoto</button>
              <a href="#" style={{ textDecoration: 'none' }}>
                <h4 className="mb-4" style={{ color: 'white', textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>Kusuriya no Hitorigoto Adds 7 Million in Circulation Since Anime Premiered</h4>
              </a>
              <a href="#" className="mt-5" style={{ textDecoration: 'none' }}>
                <h6 style={{ color: 'white', textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>Marco Antonio</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3 g-0" style={{ border: 'solid 1px #9500ff' }}>
        {/* Segundo Componente */}
        <div className="col-md-6">
          {/* Primera Imagen del Segundo Componente */}
          <div className="card border-0 m-1 position-relative">
            <img src={NewsImage2} className="card-img" alt="Momo 1" />
            <div className="position-absolute bottom-0 start-0 p-3">
              <button className="btn btn-secondary newsbutton mt-3 mb-3">Maboroshi</button>
              <a href="#" style={{ textDecoration: 'none' }}>
                <h4 className="mb-3" style={{ color: 'white', textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>Maboroshi, The Boy and the Heron, Godzilla Minus One Win at Mainichi Film Awards</h4>
              </a>
              <a href="#" className="mb-3" style={{ textDecoration: 'none' }}>
                <h6 style={{ color: 'white', textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>Marco Antonio</h6>
              </a>
            </div>
          </div>
        </div>
        {/* Segunda Imagen del Segundo Componente */}
        <div className="col-md-6">
          <div className="card border-0 m-1 position-relative">
            <img src={NewsImage3} className="card-img" alt="Momo 2" />
            <div className="position-absolute bottom-0 start-0 p-3">
              <button className="btn btn-secondary newsbutton mt-3 mb-3">Kekkon Yubiwa Monogatari</button>
              <a href="#" style={{ textDecoration: 'none' }}>
                <h4 className="mb-3" style={{ color: 'white', textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>Tales of Wedding Rings Anime's English Dub Reveals Cast</h4>
              </a>
              <a href="#"  style={{ textDecoration: 'none' }}>
                <h6 style={{ color: 'white', textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF' }}>Marco Antonio</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MainNews };
