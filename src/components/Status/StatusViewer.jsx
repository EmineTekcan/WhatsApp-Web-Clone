import React, { useState } from 'react'
import stories from './DummyStory.jsx'

const StatusViewer = () => {

    const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

    return (
        <div>
            <div className='flex justify-center items-center h-[100vh] bg-slate-900'>
                <div className='relative'>
                    <img
                        className='max-h-[96vh] object-contain'
                        src={stories[currentStoryIndex].image} alt='status image' />
                </div>
            </div>
        </div>
    )
}

export default StatusViewer