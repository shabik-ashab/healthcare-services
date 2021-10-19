import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import img from '../images/banner-service.jpg';
import doctorImg from '../images/doctor-02.png';
import sheduleImg from '../images/shedule.png';

const ServiceDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('/serviceData.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);
    const newProduct = product.filter(x => x.id === parseInt(id))
    const serviceItem = newProduct[0];
    
    
    return (
        <div className="text-light service-details">
            <header className="text-center text-light mt-4">
                <p>Services Details</p>
                <h1 className="text-primary">{serviceItem?.name}</h1>
            </header>
           <div className="d-flex flex-wrap ">
           <div className="mt-5 ms-5 w-50">
              <h2 className="mb-4 ms-5">What we offer</h2>
              {
                serviceItem?.description.map(service => 
                    <p className="ms-5">{service}</p>
                    )
              }  
              <div className="">
                  <h3 className="ms-5">
                  We are here to help when you need us
                  </h3>
                  <p className="ms-5 mt-3">
                  By helping with daily activities, our caregivers enable clients to maintain their normal daily routines. Hourly home care allows clients to use our caregivers on an hourly or as-needed basis. Surrounded by their possessions, pets, and a familiar environment, our clients receive the support they need to enjoy their regular activities and continue living well at home. 
                  </p>
                  </div> 
            </div>
            <div className="mt-5 ms-5">
               <Link to="/contact">
               <img className="ms-5" src={img} alt="..." />
               </Link>
            </div>
           </div>
           <div className="d-flex flex-wrap mt-5 container">
               <div className="w-50 ">
                    <img className="h-75 ms-5" src={doctorImg} alt="..." />
               </div>
               <div className="ms-5">
               <Link to="/apoinment">
               <img className="shedule-img" src={sheduleImg} alt="..." />
               </Link>
               </div>
           </div>
        </div>
    )
}

export default ServiceDetails
