import React from 'react'
import './contact.css'
import { FaDiscord, FaGithub, FaFacebookF, FaInstagram} from "react-icons/fa";
import 'aos';
import 'aos/dist/aos.css';
export const Contact = () => {
//   AOS.init();
  return (
    <div id="contact" className="contact__container">
        <div  className='contact__head'>Contact Us</div>
    <div className='box4'>
    <div className="foot-row">
            <div className="foot-left">
                <h1 className='color__change no__color' >
                    24/7 Support
                </h1>
                <p><i className="fa fa-clock-o" aria-hidden="true"></i>At your service</p>
                <p><i className="fa fa-clock-o" aria-hidden="true"></i>Call: 033-234458910</p>

            </div>
            <div className="foot-right">
                <h1 className='color__change'>
                    Send Us Mail
                </h1>
                <p>Send Us Mail<i className="fa fa-map-marker" aria-hidden="true"></i></p>
                <p>bytebug@gmail.com<i className="fa fa-paper-plane" aria-hidden="true"></i></p>
                {/* <p>+91 9674776719<i className="fa fa-phone"></i></p> */}
            </div>
        </div>
        <div className="social">
            <i className="fa fa-facebook"><FaFacebookF/></i>
            <i className="fa fa-instagram"><FaInstagram/></i>
            <i className="fa fa-twitter"><FaGithub/></i>
            <i className="fa fa-youtube-play"><FaDiscord/></i>
        </div>
    </div>
    </div> 
  )
}
