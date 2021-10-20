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
        <div className='signIn'>
          <h3 className='mb-5'>Sign Up</h3>
          <input
            name='name'
            onBlur={handleChange}
            type='text'
            placeholder='Name'
            required
          />
          <br />
          <br />
          <input
            name='email'
            onBlur={handleChange}
            type='email'
            placeholder='Email'
            required
          />
          <br />
          <br />
          <input
            name='pass'
            onBlur={handleChange}
            type='password'
            placeholder='Password 6 characters'
            required
          />
          <br />
          <br />
          <button className='btn btn-danger' onClick={handleSubmit}>
            register
          </button>
        </div>
        {/*  */}
        
      </div>
    </>
  );
};

export default Login;
