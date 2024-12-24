import React from "react";
import "./Footer.css";
import footer_logo from "@svg/footer_logo.svg";
import user_icon from "@svg/user_icon.svg";
import Logo from "../navbar/logo/Logo";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <Logo />
          <p>
            Hello everyone, my name is Minh, and I am 21 years old. Currently,
            I’m seeking opportunities to grow in the field of web development.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Cái này chưa dùng được" />
          </div>
          <div className="footer-subcribe">Subcribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Minh. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
