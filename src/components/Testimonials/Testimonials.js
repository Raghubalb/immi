import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
// import user_1 from '../../assets/user-1.png'
// import user_2 from '../../assets/user-2.png'
// import user_3 from '../../assets/user-3.png'
// import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = ()=>{
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform =`translateX(${tx}%)`
}
const slideBackward = ()=>{
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform =`translateX(${tx}%)`

}
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_1} alt="" /> */}
                <div>
                  <h3>Services </h3>
                  {/* <span>Editor, USA</span> */}
                </div>
              </div>
              <p>
              we specialize in software development, creating responsive websites, efficient ERP systems, and secure ecommerce platforms. We design intuitive mobile applications for iOS and Android, and provide captivating graphical design services to elevate your brand. Partner with us for innovative and effective solutions.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_2} alt="" /> */}
                <div>
                  <h3>ERP </h3>
                  {/* <span>Editor, USA</span> */}
                </div>
              </div>
              <p>
              we offer comprehensive ERP services including consulting, implementation, support, and customization. Our team ensures your ERP system is tailored to your unique business needs, streamlining operations and enhancing efficiency. Partner with us for expert guidance and innovative solutions to optimize your enterprise resources.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_3} alt="" /> */}
                <div>
                  <h3>Cloud </h3>
                  {/* <span>Editor, USA</span> */}
                </div>
              </div>
              <p>
              we provide comprehensive cloud services including cloud infrastructure, backup and recovery, and managed cloud services. Our solutions ensure robust, scalable, and secure cloud environments, tailored to your business needs. Partner with us to leverage the full potential of the cloud for your enterprise.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                {/* <img src={user_4} alt="" /> */}
                <div>
                  <h3>Internship </h3>
                  {/* <span>Editor, USA</span> */}
                </div>
              </div>
              <p>
              we offer valuable educational services including internship programs, placement training, and training and development sessions. Our programs are designed to equip individuals with the skills and experience needed to excel in their careers. Partner with us to foster growth and unlock new opportunities.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
