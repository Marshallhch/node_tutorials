import React from 'react'
import { Icons } from '../../assets/icons'

const Sidebar = () => {
  return (
    <div className='dark:bg-gray-950 bg-white py-5 px-4 dark:shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)] shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] w-[20%] flex flex-col rounded-sm z-[1000] fixed h-full'>
      <div className='sidebar-top'>
        <div className='sidebar-brand'>
          <span className='brand-logo'>
            <img src={Icons.LogoWhite} alt="brand logo" />
          </span>
          <span className='brand-text'>
            Marshall
          </span>
        </div>
      </div>
      <div className='sidebar-body'></div>
    </div>
  )
}

export default Sidebar