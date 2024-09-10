// src/components/Contact.js
import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contactus">
      <div className="col-md-6">
        <img
          src="/images/contactus.jpeg"
          alt="contactus"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>
      <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white">CONTACT US</h1>
        <p className="text-justify mt-2">
          Any query and info about the product, feel free to call anytime. We
          are available 24X7.
        </p>
        <p className="mt-3">
          <BiMailSend className="contact-icon" /> : www.xyz.com
        </p>
        <p className="mt-3">
          <BiPhoneCall className="contact-icon" /> : 012-3456789
        </p>
        <p className="mt-3">
          <BiSupport className="contact-icon" /> : 1800-0000-0000 (toll free)
        </p>
      </div>
    </div>
  );
};

export default Contact;
