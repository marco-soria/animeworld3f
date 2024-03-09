import React from 'react';
import './StoreAnimation.css'; // Importa los estilos CSS

import Slider1 from '../../assets/store/slider1bleach.png';
import Slider2 from '../../assets/store/slider2fairytail.png';
import Slider3 from '../../assets/store/slider3fma.png';
import Slider4 from '../../assets/store/slider4jojo.png';
import Slider5 from '../../assets/store/slider5hxh.png';
import Slider6 from '../../assets/store/slider6op.png';

function StoreAnimation() {
  return (
    <div className="container-fluid storecontent-slider mt-5">
      <div className="row storecard-slider">
        <div className="col storeslide">
          <img src={Slider1} style={{ height: '180px' }} alt="" />
          <img src={Slider2} alt="" />
          <img src={Slider3} style={{ height: '180px' }} alt="" />
          <img src={Slider4} alt="" />
          <img src={Slider5} alt="" />
          <img src={Slider6} alt="" />
          <img src={Slider1} style={{ height: '180px' }} alt="" />
          <img src={Slider2} alt="" />
          <img src={Slider3} style={{ height: '180px' }} alt="" />
          <img src={Slider4} alt="" />
          <img src={Slider5} alt="" />
          <img src={Slider6} alt="" />
          <img src={Slider1} style={{ height: '180px' }} alt="" />
          <img src={Slider2} alt="" />
          <img src={Slider3} style={{ height: '180px' }} alt="" />
          <img src={Slider4} alt="" />
          <img src={Slider5} alt="" />
          <img src={Slider6} alt="" />
          <img src={Slider1} style={{ height: '180px' }} alt="" />
          <img src={Slider2} alt="" />
          <img src={Slider3} style={{ height: '180px' }} alt="" />
          <img src={Slider4} alt="" />
          <img src={Slider5} alt="" />
          <img src={Slider6} alt="" />
          
        </div>
      </div>
    </div>
  );
}

export { StoreAnimation };
