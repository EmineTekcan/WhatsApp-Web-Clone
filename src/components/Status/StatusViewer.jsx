import React, { useEffect, useState } from 'react'
import stories from './DummyStory.jsx'
import ProgressBar from './ProgressBar.jsx'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const StatusViewer = () => {

    const navigate = useNavigate();

    const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNextStory = () => {

        if (currentStoryIndex < stories?.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
            setActiveIndex(activeIndex + 1);
        } else {
            setCurrentStoryIndex(0)
            setActiveIndex(0)
        }
    }

    useEffect(() => {
        const intervalid = setInterval(() => {
            handleNextStory();
        }, 2000)

        return () => clearInterval(intervalid)
    }, [currentStoryIndex])

    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <div>
            <div className=' relative flex justify-center items-center h-[100vh] bg-slate-900'>
                <div className='relative'>
                    <img
                        className='max-h-[96vh] object-contain'
                        src={stories[currentStoryIndex].image} alt='status image' />
                    <div className='absolute top-0 flex w-full'>
                        {
                            stories.map((item, index) => <ProgressBar key={index} duration={2000} index={index} activeIndex={activeIndex} />)
                        }
                    </div>
                </div>
                <div>
                    <BsArrowLeft
                        onClick={handleNavigate}
                        size={28}
                        className='text-white cursor-pointer absolute top-4 left-10 ' />
                    <AiOutlineClose
                        onClick={handleNavigate}
                        size={28}
                        className='text-white cursor-pointer absolute top-4 right-10' />
                </div>

            </div>
        </div>
    )
}

export default StatusViewer