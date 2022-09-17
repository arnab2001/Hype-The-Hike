import React from 'react'
import "./events.css" 
import WaveIcon from "./wave2.svg";
import WaveIconInverted from "./wave3.svg";
import ReactCardSlider from 'react-card-slider-component';

const slides = [
    {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description"},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description"},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description"},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description"},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description"},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description"},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description"},
]


const Events = () => {
  return (
    <>
    <div id="events" className="events__container">
         
        <div className="svg2">
            {/* <WaveIcon/> */}
            <img src={WaveIcon}/>
        </div>
        <div  id="events" className='events__head'>Upcoming Events</div>
    <div className='box'>
        <em><p id="events" className="events__under__head">Keep <span className="text__color_event">sliding </span>and <span className="text__color_event">joining </span>us!! </p></em>
    
<ReactCardSlider slides={slides}/>
                
    </div>
    </div>
    <div className='svg3'>
      {/* <WaveIconInverted/> */}
      <img src={WaveIconInverted} />
    </div> 
    </>

  )
}
export default Events


