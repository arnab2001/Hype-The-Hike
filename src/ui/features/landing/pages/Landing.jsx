import React from "react";
import './landing.css'
import Events from './Events'
import brandIcon from "./wave.svg"
import { Whyus } from "./Whyus";
import { Contact } from "./Contact";
export const Landing = () => {
  return (
    <> 
    <div id="landing"className="landing__container">
    
      <video src="/essentials/landingvideo.mp4" autoPlay loop muted />
     
      <h1 className="landing__head">HYPE THE HIKE</h1>
      <em><p className="under__head">India's <span className="text__color">largest travelling</span> community built on WEB3</p></em>

      <div>
        <brandIcon/>
      </div>
    </div>
    <Events />
    <Whyus/>
    <Contact/>
    </>
  );
};
