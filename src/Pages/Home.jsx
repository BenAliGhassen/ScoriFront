import React from 'react'
import Navigationbar from '../Components/NavBar'
import Formulaire from '../Components/Formulaire'
import MidSection from '../Components/MidSection'

function Home() {
  return (
    <div>
        <Navigationbar />
        <div className='d-flex flex-row flex-wrap w-100'>
        <Formulaire />
        <MidSection />
        </div>
    </div>
  )
}

export default Home

