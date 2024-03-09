import React from 'react';
import './BodyReviews.css';

import {FaStar} from 'react-icons/fa';
import { IconContext } from 'react-icons';

import Reviews1 from '../../assets/news/reviewsbody1.webp';
import Reviews2 from '../../assets/news/reviewsbody2.jpg';
import Reviews3 from '../../assets/news/reviewsbody3.jpeg';
import Reviews4 from '../../assets/news/reviewsbody4.webp';

function BodyReviews() {
  return (
    <div className="container mt-3">
      <div className="row">
        <h2>Reviews</h2>
        <hr className="mainhr" />
      </div>

      <div className="row justify-content-start">
        <div className="col-12 col-md-9">
          <div className="row flex-column flex-md-row">
            <div className="col-12 col-md-auto mb-3 mb-md-0">
              <img className="me-3 me-md-0" src={Reviews1} style={{ maxHeight: '30vh', width: '100%', objectFit: 'cover' }} alt="" />
            </div>
            <div className="col-12 col-md">
              <button className="btn btn-secondary newsbutton mb-3">Sousou no Frieren</button>
              <a className="firstsecondarylink" href=""><h4 className="mb-3"> A simple but moving fantasy adventure that favors contemplation over action – and is all the better for it.</h4></a>
              <div className="d-flex align-items-center mb-2">
                <h5 className="mb-3">Rating:&nbsp;</h5>
                <div className="mb-3">
                <IconContext.Provider value={{ color: '#C21292', size: '24px' }}>
                  <FaStar className='mb-1'/>
                  <FaStar className='mb-1'/>
                  <FaStar className='mb-1'/>
                  <FaStar className='mb-1'/>
                  <FaStar className='mb-1'/>
                </IconContext.Provider>
                </div>
              </div>
              <a className="secondsecondarylink" href="">Marco Antonio</a>
            </div>
            <div className="col-12">
              <hr />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-9">
                <div className="row flex-column flex-md-row">
                    <div className="col-12 col-md-auto mb-3 mb-md-0">
                        <img className="me-3 me-md-0" src={Reviews2} style={{ maxHeight: '30vh', width: '100%', objectFit: 'cover' }} alt=""/>
                    </div>
                    <div className="col-12 col-md">
                        <button className="btn btn-secondary newsbutton mb-3">Jujutsu Kaisen</button>
                        <a className="firstsecondarylink" href="" ><h4 className="mb-3">Jujutsu Kaisen is a beautiful series with outstanding art direction, which lets it stand heads and shoulders above the competition visually.</h4></a>
                        <div className="d-flex align-items-center mb-2">
                        <h5 className="mb-3">Rating:&nbsp;</h5>
                            <div className="mb-3" >
                            <IconContext.Provider value={{ color: '#C21292', size: '24px' }}>
                                <FaStar className='mb-1'/>
                                <FaStar className='mb-1'/>
                                <FaStar className='mb-1'/>
                                <FaStar className='mb-1'/>
                                <FaStar className='mb-1'/>
                            </IconContext.Provider>
                            </div>
                        </div>
                        <a className="secondsecondarylink" href="">Marco Antonio</a>
                    </div>
                    <div className="col-12">
                        <hr/>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-9">
                <div className="row flex-column flex-md-row">
                    <div className="col-12 col-md-auto mb-3 mb-md-0">
                        <img className="me-3 me-md-0" src={Reviews3} style={{ maxHeight: '30vh', width: '100%', objectFit: 'cover' }} alt=""/>
                    </div>
                    <div className="col-12 col-md">
                        <button className="btn btn-secondary newsbutton mb-3">Kingdom</button>
                        <a className="firstsecondarylink" href="" ><h4 className="mb-3">The fantastic history of the 7 Warring kingdoms era of the creation of China by conquering nations is what this anime is based off from.</h4></a>
                        <div className="d-flex align-items-center mb-2">
                        <h5 className="mb-3">Rating:&nbsp;</h5>
                            <div className="mb-3" >
                            <IconContext.Provider value={{ color: '#C21292', size: '24px' }}>
                                <FaStar className='mb-1'/>
                                <FaStar className='mb-1'/>
                                <FaStar className='mb-1'/>
                                <FaStar className='mb-1'/>
                                <FaStar className='mb-1'/>
                            </IconContext.Provider>
                            </div>
                        </div>
                        <a className="secondsecondarylink" href="">Marco Antonio</a>
                    </div>
                    <div className="col-12">
                        <hr/>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-9">
                <div className="row flex-column flex-md-row">
                    <div className="col-12 col-md-auto mb-3 mb-md-0">
                        <img className="me-3 me-md-0" src={Reviews4} style={{ maxHeight: '30vh', width: '100%', objectFit: 'cover' }} alt=""/>
                    </div>
                    <div className="col-12 col-md">
                        <button className="btn btn-secondary newsbutton mb-3">Solo Leveling</button>
                        <a className="firstsecondarylink" href="" ><h4 className="mb-3">An action-packed premiere that presents an intriguing world where fantasy gaming and reality collide.</h4></a>
                        <div className="d-flex align-items-center mb-2">
                        <h5 className="mb-3">Rating:&nbsp;</h5>
                            <div className="mb-3" >
                            <IconContext.Provider value={{ color: '#C21292', size: '24px' }}>
                                <FaStar className='mb-1'/>
                                <FaStar className='mb-1'/>
                                <FaStar className='mb-1'/>
                                <FaStar className='mb-1'/>
                                <FaStar className='mb-1'/>
                            </IconContext.Provider>
                            </div>
                        </div>
                        <a className="secondsecondarylink" href="">Marco Antonio</a>
                    </div>
                    <div className="col-12">
                        <hr/>
                    </div>
                </div>
            </div>

        <div className="col-12 col-md-9 d-flex justify-content-center mb-3">
          <button className="btn btn-secondary newsbutton">Load More Reviews</button>
        </div>
      </div>
    </div>
  );
}

export { BodyReviews };
