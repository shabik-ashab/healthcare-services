import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className="contact text-light">
            <header className="text-center text-light">
                <p>Contact</p>
                <h1><span className="text-primary">We are Always </span>Ready To Help</h1>
            </header>
            <div className="d-flex flex-wrap contact-container container mt-5 text-dark">
              <div className="mt-5 ms-5 me-5">
                <h1>Brooklyn,New York</h1>
                <p>849 Diamond Str,07th floor,Ny 10012,New York,</p>
                <p>United States America</p>
                <p>Email: info@healthcare.com</p>
                <Link to="apoinment">
                <button type="button" className="btn btn-outline-dark text-primary mt-2 p-2 px-3">Book Apoinment</button>
                </Link>
              </div>
              <div className="mt-5 mb-4 ms-5">
                <div className="call-work">
                <p>Call Directly</p>
                <h1>+880 123 456</h1>
                </div>
                <div className="call-work mt-4">
                  <p>Brand Officers:</p>
                  <p>Allenton Pa | Allanta, GA | Chicago IL | Dallas TX,</p>
                  <p>Edison, NJ | Houston, TX</p>
                </div>
                <div className="call-work mt-4">
                  <p>Work Hours:</p>
                  <p>Mon - Sat: 8.00 - 17.00, Sunday Closed</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Contact
