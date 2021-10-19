import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { BsTelephone} from "react-icons/bs";
import useFirebase from '../hooks/useFirebase';
import logOut  from '../hooks/useFirebase';



const Navbar = () => {
    const {user,logOut} = useFirebase();
    return (
        <div className="header">
           <nav className="d-flex align-items-center ms-5 flex-wrap">
            {
                user.email?
                 <Button onClick={logOut} className="ms-5 rounded-pill p-3 px-5 mt-3" variant="primary">Logout</Button>
                 :
                 <Link to="/login">
                 <Button className="ms-5 rounded-pill p-3 px-5 mt-3" variant="primary">Login Or Rrgister</Button>
                  </Link>
            
            }
            <div className="navbar-link mt-3 d-flex flex-wrap">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            {/* <NavLink to="/blogs">blogs</NavLink>            */}
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/apoinment">Apoinment</NavLink>
            </div>
            <div className="nav-name text-light mt-3">
                  <h4>Logged In :</h4>
                  </div>
           
            </nav>
            <hr />
        </div>
    )
}

export default Navbar
