import React from 'react'
import UserModal from '../userModal/UserModal';
import "./card.css";



function Card({image,place ,route}) {
  return (
    <div class="card">
        <div className="card_image"><img src={image}/></div>
        <div className="card_content">
          <h2 className="card_title">{place}</h2>
          <p className="card_text">{route}</p>
          <UserModal/>
        </div>
      </div>
  )
}

export default Card