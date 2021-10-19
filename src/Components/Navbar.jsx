import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { BsTelephone} from "react-icons/bs";



const Navbar = () => {
    return (
        <div className="header">
           <nav className="d-flex align-items-center ms-5 flex-wrap">
            <Link to="/login">
            <Button className="ms-5 rounded-pill p-3 px-5 mt-3" variant="primary">Login Or Rrgister</Button>{' '}
            </Link>
            <div className="navbar-link mt-3 d-flex flex-wrap">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            {/* <NavLink to="/blogs">blogs</NavLink>            */}
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/apoinment">Apoinment</NavLink>
            </div>
            {/* <Button className="ms-3 mt-3  rounded-pill p-3 px-5" variant="outline-primary"> <BsTelephone className="me-2" /> +880 123 456</Button> */}
            <div className="nav-name text-light mt-3">
                <h4>Logged In :</h4>
            </div>
            </nav>
            <hr />
        </div>
    )
}

export default Navbar
