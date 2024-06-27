import React from 'react'
import landing from '../Images/landing.jpeg'
import '../App.css';
function VideoHolder() {
  return (
    <div className='d-flex flex-column'>
      <img src={landing} alt='landingImg' className='landingImg'/> 
      <h4>Pour ceux qui n'ont pas une note de français, vous pouvez mettre la note d'anglais</h4>
    </div>
  )
}

export default VideoHolder
