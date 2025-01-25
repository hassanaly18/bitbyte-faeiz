import React from "react";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear">{new Date().getFullYear()}</span> All Rights Reserved By{" "}
          <a href="https://www.hassanali.codes/">BitByte</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
