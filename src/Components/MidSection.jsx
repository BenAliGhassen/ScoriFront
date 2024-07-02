import React, { useState,useEffect } from 'react'

import Rank from './Rank';
import { FaRankingStar } from "react-icons/fa6";

import { ShowRanking } from '../Functions/ShowRanking'
import { useSelector } from 'react-redux';
import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'
function MidSection() {

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

    const rank= useSelector((state) => state.Rank.value);
    
    const [ranking,setRanking]=useState(null)
    useEffect(() => {
        const fetchRanking = async () => {
          try {
            const data = await ShowRanking(); 
            setRanking(data); 
          } catch (error) {
            console.error('Error fetching ranking:', error);
          }
        };
    
        fetchRanking();
      }, [rank]);

  return (
    <div className='m-5 d-flex flex-column align-content-center'>    
      <button onClick={toggleDrawer} className='rounded bg-primary btn-Rang'><FaRankingStar />
      Rang</button>
           { ranking && <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='Drawer-rang'
            >
                <Rank ranking={ranking}/>
            </Drawer> }
    
    </div>
  )
}

export default MidSection
