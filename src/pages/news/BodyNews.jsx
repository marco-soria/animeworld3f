import React from 'react';
import './BodyNews.css';

import News1 from '../../assets/news/newsbody1.webp';
import News2 from '../../assets/news/newsbody2.webp';
import News3 from '../../assets/news/newsbody3.webp';
import News4 from '../../assets/news/newsbody4.webp';

function BodyNews() {
  return (
    <div className="container g-0">
    <div className="row justify-content-start">
      <div className="col-12 col-md-9">
        <div className="row flex-column flex-md-row">
          <div className="col-12 col-md-auto mb-3 mb-md-0">
            <img className="me-3 me-md-0" src={News1} style={{ maxHeight: '30vh', width: '100%', objectFit: 'cover' }} alt="" />
          </div>
          <div className="col-12 col-md">
            <button className="btn btn-secondary newsbutton mb-3">Butareba</button>
            <a className="firstsecondarylink" href=""><h4 className="mb-3">Butareba: The Story of a Man Turned Into a Pig Anime's 12th Episode Airs on February 5</h4></a>
            <h6 className="mb-3 newsh6">Final episode was delayed due to programming issues</h6>
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
                    <img className="me-3 me-md-0" src={News2} style={{ maxHeight: '30vh', width: '100%', objectFit: 'cover' }} alt=""/>
                </div>
                <div className="col-12 col-md">
                    <button className="btn btn-secondary newsbutton mb-3">Mato Seihei no Slave</button>
                    <a className="firstsecondarylink" href="" ><h4 className="mb-3">Chained Soldier - SERIES PREMIERE</h4></a>
                    <h6 className="mb-3 newsh6">An amazing start</h6>
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
                    <img className="me-3 me-md-0" src={News3} style={{ maxHeight: '30vh', width: '100%', objectFit: 'cover' }} alt=""/>
                </div>
                <div className="col-12 col-md">
                    <button className="btn btn-secondary newsbutton mb-3">Chiyou Mahou</button>
                    <a className="firstsecondarylink" href="" ><h4 className="mb-3">The Wrong Way to Use Healing Magic Anime's English Dub Reveals Cast</h4></a>
                    <h6 className="mb-3 newsh6">Staff Revealed</h6>
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
                    <img className="me-3 me-md-0" src={News4} style={{ maxHeight: '30vh', width: '100%', objectFit: 'cover' }} alt=""/>
                </div>
                <div className="col-12 col-md">
                    <button className="btn btn-secondary newsbutton mb-3">Kimitachi</button>
                    <a className="firstsecondarylink" href="" ><h4 className="mb-3">The Boy and the Heron Film Receives Nomination for BAFTA Award</h4></a>
                    <h6 className="mb-3 newsh6">Film nominated in Animated Film category</h6>
                    <a className="secondsecondarylink" href="">Marco Antonio</a>
                </div>
                <div className="col-12">
                    <hr/>
                </div>
            </div>
        </div>
      
      <div className="col-12 col-md-9 d-flex justify-content-center mb-3">
        <button className="btn btn-secondary newsbutton">Load More Stories</button>
      </div>
    </div>

    </div>
  );
}

export { BodyNews };
