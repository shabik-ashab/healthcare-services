import React, { useState,useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import googleLogo from '../images/google-icon.png'



const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    
    const {signInWithEmail,user,signInUsingGoogle} = useAuth();
    const [userdata, setUserData] = useState({});
     const handleChange = (e) => {
        if (e.target.name === 'email') {
          const newData = { ...userdata, email: e.target.value };
          setUserData(newData);
        }
        if (e.target.name === 'pass') {
          const newData = { ...userdata, pass: e.target.value };
          setUserData(newData);
        }
        if (e.target.name === 'name') {
          const newData = { ...userdata, name: e.target.value };
          setUserData(newData);
        }
      };
      const handlelogin = () => {
        signInWithEmail(userdata.email, userdata.pass)
        history.push(redirect_uri)
      };
      
  
  
      const handleGoogleLogin = () => {
          signInUsingGoogle()
              .then(result => {
                  history.push(redirect_uri);
              })
      }

    
    return (
        <div className='p-5 login-form text-light text-center'>
            <header className="text-center text-light">
                <p>Login</p>
                <h1><span className="text-primary">Login To </span>Join</h1>
            </header>
          <div className="login-input">
            <div className="mt-5"> 
              <label className="label me-2" for="email">Email:</label>
              <input
                className="login-email"
                name='email'
                onBlur={handleChange}
                type='email'
                placeholder='Email'
          />
         </div>
          <div className="mt-4">
          <label className="label me-2" for="name">Name:</label>
          <input
            name='pass'
            onBlur={handleChange}
            type='password'
            placeholder='Password'
          />
          </div>
          <br />
          <br />
          <button className='btn btn-outline-light text-success mt-2 p-2 px-4' onClick={handlelogin}>
            log in
          </button>
          <br />
          <br />
          <div className="popup "> 
          <span className="me-3">Login with google:</span>
            <img
              className='googleLogo p-1'
              style={{ width: '50px' }}
              src={googleLogo}
              onClick={handleGoogleLogin}
              alt=''
            />
            {/* <img
              style={{ width: '40px' }}
              src={facebookLogo}
              onClick={facebookSignIn}
              alt=''
            /> */}
          </div>
            <div className="mt-3">
              New User? <Link to="/register">Create Account</Link>
            </div>
        </div>
          </div>
    )
}

export default Login
