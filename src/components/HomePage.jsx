import React from 'react'
import { TbCircleDashed } from 'react-icons/tb'
import { BiCommentDetail } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFilter } from 'react-icons/bs'

const HomePage = () => {
  return (
    <div className='relative'>
      <div className=' py-14 bg-[#00a884]  w-full '>
      </div>

      <div className='flex bg-[#f0f2f5] h-[90vh] absolute top-6 left-6 w-full'>

        {/* Left section */}
        <div className='left-0 w-[30%] h-full bg-[#e8e9ec]'>

          <div className='w-full'>

            {/* Left Header section */}
            <div className='flex justify-between it p-3'>
              <div className='flex items-center space-x-3 justify-center'>
                <img className='rounded-full w-10 h-10 cursor-pointer' src='https://cdn.pixabay.com/photo/2023/06/12/12/04/duck-8058344_1280.jpg' alt='Progile image' />
                <p>username</p>
              </div>
              <div className='space-x-3 text-2xl flex self-center'>
                <TbCircleDashed size={25} />
                <BiCommentDetail size={25} />
              </div>
            </div>

            {/* Left Input section */}
            <div className='relative flex justify-center items-center bg-white py-4 px-3'>
              <div className='flex flex-row text-xs lg:text-base bg-slate-200 rounded-md w-[93%] pl-2 py-2' >
                <AiOutlineSearch size={20} />
                <input
                  className='bg-slate-200  border-none outline-none pl-2'
                  type='text'
                  placeholder='Search or start new chat'
                />
              </div>
              <div className='ml-2'>
                <BsFilter size={25} />
              </div>
            </div>

          </div>

        </div>

        {/* Right section */}
        <div className='right-0'>

        </div>
      </div>
    </div>
  )
}

export default HomePage