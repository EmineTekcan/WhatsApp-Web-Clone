import { Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { BsArrowLeft, BsCheck2 } from 'react-icons/bs'

const NewGroup = () => {

    const [isImageUploading, setIsImageUploading] = useState(false)
    const [groupName, setGroupName] = useState("")
    return (
        <div className='w-full h-full'>
            <div className='flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5'>
                <BsArrowLeft className='cursor-pointer font-bold' />
                <p
                    className='text-xl font-semibold'
                >New Group</p>
            </div>

            <div className='flex flex-col justify-center items-center my-12'>
                <label
                    className='relative'
                    htmlFor='imgInput'>
                    <div className='bg-slate-300 p-5 rounded-full'>
                        <img width={150} height={150} src='https://static.thenounproject.com/png/1138095-200.png' alt='' />

                        {
                            isImageUploading && <CircularProgress className='absolute top-[5rem] left-[6rem]' />
                        }
                    </div>
                </label>

                <input
                    value={""}
                    id='imgInput'
                    type='file'
                    className='hidden'
                    onChange={() => console.log("image on change")}
                />
            </div>

            <div className='w-full flex justify-between items-center py-2 px-5'>
                <input
                    value={groupName}
                    placeholder='Group Subject'
                    className='w-full outline-none border-b-2 border-green-700 px-2 bg-transparent'
                    type='text'
                    onChange={(e) => setGroupName(e.target.value)} />
            </div>

            {groupName &&
                <div
                    className='py-10 bg-slate-200 flex items-center justify-center'
                >
                    <Button>
                        <div
                            className='bg-[#0c977d] rounded-full p-4'
                        >
                            <BsCheck2
                                className='text-white font-bold text-3xl'
                                size={20} />
                        </div>
                    </Button>
                </div>}
        </div>
    )
}

export default NewGroup