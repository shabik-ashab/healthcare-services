import React from 'react'
import useAuth from '../hooks/useAuth';

const Apoinment = () => {
    const {user} = useAuth();
    return (
        <div  className="apoinment text-light"> 
             <header className="text-center text-light">
                <p>We are always ready to help you</p>
                <h1><span className="text-primary">Book An </span>Appoinment</h1>
            </header>
            <div className="apoinment-input text-center">
            <div className="input-name mt-5">
            <label className="label me-2" for="name">Name:</label>
            <input className="text-light" type="name" id="name" name="name" value={user?.displayName} />
            </div>
            <div className="input-email mt-4">
            <label className="label me-2" for="email">Email:</label>
            <input className="text-light" type="email" id="email" value={user?.email} />
            </div>
            <div  className="input-date mt-4">
            <label className="label me-2" for="birthday">Date:</label>
            <input className="text-light" type="date" id="birthday" name="birthday" />
            </div>
            <div>
            <button type="button" className="btn btn-outline-light text-primary mt-5 p-3 px-5">Book Apoinment</button>
            </div>
            </div>
        </div>
    )
}

export default Apoinment
