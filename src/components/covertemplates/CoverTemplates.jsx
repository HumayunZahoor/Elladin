import React from 'react'
import Menu from '../navigation/Menu'

const CoverTemplates = () => {
  return (
      <>
          <div className='w-full h-full min-h-screen bg-black flex justify-start items-start'>
              <Menu />
              <div className='w-full bg-custom-gray flex min-h-screen h-full'>

              </div>
          </div>
      </>
  )
};

export default CoverTemplates;
