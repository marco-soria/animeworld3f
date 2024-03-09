import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import BannerS from '../../assets/store/banner5.png';



const BannerStore = () => {
  return (
    
          
        

    <div className="container-fluid mb-3" style={{marginTop: "80px"}}>
        <div className="row">
            <div className="col">
                <img src={ BannerS } className="card d-block w-100" style={{maxHeight: '40vh', objectFit: 'cover', border: 'solid 1px #9500ff'}} alt=""/>
            </div>
        </div>
    </div>
  )
}

export { BannerStore }