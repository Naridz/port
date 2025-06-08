import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt'
import "../image/im.css"


const Port = () => {
  return (
    <div id='section3' className='container mx-auto h-[500px] max-[640px]:h-auto :my-[30px] overflow-hidden'>
      <h3 className='mt-[45px] text-center text-3xl font-bold'>Portfolio</h3>
      <div className='grid grid-cols-3 max-[640px]:grid-cols-1 justify-items-center'>
        <div className='mt-14'>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <div className='rounded-2xl border-black border-2 imgpo w-[300px] h-[200px] bg-cover bg-center'></div>
          {/* <img src={ImgPo} alt=" "
           width={300} height={300} className='rounded-2xl border-black border-2'/> */}
          </Tilt>
          <a href='https://nextjs-p-nine.vercel.app/' target='_blank'>
            <p className='my-2.5 font-bold italic inline'>Pokemon Api (Next Js)</p>
          </a>
        </div>
        <div className='mt-14'>
          <Tilt scale={1} transitionSpeed={2500} tiltReverse={true}>
            <div className='rounded-2xl border-black border-2 cpy w-[300px] h-[200px] bg-cover bg-center'></div>
          {/* <img src={Cpy} alt=" "
           width={275} height={250} className='rounded-2xl border-black border-2'/> */}
          </Tilt>
          <p className='my-2.5 font-bold italic inline'>Certificate</p>
        </div>
        <div className='mt-14'>
          <Tilt scale={1} transitionSpeed={2500} tiltReverse={true}>
            <div className='rounded-2xl border-black border-2 weatherApp w-[300px] h-[200px] bg-cover bg-center'></div>
          {/* <img src={Cpy} alt=" "
           width={275} height={250} className='rounded-2xl border-black border-2'/> */}
          </Tilt>
          <a href='https://weather-tau-lac-80.vercel.app/' target='_blank'>
            <p className='my-2.5 font-bold italic inline'>Weather App Api (Nextjs + Typescript)</p>
          </a>
        </div>
            </div>
        {/* <div className='mt-20 content-center max-[640px]:my-20'>
          <p className='text-xl text-center italic'>
            <span>C</span>
            <TypeAnimation
            sequence={[
              'oming Soon . . .',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              '',
              1000
            ]}
              speed={50}
              repeat={Infinity}/>
            </p>
        </div> */}
    </div>
    // <div className=" h-72 bg-secondary-content">
    //   <div className="ms-28 container mx-auto p-5">
    //     <h1 className="text-2xl mb-20">Project</h1>
    //     <p className='text-5xl italic'>
    //       <span>C</span>
    //     <TypeAnimation
    //   sequence={[
    //     // Same substring at the start will only be typed out once, initially
    //     'oming Soon . . .',
    //     1000, // wait 1s before replacing "Mice" with "Hamsters"
    //     '',
    //     1000,
    //   ]}
    //   speed={50}
    //   repeat={Infinity}
    // />
    //     </p>
    //   </div>
    // </div>
  );
}

export default Port