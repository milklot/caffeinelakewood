import React from "react";
import "../styling/footerStyles.css";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contact">
        <h2>Contact us</h2>
        <div>
          <p className="footer-contact-info">
            customer.caffeine@gmail.com / TEL: 440-857-0320
          </p>
        </div>
      </div>
      <div className="footer-location-hours">
        <p>LOCATION & HOURS</p>
        <p>14701 Detroit ave., Suite 1, Lakewood, OH, 44107</p>
        <p>
          Open seven days a week, Monday - Thursday 7:30 am-5 pm, Friday,
          Saturday and Sunday from 8 am - 5 pm
        </p>
      </div>
      <div className="disclaimer-container">
        <p className="disclaimer">
          Disclaimer : this website does not represent official Caffeine
          Lakewood / prices may be vary depends on the owner.{" "}
        </p>
        <a href="https://github.com/milklot/caffeinelakewood">
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};
