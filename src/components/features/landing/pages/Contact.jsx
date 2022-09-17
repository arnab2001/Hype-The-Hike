import React from 'react'
import './contact.css'
import { FaDiscord, FaGithub, FaFacebookF, FaInstagram} from "react-icons/fa";
export const Contact = () => {
//   AOS.init();
  return (
    <div id="contact" className="contact__container">
        <div  className='contact__head'>Contact Us</div>
    <div className='box4'>
    <div className="foot-row">
            <div className="foot-left">
                <h1 className='color__change' >
                    24/7 Support
                </h1>
                <em><p><i className="fa fa-clock-o" aria-hidden="true"></i>At your service</p></em>
                <em><p><i className="fa fa-clock-o" aria-hidden="true"></i>Call: 033-234458910</p></em>

            </div>
            <div className="foot-right">
                <h1 className='color__change'>
                    Send Us Mail
                </h1>
                <em><p>Any query<i className="fa fa-map-marker" aria-hidden="true"></i></p></em>
                <em><p>bytebug@gmail.com<i className="fa fa-paper-plane" aria-hidden="true"></i></p></em>
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
