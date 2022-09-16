import { useRef } from 'react'
import {Routes, Route, Link} from "react-router-dom";
import face from '../img/face.png'
import React, {useEffect, useState} from 'react'
import circle from '../img/circle.png'
import circlee from '../img/circlee.png'
import Abouto from '../img/Abouto.png'
import TypeWritter from "typewriter-effect"
import signature from '../img/signature.png'
import Line from '../img/Line.png'
import pocketone from '../img/pocketone.png'
import tools from'../img/tools.png'
import javascript from'../img/JS.png'
import Reactt from'../img/React.png'
import css from'../img/CSS.png'
import html from'../img/HTML.png'
import process from'../img/process.png'
import processo from'../img/processs.png'
import photoshop from'../img/photoshop.png'
import figma from'../img/Figma.png'
import illustrator from'../img/Illustrator.png'
import animate from'../img/Animate.png'
import adobexd from'../img/Adobe XD.png'
import sch from'../img/sch.png'
import wordpress from'../img/wordpress.png'
import edu from'../img/edu.png'
import twitter from '../img/Twitter.png'
import Github from '../img/github.png'
import Behance from '../img/behance.png'
import Nav from '../Component/Nav';
import ThemeToggle from '../Component/Themetoggle';
// import About from './About'
// import Skills from './Skills'
// import Project from './Project'
// import Contact from './Contact'




