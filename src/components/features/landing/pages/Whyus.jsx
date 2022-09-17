import React from "react";
import "./whyus.css";
import  BrownWaveIcon from "./wave4.svg";
import BrownWaveIconInverted from "./wave5.svg";
export const Whyus = () => {
  return (
    <>
      <div  className="whyus__container">
        <div id="whyus" className="svg4">
          {/* <BrownWaveIcon /> */}
          <img src={BrownWaveIcon}/>
        </div>
        <div  className="whyus__head">Why us <p className="whyus__head_under">?</p></div>
        <div className="box1">
        <em><p  className="whyus__under__head">These features make us the <span className="text__color_event">best</span></p></em>
          <div className="whyus-box">
            <div className="whyuss">
              <h1>Experienced Culinary</h1>
              <div className="whyus-description">
                <div className="whyus-icon">
                  <i className="fa fa-shield" aria-hidden="true"></i>
                </div>
                <div className="whyus-text">
                  <p>
                    {" "}
                    Come and experience a variety of drinks along with a great
                    set of people to talk and interact with{" "}
                  </p>
                </div>
              </div>
              <h1>Seat Booking Online</h1>
              <div className="whyus-description">
                <div className="whyus-icon">
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                </div>
                <div className="whyus-text">
                  <p>
                    {" "}
                    Worried about Bookings/Availability ? Guess what ? Our 24
                    hours Online booking portal just solves the issue !{" "}
                  </p>
                </div>
              </div>
              <h1>Affordable Price</h1>
              <div className="whyus-description">
                <div className="whyus-icon">
                  <i className="fa fa-inr" aria-hidden="true"></i>
                </div>
                <div className="whyus-text">
                  <p>
                    {" "}
                    Our budget friendly menu makes sure we do not hit your
                    pockets that hard{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="whyuss-img">
              <img src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="svg3">
        {/* <BrownWaveIconInverted /> */}
        <img src={BrownWaveIconInverted}/>
      </div>
    </>
  );
};
