import React from 'react';
import Bands from '../Bands/Bands';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import DisplayReview from '../DisplayReview/DisplayReview';
import Contact from '../Contact/Contact';
// import VideoBanner from '../videoBanner/videoBanner';
import Blogs from '../Blogs/Blogs';
// import FAQ from '../FAQ/FAQ';
// import Map from "../Map/Map";
// import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br />
             <AboutUs></AboutUs>
         <br /> 

            <Bands></Bands>
            <br />
         {/* // <VideoBanner></VideoBanner>
             
            // <br /> */}
            
         <Blogs></Blogs>
            <br /> 
            {/* //  <FAQ></FAQ>
            // <br />  */}
        <DisplayReview></DisplayReview>
            <br />  
            <Contact></Contact>
            {/* <br/> */}
            {/* // <Map></Map>  */}
        </div>
    );
};

export default Home;