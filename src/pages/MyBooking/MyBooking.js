import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
// import Footer from '../Shared/Footer/Footer';
// import Navigation from '../Shared/Navigation/Navigation';
import './MyBooking.css'
const MyOrder = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([])
    const [deleteOrder, setDeleteOrder] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        })
    },[user?.email, deleteOrder])

    const handleOrderDelete = id =>{
        const url =`http://localhost:5000/deletedOrder/${id}`
        fetch(url, {
            method : 'DELETE',
            headers : {'content-type' : 'application/json'}
        })
        .then( res => res.json())
        .then(data => {
            if(data){
                window.confirm("Are you sure to Cancel this services?");
                setDeleteOrder(data)
            }
        })
    }

    return (
        <div>
            
            <h1 className='text-center'>My Booking {orders.length}</h1>
            <div className="row container">
            {
                orders.map(order => 
                <div style={{backgroundColor:'#fef3f4', padding:'10px', margin:'10px'}} className='col-md-3 col-6'>
                    <div>
                        <h5>{order.email}</h5>
                        <p>{order.bikename}</p>
                        <button onClick={() => handleOrderDelete(order._id)} className="btn btn-design" type="button">Cancel Order</button>
                    </div>
                </div> )
            }
            </div>
            
        </div>
    );
};

export default MyOrder;