import React from "react";

const ServicesList = () => {
  const services = [
    {
      heading: "Custom Firmware Development",
      content: `BitByte delivers custom firmware designed to fit your unique hardware needs. 
      From IoT devices and industrial automation to consumer electronics and medical devices,
       we create efficient, reliable solutions that enhance performance and meet industry standards.`,
      image: "/images/cfds.jpeg",
    },
    {
      heading: "Real-Time Operating Systems (RTOS) Integration",
      content: `BitByte specializes in integrating and customizing Real-Time Operating Systems 
      (RTOS) to meet the demands of performance-critical and time-sensitive applications. 
      Our solutions ensure seamless functionality, optimized performance, and reliable 
      operation for your embedded systems.`,
      image: "/images/rtos.jpeg",
    },
    {
      heading: "Firmware Optimization and Debugging",
      content: `At BitByte, we enhance firmware performance by optimizing code, 
      reducing power consumption, and ensuring reliability. Using advanced 
      debugging tools, we identify and resolve issues efficiently, delivering 
      stable and high-performing solutions for your embedded systems.`,
      image: "/images/debug.jpeg",
    },
    {
      heading: "Hardware-Software Co-Design",
      content: `BitByte ensures seamless collaboration between hardware and firmware through 
      expert board bring-up, driver development, and system testing. Our solutions provide 
      smooth functionality, reliability, and performance for your embedded systems.`,
      image: "/images/hscd.jpeg",
    },
    {
      heading: "IoT and Connectivity Solutions",
      content: `BitByte develops firmware for wireless communication protocols such as Bluetooth,
       Wi-Fi, Zigbee, and LoRa, enabling seamless connectivity for IoT ecosystems. Our solutions
        ensure reliable and efficient communication across devices.`,
      image: "/images/iot.jpg",
    },
    {
      heading: "Firmware Maintenance and Updates",
      content: `BitByte provides ongoing support with version upgrades and security patches to keep
       your firmware up-to-date and reliable. We ensure your systems perform optimally throughout 
       the product lifecycle.`,
      image: "/images/update.jpeg",
    },
  ];

  return (
    <div className="services-list" style={{ marginTop: "3rem" }}>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        Our Services
      </h1>
      {services.map((service, index) => (
        <div
          key={index}
          style={{ width: "90%", justifyContent: "center", margin: "auto" }}
          className={`row align-items-start ${
            index % 2 === 0 ? "flex-row-reverse" : ""
          } mb-5`}
        >
          <div className="col-md-6">
            <img
              src={service.image}
              alt={service.heading}
              className="img-fluid rounded"
              style={{ width: "35rem", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <h3 style={{ fontSize: "2rem" }} className="service-heading">
              {service.heading}
            </h3>
            <p
              style={{ fontSize: "1.2rem", textAlign: "justify" }}
              className="service-description"
            >
              {service.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;