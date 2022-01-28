// import React from 'react';

// const Banner = () => {
//     return (
//         <div>
//             {/* <!-- home section starts  --> */}

// <section class="home" id="home">

//     <div class="content">
//         <h3>adventure is worthwhile</h3>
//         <p>dicover new places with us, adventure awaits</p>
//         <a href="#" class="btn">discover more</a>
//     </div>

//     <div class="controls">
//         <span class="vid-btn active" data-src="images/vid-1.mp4"></span>
//         <span class="vid-btn" data-src="images/vid-2.mp4"></span>
//         <span class="vid-btn" data-src="images/vid-3.mp4"></span>
//         <span class="vid-btn" data-src="images/vid-4.mp4"></span>
//         <span class="vid-btn" data-src="images/vid-5.mp4"></span>
//     </div>

//     <div class="video-container">
//         <video src="images/vid-1.mp4" id="video-slider" loop autoplay muted></video>
//     </div>

// </section>

// {/* <!-- home section ends --> */}
//         </div>
//     );
// };

// export default Banner;

         


import React from 'react';
import { Carousel,Button } from 'react-bootstrap';
// import banner1 from '../../../images/banner/banner1.jpg';
  import banner1 from '../images/vid-1.mp4';
import banner2 from '../images/vid-2.mp4';
 import banner3 from "../images/vid-3.mp4";
 import banner4 from '../images/vid-4.mp4';
 import banner5 from '../images/vid-5.mp4';

const Banner = () => {
    // const [loop, setLoop] = useState(true);
    return (
        <>
            <Carousel>
            
                <Carousel.Item>
                <video  className="d-block w-100"
                 autoPlay="autoplay" controls muted>
          <source
            src={banner1}
            type="video/mp4"
            
          />
        </video> 
                    {/* <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    /> */}
                     <Carousel.Caption>
                        <h2 className="lighter" style={{ animationDelay:'1s'}}>Holiday Travel Agency</h2>
                        <h1>Adventure is worthwhile</h1>
                        <p className="sub-title">dicover new places with us, adventure awaits!!.</p>
                        <Button className="text-dark bg-warning">Book Appointments</Button>
                    </Carousel.Caption> 
                </Carousel.Item>

                <Carousel.Item>
                <video  className="d-block w-100"
                 autoPlay="autoplay" controls muted>
                <source
                src={banner2}
                type="video/mp4"
             />
        </video> 
                    {/* <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    /> */}

                    <Carousel.Caption>
                        <h2>Adventure is worthwhile</h2>
                        {/* <h1 className="lighter">TOP BRANDS OF 2021</h1> */}
                        <p className="sub-title">dicover new places with us, adventure awaits.</p>
                        <Button className="text-dark bg-warning">Book Appointments</Button>
                    </Carousel.Caption>
                </Carousel.Item>
        
     
 
                <Carousel.Item>
                <video  className="d-block w-100"
                autoPlay="autoplay" controls muted>
          <source
            src={banner3}
            type="video/mp4"
            
          />
        </video> 
                    {/* <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    /> */}

                    <Carousel.Caption>
                        <h1 className="lighter ">Adventure is worthwhile </h1>
                        <p className="sub-title">dicover new places with us, adventure awaits!!.</p>
                        <Button className="text-dark bg-warning">Book Appointments</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            

            <Carousel.Item>
                <video  className="d-block w-100"
                 autoPlay="autoplay" controls muted>
                <source
                src={banner4}
                type="video/mp4"
             />
        </video> 
                    {/* <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    /> */}

                    <Carousel.Caption>
                        <h2>Adventure is worthwhile</h2>
                        {/* <h1 className="lighter">TOP BRANDS OF 2021</h1> */}
                        <p className="sub-title">dicover new places with us, adventure awaits.</p>
                        <Button className="text-dark bg-warning">Book Appointments</Button>
                    </Carousel.Caption>
                </Carousel.Item>
        
                <Carousel.Item>
                <video  className="d-block w-100"
                 autoPlay="autoplay" controls muted>
                <source
                src={banner5}
                type="video/mp4"
             />
        </video> 
                    {/* <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    /> */}

                    <Carousel.Caption>
                        <h2>Adventure is worthwhile</h2>
                        {/* <h1 className="lighter">TOP BRANDS OF 2021</h1> */}
                        <p className="sub-title">dicover new places with us, adventure awaits.</p>
                        <Button className="text-dark bg-warning">Book Appointments</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        
     

            </>
               );
};

export default Banner;