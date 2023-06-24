import React, { useState } from 'react'
import { TbCircleDashed } from 'react-icons/tb'
import { BiCommentDetail } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFilter } from 'react-icons/bs'
import ChatCard from './ChatCard/ChatCard'
import bg from '../assets/bg.PNG'

const HomePage = () => {

  const [queries, setQueries] = useState("");
  const [currentChat, setCurrentChat] = useState(null);

  const handleSearch = () => {

  }

  const handleClickChatCard = () => {
    setCurrentChat(true);
  }

  return (
    <div className='relative'>
      <div className=' py-14 bg-[#00a884]  w-full '>
      </div>

      <div className='flex bg-[#f0f2f5] h-[90vh] absolute top-6 mx-6 w-full'>

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
                  value={queries}
                  className='bg-slate-200  border-none outline-none pl-2'
                  type='text'
                  placeholder='Search or start new chat'
                  onChange={(e) => {
                    setQueries(e.target.value);
                    handleSearch(e.target.value);
                  }}
                />
              </div>
              <div className='ml-2'>
                <BsFilter size={25} />
              </div>
            </div>

          </div>

          {/* All Users Messages section */}
          <div className='bg-white overflow-y-scroll h-[76.8v]'>
            {queries && [1, 1, 1, 1].map((item) =>
              <div onClick={() => handleClickChatCard}>
                <hr />
                <ChatCard />
              </div>
            )}
          </div>



        </div>

        {/* Right section */}
        <div className='right-0 flex items-center justify-center'>
          <div className='w-[70%] flex flex-col items-center justify-center h-full'>
            <div className='w-full  self-center text-center'>
              <img src={bg} alt='bg-image' />
              <h1 className='text-4xl text-gray-600'>WhatsApp Web</h1>
              <p className='my-9'>send and receive message without keeping your phone online. Use WhatsApp on Up to 4 Linked devices and 1 phone at the same time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage