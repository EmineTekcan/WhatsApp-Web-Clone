import React, { useState } from 'react'
import { TbCircleDashed } from 'react-icons/tb'
import { BiCommentDetail } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical } from 'react-icons/bs'
import ChatCard from './ChatCard/ChatCard'
import bg from '../assets/bg.PNG'
import MessageCard from './MessageCard/MessageCard'
import { ImAttachment } from 'react-icons/im'
import { IoSendSharp } from 'react-icons/io5'
import './HomePage.css'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile/Profile'

const HomePage = () => {

  const [queries, setQueries] = useState("");
  const [currentChat, setCurrentChat] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [isProfile, setIsProfile] = useState(false)
  const navigate = useNavigate();

  const handleSearch = () => {

  }

  const handleCreateMessage = () => {

  }

  const handleClickChatCard = () => {
    setCurrentChat(true);
  }

  const handleNavigate = () => {
    setIsProfile(true);
  }

  const handleCloseOpenProfile = () => {
    setIsProfile(false);
  }

  return (
    <div className='relative bg-slate-400'>
      <div className=' py-14 bg-[#00a884]  w-full '>
      </div>

      <div className='flex bg-[#f0f2f5] h-[90vh] absolute top-6 mx-6 w-[97%]'>

        {/* Left section */}
        <div className='left-0 w-[30%] h-full bg-[#e8e9ec]'>

          {/* Profile Section */}
          {
            isProfile && <Profile handleCloseOpenProfile={handleCloseOpenProfile} />
          }

          {
            !isProfile && <div className='w-full'>


              {/* Left Header section */}
              {
                <div className='flex justify-between it p-3'>
                  <div
                    className='flex items-center space-x-3 justify-center'>
                    <img
                      onClick={handleNavigate}
                      className='rounded-full w-10 h-10 cursor-pointer'
                      src='https://cdn.pixabay.com/photo/2023/06/12/12/04/duck-8058344_1280.jpg'
                      alt='Progile image'
                    />
                    <p>username</p>
                  </div>
                  <div className='space-x-3 text-2xl flex self-center'>
                    <TbCircleDashed
                      className='cursor-pointer'
                      size={20}
                      onClick={() => navigate("/status")}
                    />
                    <BiCommentDetail size={20} />
                  </div>
                </div>
              }

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

            </div>}

          {/* All Users Messages section */}
          <div className='bg-white overflow-y-scroll h-[76.8v]'>
            {queries && [1, 1, 1, 1].map((item) =>
              <div onClick={handleClickChatCard}>
                <hr />
                <ChatCard />
              </div>
            )}
          </div>

        </div>

        {/* -----------------Right section ---------------*/}

        {/*No click ChatCard - Right section */}
        {!currentChat && (
          <div className='right-0 flex items-center justify-center'>
            <div className='w-[70%] flex flex-col items-center justify-center h-full'>
              <div className='w-full  self-center text-center'>
                <img src={bg} alt='bg-image' />
                <h1 className='text-4xl text-gray-600'>WhatsApp Web</h1>
                <p className='my-9'>send and receive message without keeping your phone online. Use WhatsApp on Up to 4 Linked devices and 1 phone at the same time</p>
              </div>
            </div>
          </div>
        )}

        {/*Click ChatCard - Right section */}
        {
          currentChat &&
          <div className='w-full bg-[#f0f2f5]'>

            {/* Header Section */}
            <div className='flex justify-between'>
              <div className='py-3 space-x-4 flex items-center px-3'>
                <img
                  className='w-10 h-10 rounded-full'
                  src='https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_1280.jpg'
                  alt='Bg Image' />
                <p>
                  username
                </p>
              </div>
              <div className='py-3 flex space-x-4 items-center px-3'>
                <AiOutlineSearch size={20} />
                <BsThreeDotsVertical size={20} />
              </div>
            </div>

            {/* Message Section */}
            <div className='px-10 h-[80vh]  overflow-y-scroll  bg-blue-200'>
              <div className='space-y-1 flex flex-col justify-center py-2'>
                {
                  [1, 2, 3, 2, 2].map((i) => <MessageCard messageContent={"Message"} isReqUser={i % 2 == 0} />)
                }
              </div>
            </div>

            {/* Footer Section */}
            <div className=' bg-[#f0f2f5] md:w-[70%] lg:w-[77%] absolute bottom-0 text-xl'>
              <div className='relative flex items-center justify-center gap-4 m-3 mx-4'>
                <BsEmojiSmile className='cursor-pointer' size={20} />
                <ImAttachment className='cursor-pointer' size={20} />

                <input
                  onKeyPress={(e) => {
                    if (e.key == "Enter") {
                      handleCreateMessage();
                      setMessageContent("");
                    }
                  }}
                  placeholder='Type message'
                  value={messageContent}
                  className='outline-none flex-1 py-2 border-none bg-white pl-4 rounded-md'
                  type='text'
                  onChange={(e) => setMessageContent(e.target.value)} />
                {messageContent === "" && <BsMicFill className='cursor-pointer' size={20} />}
                {messageContent !== "" && <IoSendSharp className='cursor-pointer' size={20} />}
              </div>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default HomePage