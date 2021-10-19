import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';


const Login = () => {
    const {user,signInUsingGoogle} = useAuth();
    return (
        <div className="login-form text-light text-center">
        <div>
            <h2>Login</h2>
            <form>
                <input type="email" name="" id="" placeholder="Your Email" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>new to ema-john website? <Link to="/register">Create Account</Link></p>
            <div>-------or----------</div>
            <button
                className="btn-regular"
                onClick={signInUsingGoogle }
            >Google Sign In</button>
        </div>
    </div>
    )
}

export default Login
