import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const SelectedMember = ({handleRemoveMember,member}) => {
  return (
    <div className='flex items-center bg-slate-300 rounded-full'>
        <img
        className='w-7 h-7 rounded-full'
         alt='group image'
         src='https://cdn.pixabay.com/photo/2023/06/21/15/07/butterfly-8079524_1280.jpg'
         />
         <p
         className='px-2'
         >username</p>
         <AiOutlineClose
         onClick={handleRemoveMember}
         className='pr-1 cursor-pointer'
         size={20} />
    </div>
  )
}

export default SelectedMember