import React from 'react'
import nubeLluvia from '../../images/nube-lluvia.svg'

const Temp = () => {
  return (
    <div className='flex flex-col items-center p-8'>
        <div className=' w-52 h-52 flex flex-col items-center bg-cyan-700 rounded-full'>
            <div>
                <img className=' mt-3' src={nubeLluvia} alt="nube-lluvia" />
            </div>
            <div>
                <span className='text-7xl'>10°C</span>
            </div>
        </div>
        <div className='flex w-52 mt-5'>
            <div className=' w-6/12 flex flex-col'>
                <div>
                    <p className='font-bold text-center' >Wind status</p>
                    <p className='text-center'>7 mph</p>
                </div>     
                <div>
                    <p className='font-bold text-center'>Humidity</p>
                    <p className='text-center'>85 %</p>
                </div>            
            </div>
            <div className=' w-6/12 flex flex-col'>
                <div>  
                    <p className='font-bold text-center'>Visibility</p>
                    <p className='text-center'>6.4 miles</p> 
                </div>
                <div>
                    <p className='font-bold text-center'>Air pressure</p>
                    <p className='text-center'>998 mb</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Temp