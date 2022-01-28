import React from 'react';

const AboutUs = () => {
   return (
      <div>
          <h2 className="text-center my-5">About Us</h2>
         <h1 className="heading py-2 text-secondary ps-4 text-center">A Best Place
    to Enjoy </h1>
         <div className='row row-cols-lg-2 row-cols-1 m-5'>
            <div className="col-lg-7 col-sm-12">
               <p className="fs-5">Staying abreast about potential travel destinations is one of the most basic forms of information-hunting that globe-trotters and home-bodies alike endorse when planning to hit the road or board a plane. Different regions, countries, and even distinct areas in home communities provide escapism from the routine of everyday living and help broaden perspectives with local culture and unique natural environments..</p>
               <h3>Our Services</h3>
               <ul>
                  <li>Tour Guide</li>
                  <li>Expart Tour guider  </li>
                  <li>Ticket Booking</li>
                  <li>Luxury Rooms</li>
                  <li>Couple & Single Room</li>
               </ul>
            </div>
            <div className="col-lg-5 col-sm-12">
               <img className="img-fluid" src={'https://image.cnbcfm.com/api/v1/image/105352819-1532545584687caaettyimages-867380202.jpg?v=1532616097'} alt="" />
            </div>
         </div>
      </div>
   );
};

export default AboutUs;