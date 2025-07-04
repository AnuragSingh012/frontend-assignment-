import React from 'react'
import CategoryFilter from './CategoryFilter'

const LeftSidebar = () => {
  return (
    <div className='sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-28 max-md:hidden'>
      <CategoryFilter />
    </div>
  )
}

export default LeftSidebar