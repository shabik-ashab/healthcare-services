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
          <h3 className='mb-5'>log in</h3>
          <input
            name='email'
            onBlur={handleChange}
            type='email'
            placeholder='Email'
          />
          <br />
          <br />
          <input
            name='pass'
            onBlur={handleChange}
            type='password'
            placeholder='Password'
          />
          <br />
          <br />
          <button className='btn btn-success' onClick={handlelogin}>
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
    )
}

export default Login
