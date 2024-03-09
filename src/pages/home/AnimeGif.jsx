import React from 'react'

import Sakura from '../../assets/home/sakura.gif'
import Rikka from '../../assets/home/rikka.gif'
import Chika from '../../assets/home/chika.gif'

const AnimeGif = () => {
  return (
    <div className="container mt-1 g-0">
    <div className="row d-flex justify-content-center">
        <div className="col-md-4 mb-3">
            <div className="card border-0"> 
                <img src={ Sakura } className="card w-100" style={{height: '70vh',  objectFit: 'cover', border: 'solid 1px #9500ff'}} alt=""/>
            </div>
        </div>
        <div className="col-md-4 mb-3">
            <div className="card border-0">
                <img src={ Rikka } className="card w-100" style={{height: '70vh',  objectFit: 'cover', border: 'solid 1px #9500ff'}} alt=""/>
            </div>
        </div>
        <div className="col-md-4 mb-2">
            <div className="card border-0">
                <img src={ Chika } className="card w-100" style={{height: '70vh',  objectFit: 'cover', border: 'solid 1px #9500ff'}} alt=""/>
            </div>
        </div>
    </div>
</div>
  )
}

export { AnimeGif }
