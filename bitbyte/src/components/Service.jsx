import React from "react";

const services = [
  {
    id: 1,
    title: "Custom Firmware Development",
    description: "Tailored firmware solutions for a wide range of embedded systems.",
    image: "/images/s1.png",
  },
  {
    id: 2,
    title: "Real-Time Operating Systems Integration",
    description: "Expertise in integrating RTOS for performance-critical applications.",
    image: "/images/s2.png",
  },
  {
    id: 3,
    title: "Firmware Optimization and Debugging",
    description: "Enhancing firmware performance, minimizing power consumption.",
    image: "/images/s3.png",
  },
  {
    id: 4,
    title: "Hardware-Software Co-Design",
    description: "Seamless integration of hardware and firmware.",
    image: "/images/s4.png",
  },
  {
    id: 5,
    title: "IoT and Connectivity Solutions",
    description: "Developing firmware for wireless communication protocols",
    image: "/images/s5.png",
  },
  {
    id: 6,
    title: "Firmware Maintenance and Updates",
    description: "Ongoing support, version upgrades, and security patches.",
    image: "/images/s6.png",
  },
];

const Service = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Services</h2>
          </div>
          <div className="row">
            {services.map((service) => (
              <div className="col-md-6 col-lg-4" key={service.id}>
                <div className="box">
                  <div className="img-box">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="detail-box">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <a href="">
                      Read More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Service;


