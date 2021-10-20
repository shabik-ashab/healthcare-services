import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth } from 'firebase/auth';
import useFirebase from '../hooks/useFirebase';


const Register = () => {
     const {createUserWithEmail} = useFirebase(); 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }
      const handleRegistration = e => {
        e.preventDefault();
        // console.log(name,email, password);
        createUserWithEmail(name,email,password);
      }
    return (
        <div className="login-form text-light text-center ">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit={handleRegistration}>
                <input type="name" onBlur={handleNameChange} name="" id="" placeholder="Your Name" />
                <br />
                    <input type="email" onBlur={handleEmailChange} name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" onBlur={handlePasswordChange} name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    )
}

export default Register
