import React, { useState } from 'react'
import { BsArrowLeft, BsCheck2, BsPencil } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Profile = ({handleCloseOpenProfile}) => {

    const [flag, setFlag] = useState(false)
    const [name, setName] = useState("")

    const handleFlag = () => {
        setFlag(!flag)
    }

    const handleCheckClick = () => {
        setFlag(false);
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div className='w-full h-full'>
            {/* Header Section */}
            <div className='flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5 '>
                <BsArrowLeft
                    className='cursor-pointer text-2xl font-bold'
                    onClick={handleCloseOpenProfile}
                    size={20} />
                <p className='cursor-pointer font-semibold'>Profile</p>
            </div>

            {/* Image Section */}
            <div className='flex flex-col justify-center items-center my-12'>
                <label htmlFor='imgInput' >
                    <img src='https://cdn.pixabay.com/photo/2023/06/14/06/22/cat-8062388_1280.jpg'
                        alt='Profile Image'
                        className='rounded-full w-[15vw] h-[15vw] cursor-pointer'
                    />
                </label>

                <input
                    className='hidden'
                    type='file'
                    id='imgInput' />
            </div>

            {/* Content Name Section */}

            <div className='bg-white px-3 py-2'>
                <p className='py-3' >Your Name</p>

                {!flag && <div className='w-full flex justify-between items-center'>
                    <p className='py-3'>{name || "username"}</p>
                    <BsPencil
                        onClick={handleFlag}
                        size={20}
                        className="cursor-pointer"
                    />
                </div>}

                {
                    flag &&
                    <div className='w-full flex justify-between items-center'>
                        <input
                            value={name}
                            onChange={handleChange}
                            type='text'
                            placeholder='Enter your name'
                            className='w-[80%] outline-none border-b-2 border-blue-700 p-2 text-xs lg:text-base'
                        />
                        <BsCheck2
                            onClick={handleCheckClick}
                            size={25}
                            className='cursor-pointer'
                        />
                    </div>

                }

            </div>

            <div className='px-3 my-5'>
                <p className='py-10'>this is not your username, this name will be visible to your whatsapp contects.</p>
            </div>
        </div>
    )
}

export default Profile