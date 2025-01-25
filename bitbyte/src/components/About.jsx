import React from "react";
import Server from "./Server";

const About = () => {
  return (
    <div className="sub_page">
      {/* Hero Area */}
      <div className="hero_area">
        {/* <Navbar /> Replace the existing header with the Navbar component */}
      </div>

      {/* About Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p style={{textAlign:"justify"}}>
                  At BitByte, we are passionate about powering
                  innovation through cutting-edge embedded firmware solutions.
                  With a team of seasoned engineers and a commitment to
                  excellence, we specialize in designing, developing, and
                  optimizing firmware for a wide range of industries, including
                  IoT, automotive, industrial automation, and consumer
                  electronics. Our mission is to transform complex ideas into
                  efficient and reliable systems that drive modern technology
                  forward. Partner with BitByte to experience unparalleled
                  expertise, precision, and dedication in every byte of our
                  work.
                </p>
                <a href="/experience">Read More</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      <Server />

      {/* Info Section */}
      {/* <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="#">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </a>
                  <a href="#">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +01 1234567890</span>
                  </a>
                  <a href="#">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a href="index.html">
                    <img src="images/nav-bullet.png" alt="" />
                    Home
                  </a>
                  <a className="active" href="about.html">
                    <img src="images/nav-bullet.png" alt="" />
                    About
                  </a>
                  <a href="service.html">
                    <img src="images/nav-bullet.png" alt="" />
                    Services
                  </a>
                  <a href="price.html">
                    <img src="images/nav-bullet.png" alt="" />
                    Pricing
                  </a>
                  <a href="contact.html">
                    <img src="images/nav-bullet.png" alt="" />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful
                </p>
              </div>
            </div>
            <div className="col-md-3 mb-0">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      End Info Section */}
      {/* <Info/> */}

      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
};

export default About;

// import React from "react";
// import Footer from "./Footer";

// const About = () => {
//   return (
//     <div className="sub_page">
//       {/* Hero Area */}
//       <div className="hero_area">
//         {/* Header Section */}
//         <header className="header_section">
//           <div className="container-fluid">
//             <nav className="navbar navbar-expand-lg custom_nav-container">
//               <a className="navbar-brand" href="index.html">
//                 <span>Hostit</span>
//               </a>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav ml-auto">
//                   <li className="nav-item">
//                     <a className="nav-link" href="index.html">
//                       Home <span className="sr-only">(current)</span>
//                     </a>
//                   </li>
//                   <li className="nav-item active">
//                     <a className="nav-link" href="about.html">
//                       About
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="service.html">
//                       Services
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="price.html">
//                       Pricing
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="contact.html">
//                       Contact Us
//                     </a>
//                   </li>
//                 </ul>
//                 <div className="quote_btn-container">
//                   <form className="form-inline">
//                     <button className="btn nav_search-btn" type="submit">
//                       <i className="fa fa-search" aria-hidden="true"></i>
//                     </button>
//                   </form>
//                   <a href="#">
//                     <i className="fa fa-phone" aria-hidden="true"></i>
//                     <span>Call : +01 123455678990</span>
//                   </a>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </header>
//         {/* End Header Section */}
//       </div>

//       {/* About Section */}
//       <section className="about_section layout_padding">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="detail-box">
//                 <div className="heading_container">
//                   <h2>About Us</h2>
//                 </div>
//                 <p>
//                   Words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
//                   need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
//                   generators on the Internet tend to repeat predefined chunks
//                 </p>
//                 <a href="#">Read More</a>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="img-box">
//                 <img src="images/about-img.png" alt="About Us" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* End About Section */}

//       {/* Info Section */}
//       <section className="info_section layout_padding2">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-3">
//               <div className="info_contact">
//                 <h4>Address</h4>
//                 <div className="contact_link_box">
//                   <a href="#">
//                     <i className="fa fa-map-marker" aria-hidden="true"></i>
//                     <span>Location</span>
//                   </a>
//                   <a href="#">
//                     <i className="fa fa-phone" aria-hidden="true"></i>
//                     <span>Call +01 1234567890</span>
//                   </a>
//                   <a href="#">
//                     <i className="fa fa-envelope" aria-hidden="true"></i>
//                     <span>demo@gmail.com</span>
//                   </a>
//                 </div>
//               </div>
//               <div className="info_social">
//                 <a href="#">
//                   <i className="fa fa-facebook" aria-hidden="true"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fa fa-twitter" aria-hidden="true"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fa fa-linkedin" aria-hidden="true"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fa fa-instagram" aria-hidden="true"></i>
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="info_link_box">
//                 <h4>Links</h4>
//                 <div className="info_links">
//                   <a href="index.html">
//                     <img src="images/nav-bullet.png" alt="" />
//                     Home
//                   </a>
//                   <a className="active" href="about.html">
//                     <img src="images/nav-bullet.png" alt="" />
//                     About
//                   </a>
//                   <a href="service.html">
//                     <img src="images/nav-bullet.png" alt="" />
//                     Services
//                   </a>
//                   <a href="price.html">
//                     <img src="images/nav-bullet.png" alt="" />
//                     Pricing
//                   </a>
//                   <a href="contact.html">
//                     <img src="images/nav-bullet.png" alt="" />
//                     Contact Us
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="info_detail">
//                 <h4>Info</h4>
//                 <p>
//                   Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200
//                   Latin words, combined with a handful
//                 </p>
//               </div>
//             </div>
//             <div className="col-md-3 mb-0">
//               <h4>Subscribe</h4>
//               <form action="#">
//                 <input type="text" placeholder="Enter email" />
//                 <button type="submit">Subscribe</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* End Info Section */}

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default About;
