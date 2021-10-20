import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { BsTelephone} from "react-icons/bs";
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';




const Navbar = () => {
    const {user,logOut} = useAuth();
    const {userName} = useFirebase();
    // console.log(userName);
    return (
        <div className="header">
           <nav className="d-flex align-items-center ms-5 flex-wrap">
            {
                user.email?
                 <Button onClick={logOut} className="ms-5 me-5 rounded-pill p-3 px-5 mt-3" variant="primary">Logout</Button>
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
            {
                user.displayName?
                <Button className="ms-5 mt-3 rounded-pill p-3 px-5" variant="outline-primary">{user.displayName}</Button>
                  :
                  <Button className="ms-5 mt-3 rounded-pill p-3 px-5" variant="outline-primary"><BsTelephone /> +880 123 456</Button>
            }
            </nav>
            <hr />
        </div>
    )
}

export default Navbar
