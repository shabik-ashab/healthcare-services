import React, { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Login = () => {
    


    const {user,signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    
    return (
        <div className="login-form text-light text-center">
       
        <header className="text-center text-light">
                <p>Login</p>
                <h1><span className="text-primary">Login to </span>acsess</h1>
            </header>
           <div className="mt-5">
           <form>     
                <input type="email" name="" id="" placeholder="Your Email" required/>
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>new to healthcare? <Link to="/register">Create Account</Link></p>
            <div>-------or----------</div>
            <button
                className="btn-regular"
                onClick={handleGoogleLogin}
            >Google Sign In</button>
           </div>     
    </div>
    )
}

export default Login
