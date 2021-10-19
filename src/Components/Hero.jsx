import React from 'react';
import img from '../images/hero.png'

const Hero = () => {
    return (
        <div className="hero container">
             <div className="home row">
            <div className="hero-txt text-light col-lg-6 col-md-12 mt-5">
                <h1 className="mt-5 p-4">Stay Home <br />
                 Stay Safe</h1>
                 <p className="p-4">
                     <small>WE are here with our best services.If you feel sick come to us we got the best services in the town.</small>
                 </p>
            </div>
            <div className="hero-img col-lg-6 col-md-12 mt-5">
                <img src={img} alt="" className="img-fluid mt-5 ms-2"/>
            </div>
        </div>
        </div>
    )
}

export default Hero
