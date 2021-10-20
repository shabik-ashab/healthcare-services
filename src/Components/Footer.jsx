import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/logo.png';

const Footer = () => {
    return (
        <div className="footer text-light pb-3">
            <hr />
           <div className="d-flex ">
           <div className="p-3 ms-5 me-4">
                <img src={img} />
                <div className="mt-5 footer-txt">
                <p>You will get Your best exprience here,</p>
                <p>We have professional doctors and nurser</p>
                <p>here To help you.</p>
                </div>
           </div>
           <div className="ms-3 mt-4">
               <h4>Quick Links</h4>
              <div className="footer-link mt-4">
              <Link to="/home">
               <p>Home</p>
               </Link>
              <Link to="/services">
               <p>Services</p>
               </Link>
               <Link to="/contact">
               <p>Contact</p>
               </Link>
               <Link to="/apoinment">
               <p>Apoinment</p>
               </Link>
              </div>
           </div>
           <div className="ms-5 mt-4">
              
               <p>Call us Now if you are in a medical emergency </p>
               <p>we will reply swiftly and provide you with </p>
               <p>a medical aid</p>
               <h1 className="text-primary ms-4">+880 123 456</h1>
           </div>
           <div className="ms-5 mt-4">
               <h4>NEWSSETTLER</h4>
               <p>Subscribe to get latest updates and offers</p>
               <input className="w-75" placeholder="Enter Yoyr Email"/>
               <button className='btn btn-outline-light text-primary mt-3 p-2 px-4' >Submit</button>
           </div>
           </div>
        </div>
    )
}

export default Footer
