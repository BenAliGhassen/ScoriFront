import React, { useState,useEffect } from 'react'
import VideoHolder from './VideoHolder';
import Rank from './Rank';
import { FaTableList } from "react-icons/fa6";
import { ShowRanking } from '../Functions/ShowRanking'
import { useSelector } from 'react-redux';

function MidSection() {
    const [state,setState]=useState(true);
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
    <div className='m-5 d-flex flex-column align-content-center w-25'>
        <button onClick={()=>{setState(!state)}} className='btn w-50'>
        <FaTableList /> {(state === true) ? 'Voir rang' : 'Page de garde'}
        </button>
        

      {(state === true) ? <VideoHolder /> : <Rank ranking={ranking}/>}
    </div>
  )
}

export default MidSection
