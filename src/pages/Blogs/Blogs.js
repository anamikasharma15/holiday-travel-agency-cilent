import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])
    const highlighted = bikes.slice(0,8);
    return (
        <div>
            <div className='container my-5'>
            <h1 className='text-center my-5'>LATEST FROM BLOG</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    highlighted.map(bike => <div key={bike._id} className="col">
                    <div className="card h-100">
                    <img src={bike.img}className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{bike.name}</h5>
                        <p className="card-text"> <span></span> {bike.price}</p>
                    </div>
                    <Link to={`/singleServices/${bike._id}`}><div className="d-grid gap-2" >
                    {" "}
                        <button className="btn btn-outline-danger" style={{textDecoration:'none'}} type="button">Details</button>
                        </div>
                    </Link>
                    </div>
                </div>)
                }
            </div>
        </div>
        </div>
    );
};



export default Products;