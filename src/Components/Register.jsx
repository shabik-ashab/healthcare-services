import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import UseFirebase from '../hooks/useFirebase';

// import './Login.css';
// import googleLogo from '../../Images/logo/google-icon.png';
// import facebookLogo from '../../Images/logo/facebook.png';

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/';

  const {
    createUserWithEmail,
    googleSignIn,
    facebookSignIn,
    setName,
    user,
  } = UseFirebase();
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
      setName(newData);
    }
  };
  const handleSubmit = () => {
    console.log(userdata);
    createUserWithEmail(userdata.name, userdata.email, userdata.pass);
    history.push(redirect_uri)
  };
  
  // const history = useHistory();
  // useEffect(() => {
  //   if (user.email) {
  //     history.push('/');
  //   }
  // }, [user]);

  return (
    <>
      <div className='login-form  text-center text-light'>
        <header className="text-center text-light">
                <p>Signup</p>
                <h1><span className="text-primary">Please Register </span>To Join</h1>
            </header>
         <div className="login-input">
         <div className="mt-5">
         <label className="label me-2" for="name">Name:</label>
         <input
            name='name'
            onBlur={handleChange}
            type='text'
            placeholder='Name'
            required
          />
          
         </div>
         <div className="mt-4">
         <label className="label me-2" for="email">Email:</label>
         <input
            name='email'
            onBlur={handleChange}
            type='email'
            placeholder='Email'
            required
          />
          
         </div>
          <div className="mt-4">
          <label className="label me-2" for="pass">Password:</label>
          <input
            name='pass'
            onBlur={handleChange}
            type='password'
            placeholder='Password 6 characters'
            required
          />
          
          </div>
          <button className='btn btn-outline-light text-success mt-2 p-2 px-4 mt-4' onClick={handleSubmit}>
            register
          </button>
        </div> 
      </div>
    </>
  );
};

export default Login;
