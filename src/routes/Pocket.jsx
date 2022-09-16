import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
import pocketone from '../img/pocketone.png'
import pockettwo from '../img/pockettwo.png'
import pocketthree from '../img/pocketthree.png'
import pocketmobile from '../img/pocketmobile.png'
import arrow from '../img/Arrow.png'
import {BiArrowBack} from "react-icons/bi"

const Pocket = (props) => {


  return (
    <div className='block py-10'>
      <div className='sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px] max-w-[280px] py-10 mx-auto'>
    
       <a href='/'><BiArrowBack className='border-2 my-3 h-4 w-5 md:h-8 md:w-10 '/></a> 
        
        <p className='pb-10 p md:text-2xl text-xl font-bold'>POCKET APP: </p>
        <div className='mx-auto grid md:grid-cols-3'>
        <img className='w-[600px] md:col-span-2'src={pocketone} alt='' />
        <img className='mt-[82px]  mx-2'src={pocketmobile} alt='' />
        </div>
        
    <div className='flex py-10 '>
        <div className='my-2'>
        <p className='text-[10px] sm:text-[12px] p font-bold mt-3'>Type</p>
        <p className='text-sm sm:w-[300px]text-xs p '>Website Landing Page</p>
        <p className='text-[10px] sm:text-[12px] p font-bold mt-3'>Company</p>
        <p className='text-sm sm:w-[300px]text-xs p '>Pocket by piggyvest</p>
       
        <p className='text-[10px] sm:text-[12px] p font-bold mt-3'>Role</p>
        <p className='text-sm sm:w-[300px]text-xs p'>Creative Designer & Developer <br/>(Redesigned and redevelop the website page)</p>
        
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
        <p className=' text-sm sm:w-[300px]text-xs p'>Website landing page for Pocket App - A full redesign and redevelopment</p>
        <p className='text-[10px] sm:text-[12px] p  font-bold mt-3'>Technologies Used</p>
        <p className='text-sm sm:w-[300px]text-xs p'>React js - Scss</p>
    </div>
    <div>
    <img className=' mt-6 border-t-2 p border-x-2 w-[600px]'src={pockettwo} alt='' />
    <img className='border-2  p w-[600px]'src={pocketthree} alt='' />
    </div>
    
        
      </div>

    </div>
  )
}

export default Pocket
