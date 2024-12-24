import React from "react";
import "./Hero.css";
import profile_img from "@svg/avt56713.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        style={{
          height: "240px",
          width: "240px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
        src={profile_img}
        alt=""
      />
      <h1>
        <span>I'm Vũ Bảo Minh,</span> developer based in Viet Nam
      </h1>
      <p>
        Hello everyone, my name is Minh, and I am 21 years old. Currently, I'm
        seeking opportunities to grow in the field of web development.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
