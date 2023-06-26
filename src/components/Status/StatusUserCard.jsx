import React from 'react'
import { useNavigate } from 'react-router-dom'

const StatusUserCard = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/status/{userId}`)
    }

    return (
        <div
            onClick={handleNavigate}
            className='cursor-pointer flex items-center py-3 gap-1'>
            <div>
                <img
                    className='h-10 w-10 lg:w-12 lg:h-12 rounded-full'
                    src='https://cdn.pixabay.com/photo/2023/06/11/14/38/baby-8056153_1280.jpg' />
            </div>
            <div className='ml-2 text-white'>
                <p>pablo pandy</p>
            </div>
        </div>
    )
}

export default StatusUserCard