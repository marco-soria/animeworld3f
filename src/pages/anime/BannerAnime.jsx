import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './BannerAnime.css';
import BannerA from '../../assets/anime/jujutsukaisen.jpg';



const BannerAnime = () => {
  return (
    <div className="container-fluid mb-4" style={{marginTop: '80px'}}>
        <div className="row">
            <div className="col">
                <img src={ BannerA } className="card border-0 d-block w-100" style={{maxHeight: '80vh', objectFit: 'cover'}} alt=""/>
            </div>
        </div>
    </div>
  )
}

export { BannerAnime }
