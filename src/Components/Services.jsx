import React from 'react';
import { useEffect, useContext } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';



const Services = () => {
    
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    

    return (
        <div className="services mt-5 mb-5">
             <header className="text-center text-light">
                <p>Our Services</p>
                <h1><span className="text-primary">Best Solution </span>For Your Health</h1>
            </header>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5 ms-3 me-3">
                {/* using map to send data and creating cards in ui  */}
                {
                    services.map(service => 
                        <div className="col-lg-4 g-4">
        <div class="card h-100 my-card">
             <img src={service.img} class="card-img-top h-50 p-3 w-50" alt="..."/>
         <div className="card-body">
            <h4>{service.name}</h4>
            <p>
                <small>{service.description}</small>
             </p>
            {/* <p>Starting Price: {Price}$</p> */}
            <Link to={`/services/${service.id}`}>
            <button type="button" class="btn btn-outline-light text-primary">Learn More</button>
            </Link>
        </div>
   </div>
   </div>
                        )
                }
            </div>
        </div>
    )
}

export default Services
