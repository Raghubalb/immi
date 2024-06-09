import React from 'react'
import './About.css'
// import about_img from '../../assets/about.png'
// import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-section">
        
        <h2>Our Mission</h2>
        <p>Our mission is to empower businesses and individuals by providing high-quality software development, educational opportunities, and professional services. We aim to drive growth, enhance efficiency, and foster innovation in everything we do.</p>
      </div>
      <div className="about-section">
        <h2>Our Approach</h2>
        <p>At IMMI, we believe in a client-centric approach. Our team of experts works closely with you to understand your unique needs and deliver customized solutions that exceed your expectations. We are committed to innovation, quality, and continuous improvement, ensuring that you receive the best possible service.</p>
      </div>
      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
            <ul>
              <li>Expertise: Our team consists of experienced professionals with a deep understanding of the latest technologies and industry trends.</li>
              <li>Quality: We are dedicated to delivering high-quality solutions that meet the highest standards of excellence.</li>
              <li>Innovation: We leverage the latest technologies to create innovative solutions that drive growth and efficiency.</li>
              <li>Client Satisfaction: Our primary goal is to ensure the complete satisfaction of our clients through exceptional service and support.</li>  
            </ul>
          </p>
      </div>
    </div>
  )
}

export default About
