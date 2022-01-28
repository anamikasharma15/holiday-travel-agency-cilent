import React from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'

//  var swiper = new Swiper(".brand-slider", {
//         spaceBetween: 20,
//         loop:true,
//         autoplay: {
//             delay: 2500,
//             disableOnInteraction: false,
//         },
//         breakpoints: {
//             450: {
//               slidesPerView: 2,
//             },
//             768: {
//               slidesPerView: 3,
//             },
//             991: {
//               slidesPerView: 4,
//             },
//             1200: {
//               slidesPerView: 5,
//             },
//           },
    


const Bands = () => {
    // var swiper = new Swiper(".brand-slider", {
    //     spaceBetween: 20,
    //     loop:true,
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    //     breakpoints: {
    //         450: {
    //           slidesPerView: 2,
    //         },
    //         768: {
    //           slidesPerView: 3,
    //         },
    //         991: {
    //           slidesPerView: 4,
    //         },
    //         1200: {
    //           slidesPerView: 5,
    //         },
    //       },
    

    return (
                <div>
                    <h1 className='text-center'>Our Popular Bands</h1>
            <section className="brand-container">

            <div className="swiper-container brand-slider">
    <div className="swiper-wrapper">
        <div className="swiper-slide">
            {/* <img src={img1} alt=""> */}
            <img
                        className=" text-center"
                        src={img1}
                        alt=""
                    /> 
            </div>
        <div class="swiper-slide">
        <img
                        className="d-block"
                        src={img2}
                        alt=""
                    />
                    </div> 
        <div class="swiper-slide">
        <img
                        className="d-block"
                        src={img3}
                        alt=""
                    /> 

            </div>
        <div class="swiper-slide">
        <img
                        className="d-block"
                        src={img4}
                        alt=""
                    /> 

            </div>
        <div class="swiper-slide">
        <img
                        className="d-block"
                        src={img5}
                        alt=""
                    /> 

            </div>
        <div class="swiper-slide">
            <img
                        className="d-block"
                        src={img6}
                        alt=""
                    /> 

            </div>

    </div>
</div>

</section>
            
        </div>
    );
};

export default Bands;
{/* <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    /> */}