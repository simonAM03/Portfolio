import React from 'react'
import './About.css'
import theme_pattern from '@svg/theme_pattern.svg'
import profile_img from '@svg/avt.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img style={{height:"403.5px", width:"300px",objectFit: "cover"}} src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hello everyone, my name is Minh, and I am 21 years old. Currently, I'm seeking opportunities to grow in the field of web development.Although I don't have professional experience yet, I've been actively learning and working with technologies such as: Java Spring Boot, ReactJs,..</p>
            <p>I'm passionate about coding and always eager to learn and improve my skills. I look forward to collaborating with others and contributing to future projects. Thank you for your support and guidance!</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>React JS</p><hr style={{width:"30%"}} /></div>
            <div className="about-skill"><p>Java</p><hr style={{width:"20%"}} /></div>
            <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"10%"}} /></div>
            <div className="about-skill"><p>Java</p><hr style={{width:"10%"}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>0+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About