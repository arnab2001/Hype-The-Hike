import React from 'react'
import "./card.css";



function Card() {
  return (
    <div class="card">
        <div className="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
        <div className="card_content">
          <h2 className="card_title">Card Grid Layout</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
  )
}

export default Card