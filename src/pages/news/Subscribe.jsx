import React from 'react'
import './Subscribe.css'

import { FaEnvelope } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Subscribe = () => {
  return (
    <div className="container-fluid mt-3 mb-2">
        <div className="row justify-content-center align-items-center">
           
    
            <div className="col-md-6 p-0" style={{height: '100%', width: '100%'}}>
                <div className="card border-0 p-5 d-flex flex-column justify-content-center align-items-center" id="signupCard" style={{backgroundColor: '#E9F6FF', height: '100%', width: '100%', objectFit: 'cover'}}>
                    <h3 className="text-center mb-3"><strong>Suscribe to our Newsletter</strong></h3>
                    <h5 className="text-center mb-3">Get the latest anime news</h5>
                    <div style={{maxWidth: '500px'}}> 
                        <div className="input-group mb-3 d-flex justify-content-center">
                        <span className="input-group-text"><FaEnvelope/></span>
                            <input type="text" className="form-control" style={{width:'40vh'}} placeholder="Email" aria-label="Email" aria-describedby="basic-addon2"/>
                        </div>
                    </div> 
                    <button type="button" className="btn btn-secondary newsbutton">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export { Subscribe }
