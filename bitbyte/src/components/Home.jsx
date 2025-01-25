import React, { useEffect } from 'react';
import { Carousel } from 'bootstrap';

const Home = () => {
  useEffect(() => {
    // Explicitly initialize the carousel
    const carouselElement = document.getElementById('customCarousel1');
    if (carouselElement) {
      new Carousel(carouselElement, {
        ride: true,
        interval: 5000 // Change slide every 5 seconds
      });
    }

    // Set the current year
    const displayYearElement = document.querySelector("#displayYear");
    if (displayYearElement) {
      const currentYear = new Date().getFullYear();
      displayYearElement.innerHTML = currentYear;
    }
  }, []);

  return (
    <div className="hero_area">
      <section className="slider_section">
        <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Embedded Firmware <br />
                        Development
                      </h1>
                      <p>
                        Anything embarrassing hidden in the middle of text. All the Lorem Ipsum hidden in the middle of text.
                      </p>
                      <div className="btn-box">
                        <a href="/experience" className="btn-1">Read More</a>
                        <a href="/contact" className="btn-2">Contact Us</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-lg-10 mx-auto">
                        <div className="img-box">
                          <img src="/images/land1.png" alt="Hosting" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-box">
            <a className="carousel-control-prev" href="#customCarousel1" role="button" data-bs-slide="prev">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#customCarousel1" role="button" data-bs-slide="next">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;







// import React, { useEffect } from 'react';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const Home = () => {
//   useEffect(() => {
//     // Set the current year
//     const displayYearElement = document.querySelector("#displayYear");
//     if (displayYearElement) {
//       const currentYear = new Date().getFullYear();
//       displayYearElement.innerHTML = currentYear;
//     } else {
//       console.warn("Element with ID 'displayYear' not found.");
//     }
//   }, []);

//   return (
//     <div className="hero_area">
//       <section className="slider_section">
//         <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="detail-box">
//                       <h1>
//                         Fast & Secure <br />
//                         Web Hosting
//                       </h1>
//                       <p>
//                         Anything embarrassing hidden in the middle of text. All the Lorem Ipsum hidden in the middle of text.
//                       </p>
//                       <div className="btn-box">
//                         <a href="/" className="btn-1">Read More</a>
//                         <a href="/" className="btn-2">Contact Us</a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="row">
//                       <div className="col-lg-10 mx-auto">
//                         <div className="img-box">
//                           <img src="/images/slider-img.png" alt="Hosting" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel_btn-box">
//             <a className="carousel-control-prev" href="#customCarousel1" role="button" data-bs-slide="prev">
//               <i className="fa fa-angle-left" aria-hidden="true"></i>
//               <span className="sr-only">Previous</span>
//             </a>
//             <a className="carousel-control-next" href="#customCarousel1" role="button" data-bs-slide="next">
//               <i className="fa fa-angle-right" aria-hidden="true"></i>
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         </div>
        
//       </section>
//     </div>
//   );
// };

// export default Home;







// import React, { useEffect } from 'react';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const Home = () => {
//   useEffect(() => {
//     // Set the current year in the footer or other areas
//     const displayYearElement = document.querySelector("#displayYear");
//     if (displayYearElement) {
//       const currentYear = new Date().getFullYear();
//       displayYearElement.innerHTML = currentYear;
//     }

//     // Carousel initialization (Bootstrap's data-ride should handle most functionality)
//     const prevButton = document.querySelector('.carousel-control-prev');
//     const nextButton = document.querySelector('.carousel-control-next');

//     if (prevButton) {
//       prevButton.addEventListener('click', (e) => {
//         e.preventDefault();
//         const carousel = document.getElementById('customCarousel1');
//         if (carousel) {
//           const carouselInstance = new bootstrap.Carousel(carousel);
//           carouselInstance.prev();
//         }
//       });
//     }

//     if (nextButton) {
//       nextButton.addEventListener('click', (e) => {
//         e.preventDefault();
//         const carousel = document.getElementById('customCarousel1');
//         if (carousel) {
//           const carouselInstance = new bootstrap.Carousel(carousel);
//           carouselInstance.next();
//         }
//       });
//     }
//   }, []);

//   return (
//     <div className="hero_area">
//       {/* <Navbar /> Replace the existing header with the Navbar component */}

//       <section className="slider_section">
//         <div id="customCarousel1" className="carousel slide" data-ride="carousel">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="detail-box">
//                       <h1>
//                         Fast & Secure <br />
//                         Web Hosting
//                       </h1>
//                       <p>
//                         Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm
//                       </p>
//                       <div className="btn-box">
//                         <a href="/" className="btn-1">Read More</a>
//                         <a href="/" className="btn-2">Contact Us</a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="row">
//                       <div className="col-lg-10 mx-auto">
//                         <div className="img-box">
//                           <img src="/images/slider-img.png" alt="Hosting" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel_btn-box">
//             <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
//               <i className="fa fa-angle-left" aria-hidden="true"></i>
//               <span className="sr-only">Previous</span>
//             </a>
//             <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
//               <i className="fa fa-angle-right" aria-hidden="true"></i>
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

