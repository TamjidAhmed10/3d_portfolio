import React from 'react'
import { styles } from '../styles'
const Hero = () => {
  return (
    <div className='relative w-full h-screen mx-auto'>
      <div className={` ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center items-center mt-5 '>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 h-40 sm:h-80 violet-gradient'></div>
        </div>
        {/* header parts */}
        <div>
           <h1>Hi i am Tamjid Ahmed</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero