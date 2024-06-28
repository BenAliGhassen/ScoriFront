import React from 'react'
import landing from '../Images/landing.jpeg'
import '../App.css';
function VideoHolder() {
  return (
    <div className='d-flex flex-column'>
      <img src={landing} alt='landingImg' className='landingImg'/> 
      <h6>Pour ceux qui n'ont pas une note de français,mettez les notes de Techniques de communications, techniques d'expression, droits de l'homme</h6>
    </div>
  )
}

export default VideoHolder