const Home = (props) => {

   const [showComponent, setShowComponent] = useState(false);

  useState(() => {
      setInterval(() => {
       setShowComponent(true);
      }, 3100);
  }, []);

  const [showLine, setShowLine] = useState(false);

  useState(() => {
      setInterval(() => {
       setShowLine(true);
      }, 3100);
  }, []);
  
  const [showPage, setShowPage] = useState(false);
  useState(() => {
      setInterval(() => {
       setShowPage(true);
      }, 7000);
  }, []);

  const [showsign, setShowSign] = useState(false);
  useState(() => {
      setInterval(() => {
       setShowSign(true);
      }, 5000);
  }, []);
  
  
  const [showAbout, setShowAbout] = useState(false);
  useState(() => {
      setInterval(() => {
       setShowAbout(true);
      }, 6000);
  }, []);
  

  
  const [skill, setSkill] = useState('Design')
    
  return (


    

    <div id='home' className='mt-6 sm:py-0'>

        
    


    {showComponent &&  <ul className="hidden md:flex bg-black sticky top-4 ... text-white text-center z-20 my-5 rounded-3xl h-12 max-w-[700px] w-8/12 mx-auto  justify-between stroke-transparent">

       <button className="p-3 w-44 text-center hover:bg-white p hover:text-black bg-black mx-auto rounded-3xl"><a href='#home'>Home</a></button>

        <button href='#about' className="p-3 w-44 text-center p hover:bg-white hover:text-black bg-black mx-auto rounded-3xl "><a href='#about'> About </a></button>
    
 
        <button className="p-3 text-center w-44 hover:bg-white p hover:text-black bg-black mx-auto rounded-3xl "> <a href='#skills'>Skills</a></button>
       
        
        <button className="p-3 text-center w-44 hover:bg-white p hover:text-black bg-black mx-auto rounded-3xl "><a href='#project'>Projects</a></button>
      
     </ul>}
     {showComponent &&  
     <div className='md:hidden sticky mobile top-4 bg-black p border-r-50 mx-auto box-border z-20 pb-4 justify-between sm:h-18  h-10 w-9/12 rounded-3xl  p-2 text-white flex'>
        <div className="grid grid-cols-2 -space-x-0 lg:-space-x-7">
       <Link to='/' ><a href='#home'><img  src={face} alt=''  className="md:hidden h-6 rounded-2xl" /></a></Link> 
        </div> 
        <ul className="flex px-1 text-xs p sm:justify-between">
        <li className="p-1 "><a href='#about'>About</a></li>
        <li className="p-1 "><a href='#skills'>Skills</a></li>
        <li className="p-1 "><a href='#project'>Projects</a></li>
     </ul>
    </div>
}
    
        
        <div className='sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px] max-w-[290px] w-full h-[35vh] md:h-[80vh] sm:mt-16 mt-24 mx-auto grid md:grid-cols-4'>
        <div className='flex flex-col pb-3 home md:col-span-3 justify-center ' >
        <h1 className='text-4xl md:text-7xl lg:text-8xl h1 dynamic-txts pb-4'>
         <TypeWritter 
         onInit={(typewriter) => {
          typewriter.typeString("Hi, I'm Tolulope.").start();
         }}
         />
        </h1>
        <div className='sm:max-w-[500px] md:max-w-[700px] lg:max-w-[450px] max-w-[400px] flex w-full sm:mt-4 pl-4 mt-2'>
        {showLine && <img className='h-[60px] w-[5px]' src={Line} alt='' />}
        {showComponent && <p className='text-[10px] sm:text-[15px] md:text-[16px] lg:text-[17px] p pb-3 ml-3 leading-3 md:text-sm'>A<strong class> Front-End Web Developer </strong> passionate about creating interactive
        applications and experiences on the web.
        </p>}
        </div>
        
            {showsign && <img className='w-[100px] mt-7 sm:hidden z-10 block' src={signature} alt=''/> } 
             
        </div>
        {showAbout && <img className='w-[180px] aimg lg:w-[290px] text-center mt-24 justify-center align-middle hidden md:block md:mx-auto ' src={Abouto} alt='' />}
        
        </div>
        <div className='wel-w text-[70px] sm:text-[110px] sm:max-w-[400px] md:max-w-[900px] lg:max-w-[1300px] max-w-[290px]'>
        <div className='wel '>
            {/* <span className=''>       WELCOME TO MY PORTFOLIO&nbsp;&nbsp;&nbsp;</span> */}
        </div>
        <div  className='wel'>
            <span id='about'>       WELCOME TO MY PORTFOLIO&nbsp;&nbsp;&nbsp;</span>
        </div >
        </div>

        
        {/* {showPage &&  <About />}
        {showPage &&  <Skills />}
        {showPage &&  <Project />}
        {showPage &&  <Contact />} */}

<div >
        
{/* ref={sectionRef} */}
{showComponent &&  
        <div  className='w-full mb-10 py-0 sm:py-8 '>
           
            <div className=' sm:p-1 sm:mb-16 py-2  sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px] mx-auto max-w-[290px]  grid md:grid-cols-3'>
            
            <div className='about flex flex-col md:col-span-2 justify-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold pb-4'>About.</h1>
                <p className='text-[10px] pb-2  p sm:text-xs md:text-sm'>Hello! My name is Tolulope Olonibua, i am
                detail-oriented Frontend Software Engineer dedicated to the quest of 
                developing solutions that leverage on best practise technologies to deliver top user experience. 
                My interest in web development started back in 2020, i used to be a designer before i decided to start coding. </p>
    
            <p className='text-[10px] p pt-2 sm:text-xs md:text-sm'>My approach to web design and development is inﬂuenced by my 
            understanding of design as a problem solving process. having acquire the required skills, My main focus
             these days is building accessible, incusive products and digital
            experiences as much as possible. My goal is to secure a responsive carreer opportunity to fully utilize my training skills, while making 
            significant contribution to achieve goals of an company that focus on customer satisfaction and experience.</p>
            
            </div>
            <img className='w-[115px] md:w-[180px] mx-8 circle mt-20 float-right z-10 block' src={circle} alt=''/>
    
            </div>
            {/* <img className='w-[100px] sm:w-[200px] float-right pt-8 m-8 sm:m-16' src={sign} alt='' /> */}
            
          
        </div>}
        </div>

          


        
        {showComponent &&  <div>
        <div id='skills' className='w-full skill mt-10 sm:py-14 border-y-2 py-5 sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px] mx-auto max-w-[290px]'>
        
        <div className='sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px] max-w-[290px] mx-auto'>
        <h1 className='text-2xl md:text-3xl mt-6 lg:text-4xl font-bold pb-4'>Skills & Education</h1>
        <button className='text-[10px] px-6 p p-2 sm:text-xs hover:border border-r-2 rounded design md:text-sm' onClick={() => setSkill('Design')}>Design</button> 
        <button className='text-[10px] p-2 p hover:border rounded sm:text-xs border-l-2 md:text-sm px-8' onClick={() => setSkill('Development')}> Development</button>
        </div>
        
     <div className='mx-auto items-center grid md:grid-cols-2'>
      <div>
        {skill === 'Design' && 
          <div className='grid grid-cols-3 mx-auto '>
             <div className='pr-3'>
                 <img className='mx-auto inline-block h-[96px]  md:h-[100px] lg:h-[110px] pt-12 items-center align-middle' src={tools} alt='' />
                 <img className='mx-auto float-right' src={process} alt='' />
             </div>
             <div className=' w-[200px] text-[11px] sm:text-xs mx-4 py-2'>
             <p className='flex py-2 p items-center'><img className='w-[20px]' src={figma} alt='' /> Figma</p>  
             <p className='flex py-2 p items-center'><img className='w-[20px]' src={photoshop} alt='' /> Photoshop</p>
             <p className='flex py-2 p items-center'><img className='w-[20px]' src={illustrator} alt='' />Adobe Illustrator</p>
             <p className='flex py-2 p items-center'><img className='w-[20px]' src={animate} alt='' /> Adobe Affect Effect</p>
             <p className='flex py-2 p items-center'><img className='w-[20px]' src={adobexd} alt='' />Adobe XD</p>
             </div>
          </div>
         }
        
        {skill === 'Development' &&   
         <div className='grid grid-cols-3 mx-auto '>
            <div className='pr-3'>
                <img className='mx-auto inline-block h-24  md:h-[100px] lg:h-[110px] pt-12 items-center align-middle' src={tools} alt='' />
                <img className='mx-auto float-right' src={process} alt='' />
            </div>
            <div className=' w-[200px] text-[11px] sm:text-xs mx-4 py-2'>
                <p className='flex py-2 pp items-center'><img className='px-1' src={html} alt='' /> HTML</p>  
                <p className='flex py-2 pp items-center'><img className='px-1' src={css} alt='' /> CSS</p>
                <p className='flex py-2 pp items-center'><img className='px-1' src={javascript} alt='' />Javascript</p>
                <p className='flex py-2 pp items-center'><img className='px-1' src={Reactt} alt='' /> React</p>
                <p className='flex py-2 pp items-center'><img className='px-1' src={wordpress} alt='' />Wordpress</p>
            </div>
         </div>
        }
      </div>  
        

        <div className='grid grid-cols-3 mx-auto'>
        <div className='pr-3 py-8'>
                <img className='mx-auto inline-block h-[110px]  md:h-[115px] lg:h-[125px] py-4 pt-12 items-center align-middle' src={sch} alt='' />
                <img className='mx-auto float-right' src={processo} alt='' />
            </div>
            <div className='w-[200px] md:w-[280px] mx-4 py-4'>
                <div className=''>
                  <h2 className='font-bold text-[13px] p sm:text-[16px]'>Cousera</h2>
                  <p className='text-[10px] p sm:text-[12px]'>Front-End Web UI Frameworks and Tools: Bootstrap 4</p>
                  <span className='text-[11px] italic'>2022</span>
                  </div>
                  <div className=''>
                  <h2 className='font-bold text-[13px] p  sm:text-[16px]'>Federal University, Oye Ekiti</h2>
                  <p className='text-[10px] p sm:text-[12px]'>BSc.(Edu) Mathematics</p>
                  <span className='text-[11px] italic'>2021</span>
                  </div> 
                  <div className=''>
                  <h2 className='font-bold text-[13px] p sm:text-[16px]'>Federal Government College, Ikole</h2>
                  <p className='text-[10px] p sm:text-[12px]'>SSCE Certificate</p>
                  <span className='text-[11px] italic' >2016</span>
                </div>
            </div>
        </div>
     </div>
    </div>
    </div> }

    {showComponent &&  
   <div>
    <div id='project' className=''>
    
    <div className='w-full project mt-8 sm:py-8 py-5 p-4 sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px] mx-auto max-w-[290px]'>
        <div className= 'sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1050px] max-w-[350px] mx-auto'>
        {showComponent &&   <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold pb-10'>Projects.</h1>}
        {showComponent &&   <button className='text-[10px] px-6 p-2 sm:text-xs hover:border p  border-r-2 rounded design md:text-sm' onClick={() => setSkill('Design')}>Design</button> }
        {showComponent &&   <button className='text-[10px] p-2 sm:text-xs hover:border p border-l-2 rounded  md:text-sm px-8' onClick={() => setSkill('Development')}> Development</button>}
      </div>
        {skill === 'Design' && 
        <div className='py-5 items-center grid md:grid-cols-3'>

        <Link to='/pocket'>
        <div className='bg-{pocketone} bgg text-white border-2 mt-4 rounded-xl h-64 w-64 py-10'></div>
        </Link>
        <Link to='/portfolio'>
        <div className='bg-black text-white border-2 bg mt-4 rounded-xl h-64 w-64 py-10'>
        </div>
        </Link>
        <div className='bg-black border-2  text-white mt-4 rounded-xl h-64 w-64 py-10'>
        </div>
        </div>
         }
        {skill === 'Development' && 
        <div className='py-5 items-center grid lg:grid-cols-3 '>
        
        <div className='bg-black border-2 text-white mt-4 rounded-xl h-64 w-64 py-10'>
        </div>
        <div className='bg-black border-2 text-white mt-4 rounded-xl h-64 w-64 py-10'>
        </div>
        </div>
          } 
    
        </div>
        <div>
        </div>
    
        <div className='wel-w mt-4 text-[70px] sm:text-[110px] overflow-hidden sm:max-w-[400px] md:max-w-[900px] lg:max-w-[1300px] max-w-[270px]'>
        <div className='wel'>
            {/* <span className=''>       WELCOME TO MY PORTFOLIO&nbsp;&nbsp;&nbsp;</span> */}
        </div>
        <div  className='wel'>
            <span id='about'> THANKS FOR READING&nbsp;&nbsp;&nbsp;</span>
        </div >
        </div>

           <h2 className='text-3xl mt-24 text-center p md:text-5xl lg:text-6xl font-bold pb-10'>THANKS FOR READING</h2>
    </div>
    </div>}
       



   
        
    
    </div>

    
         
    
    
  )
}

export default Home