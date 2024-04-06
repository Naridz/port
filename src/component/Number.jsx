import React from 'react'
import Countup from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

function Number() {
  return (
    <div className='bg-neutral text-neutral-content overflow-hidden h-[300px] flex justify-center items-center text-center
    max-[640px]:flex-col  max-[640px]:h-auto max-[640px]:py-12'>
        <div className='mx-[50px] max-[640px]:my-5'>
            <h3 className='text-5xl font-bold'>
                <VisibilitySensor partialVisibility offset={{bottom:200}}>
                    {({isVisible})=>(
                        <div>
                            {isVisible?<Countup start={100} end={0} duration={3}/>:null} +
                        </div>
                    )}
                </VisibilitySensor>
            </h3>
            <p className='text-xl font-bold p-1.5'>Year of experience</p>
        </div>
        <div className='mx-[50px] max-[640px]:my-5'>
            <h3 className='text-5xl font-bold'>
            <VisibilitySensor partialVisibility offset={{bottom:200}}>
                    {({isVisible})=>(
                        <div>
                            {isVisible?<Countup start={-100} end={0} duration={5}/>:null} +
                        </div>
                    )}
                </VisibilitySensor>
            </h3>
            <p className='text-xl font-bold p-1.5'>Award Won</p>
        </div>
    </div>
  )
}

export default Number