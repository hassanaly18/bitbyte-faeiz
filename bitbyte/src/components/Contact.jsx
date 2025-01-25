import React from "react";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="hero_area">
      {/* Contact Section */}
      <section className="contact_section layout_padding" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Get In Touch</h2>
          </div>
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <div className="form_container">
                <form onSubmit={handleFormSubmit}>
                  <div>
                    <label htmlFor="name">Your Name</label>
                    <input id="name" type="text" placeholder="Your Name" required />
                  </div>
                  <div>
                    <label htmlFor="email">Your Email</label>
                    <input id="email" type="email" placeholder="Your Email" required />
                  </div>
                  <div>
                    <label htmlFor="phone">Your Phone</label>
                    <input id="phone" type="text" placeholder="Your Phone" />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="message-box" placeholder="Message" rows="4" />
                  </div>
                  <div className="btn_box">
                    <button type="submit">SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;









// import React from "react";

// const Contact = () => {
//   return (
//     <>
//       <div className="hero_area">
//         {/* Contact Section */}
//         <section className="contact_section layout_padding" style={{backgroundColor:"white"}}>
//           <div className="container">
//             <div className="heading_container heading_center">
//               <h2>Get In Touch</h2>
//             </div>
//             <div className="row">
//               <div className="col-md-8 col-lg-6 mx-auto">
//                 <div className="form_container">
//                   <form action="">
//                     <div>
//                       <input type="text" placeholder="Your Name" />
//                     </div>
//                     <div>
//                       <input type="email" placeholder="Your Email" />
//                     </div>
//                     <div>
//                       <input type="text" placeholder="Your Phone" />
//                     </div>
//                     <div>
//                       <input type="text" className="message-box" placeholder="Message" />
//                     </div>
//                     <div className="btn_box">
//                       <button>SEND</button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//       </div>
//     </>
//   );
// };

// export default Contact;
