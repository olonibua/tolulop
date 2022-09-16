import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi"

import arrow from '../img/Arrow.png'
import mywebb from '../img/mywebb.png'
import myweb from '../img/myweb.png'
import mymobile from '../img/mymobile.png'

const Pocket = (props) => {


  return (
    <div className='block py-10'>
      <div className='sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px] max-w-[280px] py-10 mx-auto'>
       <a href='/'><BiArrowBack className='border-2 my-3 h-8 w-10 '/></a> 
        
        <p className='pb-10 p md:text-2xl text-xl font-bold'>My Portfolio Website </p>
        <div className='mx-auto grid md:grid-cols-3'>
        <img className='w-[600px] border-2 md:col-span-2'src={myweb} alt='' />
        <img className='mt-10 md:mt-[70px] w-[150px] mx-2 border-2'src={mymobile} alt='' />
        </div>
        
    <div className='flex py-10 '>
        <div className='my-2'>
        <p className='text-[10px] sm:text-[12px] p font-bold mt-3'>Type</p>
        <p className='text-sm sm:w-[300px]text-xs p '>My Portfolio Website</p>
        <p className='text-[10px] sm:text-[12px] p font-bold mt-3'>Company</p>
        <p className='text-sm sm:w-[300px]text-xs p '>Tolulope</p>
       
        <p className='text-[10px] sm:text-[12px] p font-bold mt-3'>Role</p>
        <p className='text-sm sm:w-[300px]text-xs p'>Creative Designer & Developer <br/>(Designed and Develop the full website from scratch)</p>
        
        </div>
        <div className='mx-10 my-2 p'>
        <p className='text-[10px] sm:text-[12px]  p font-bold mt-3'>Completed</p>
        <p className='text-sm sm:w-[300px]text-xs p'>2022</p>
        
        <p className='text-[10px] sm:text-[12px] p font-bold mt-3'>Live Url</p>
        <a href='https://github.com/tolulope55/tolulope55.github.io' target='_blank'> <p className='text-sm p flex sm:w-[300px]text-xs'>View Site</p><img className='w-[16px] flex' src={arrow} alt='' /></a>
        </div>
    </div>
    <div>
        <p className='text-[10px] sm:text-[12px] p font-bold mt-3'>Overview</p>
        <p className=' text-sm sm:w-[300px]text-xs p'>My personal portfolio website - A full design and development</p>
        <p className='text-[10px] sm:text-[12px] p  font-bold mt-3'>Technologies Used</p>
        <p className='text-sm sm:w-[300px]text-xs p'>React js - Tailwind Css</p>
    </div>
    <div>
    <img className=' mt-6 border-t-2 p border-x-2 w-[600px]'src={mywebb} alt='' />
    </div>
    
        
      </div>

    </div>
  )
}

export default Pocket
