import React, { useState } from 'react'
import {BsArrowLeft} from 'react-icons/bs'

const CreateGroup = () => {

  const [newGroup, setNewGroup] = useState(false)


  return (
    <div className='w-full h-full'>
      {!newGroup && <div
      className='flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5'
      >
        <BsArrowLeft
        className='cursor-pointer font-bold'
        size={20} />
        <p className='text-xl font-semibold' >Add Group Participals</p>
      </div>}
    </div>
  )
}

export default CreateGroup