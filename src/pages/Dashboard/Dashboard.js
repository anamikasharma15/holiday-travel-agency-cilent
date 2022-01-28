import React, { useEffect, useState } from 'react';
import './Dashboard.css'
// import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import MyBooking from '../MyBooking/MyBooking';
import Review from '../Review/Review';
import AddBlog from '../AddBlog/AddBlog';
// import ManageServices from '../ManageServices/ManageServices';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageBooking from '../ManageBooking/ManageBooking';
// import Payment from '../Payment/Payment';
import DashboardDefault from '../DashboardDefault/DashboardDefault';
// import AddServices from '../addServices/addServices';


const Dashboard = () => {
    let {path, url} = useRouteMatch()
    const{user} = useAuth()
    const[isAdmin, setIsAdmin] = useState(false)

    useEffect(() =>{
        fetch(`http://localhost:5000/checkAdmin/${user.email}`)
        .then(res=> res.json())
        .then(data => {
            if(data[0]?.role === 'admin'){
                setIsAdmin(true)
            }
            else{
                setIsAdmin(false)
            }
        })
    },[user?.email])
    console.log(isAdmin);

    return (
        <div>
            {/* <Header></Header> */}
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="dashboard-container p-4">
                            <h5>Dashboard</h5>
                            <Link to={`${url}`}><li className='dashboard-item mt-3'>Welcome to holiday travel agency </li></Link>
                            <Link to={`${url}/myBooking`}><li className='dashboard-item mt-3'>My Booking</li></Link>
                            <Link to={`${url}/addReview`}><li className='dashboard-item'>Add Review</li></Link>
                            <Link to={`${url}/payment`}><li className='dashboard-item'>Payment</li></Link>
                              <Link to={`${url}/makeAdmin`}><li className='dashboard-item'>Make Admin</li></Link>
                            <Link to={`${url}/addServices`}><li className='dashboard-item'>Add Blog</li></Link> 
                            <Link to={`${url}/manageBooking`}><li className='dashboard-item'>Manage Booking</li></Link>
                              <Link to={`${url}/manageServices`}><li className='dashboard-item'>Manage Services</li></Link>   

                            {isAdmin && <div><Link to={`${url}/addServices`}><li className='dashboard-item'>Add Services</li></Link>
                            {/* <Link to={`${url}/payment`}><li className='dashboard-item'>Payment</li></Link> */}
                            <Link to={`${url}/manageBooking`}><li className='dashboard-item'>Manage Booking</li></Link>
                            <Link to={`${url}/manageServices`}><li className='dashboard-item'>Manage Services</li></Link>
                            <Link to={`${url}/makeAdmin`}><li className='dashboard-item'>Make Admin</li></Link></div>}
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <DashboardDefault></DashboardDefault>
                            </Route>
                            <Route exact path={`${path}/addReview`}>
                                <Review></Review>
                            </Route>
                            <Route exact path={`${path}/myBooking`}>
                                <MyBooking></MyBooking>
                            </Route>
                            <Route exact path={`${path}/addServices`}>
                                <AddBlog></AddBlog>
                            </Route>
                            <Route exact path={`${path}/manageBooking`}>
                                <ManageBooking></ManageBooking>
                        
                            </Route>
                            {/* <Route exact path={`${path}/manageServices`}>
                                <ManageServices></ManageServices>
                            </Route> */}
                            <Route exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            {/* <Route exact path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route> */}
                            
                        </Switch>
                    </div>
                </div>
            </div>
            
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Dashboard;