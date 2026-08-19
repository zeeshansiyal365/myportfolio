import React from 'react'
import {Lottie} from "lottie-react";
import animation from "../assets/animation.json"
import { IoDownloadOutline } from "react-icons/io5";
import TypewriterView from './TextAnimation';
import { percent } from 'framer-motion';
const FirstHero = () => {
  const skillLevel = [ {name: "Html", percent: "90%"},
{name: "CSS", percent: "70%"},
{name: "Js", percent: "70%"},
{name: "React", percent: "70%"},
{name: "MongoDb", percent: "30%"},
{name: "nodeJs", percent: "60%"},
{name: "Express.Js", percent: "65%"},
{name: "Tailwind", percent: "80%"}] 
  return (
    <>
    <div className='relative bg-gray-200 rounded-2xl grid grid-cols-1 md:grid-cols-2 mx-7 py-20 ' id='Home'>
    <div className='sm:mb-0 order-2 md:order-1'>

      <div  className='ms-8 mt-15 flex flex-col justify-center gap-y-3'>
        <p className='sm:text-4xl text-3xl '>Hi, my name is</p>
    <p className='text-4xl my-3 sm:text-6xl md:text-4xl lg:text-6xl   font-bold'>Zeeshan Sainch</p>
    {<TypewriterView />}
      
    </div>
    <a href="/Zeeshan_Sainch_CV.pdf" target='_blank' download="/Zeeshan_Sainch_CV.pdf" ><button className='bg-orange-400 mt-5 flex gap-x-3 items-center rounded-md sm:px-6 md:px-4 sm:py-3 md:py-3 lg:py-4 lg:px-6 font-semibold cursor-pointer text-white sm:text-2xl p-2 ms-8 '>
      <IoDownloadOutline />
       Download Resume</button></a>
    
    </div>
    <div className='order-1 md:order-2'>  <Lottie src={animation} autoplay loop/></div>
    </div>

    <div className='flex my-10 flex-col mx-auto items-center gap-2 w-[180px]'>
      <p className='text-4xl font-bold' id='Skills'>My Skills</p>
      <div className='h-1 w-full bg-black'></div>
    </div>
    
    <div className='flex mx-3 justify-center gap-5 flex-wrap my-15'> {skillLevel.map(skill =>(
     <div key={skill.name} className="relative w-32.5 h-32.5">
  <svg
    className="w-full h-full -rotate-90"
    viewBox="0 0 200 200"
  >
    {/* Blue 50% progress */}
    <circle
      cx="100"
      cy="100"
      r="90"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="15"
      strokeDasharray= {skill.percent === "70%" ? "432.7 565.5" : skill.percent === "30%" ? "100.7 565.5" : skill.percent === "65%" ? "360.7 565.5" : skill.percent === "60%" ? "330.7 565.5" : skill.percent === "80%" ? "450.7 565.5" :  skill.percent === "90%" ? "480.7 565.5" : "300.7 565.5"   }
      strokeLinecap="round"
    />
  </svg>

  {/* Center content */}
  <div 
   className="absolute inset-0 flex flex-col items-center justify-center">
    <span className="text-lg font-bold">{skill.name}</span>
    <span className="text-xl">{skill.percent}</span>
  </div>
</div>
   ))}</div>

    <div className='flex my-10 flex-col mx-auto items-center gap-2 w-[220px]'>
      <p className='text-4xl font-bold' id='Projects'>My Projects</p>
      <div className='h-1 w-full bg-black'></div>
    </div>
 
    </>
  )
}

export default FirstHero