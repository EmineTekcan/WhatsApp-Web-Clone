import { Alert, Button, IconButton, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/material/Icon';

const Signup = () => {

    const [inputData, setInputData] = useState({ full_name: "", email: "", password: "" })
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((values) => ({ ...values, [name]: value }))
    }

    return (
        <div>
            <div className='flex justify-center h-screen items-center'>
                <div className='w-[30%] p-10 shadow-md bg-white '>
                    <form
                        className='space-y-5'
                        onSubmit={handleSubmit}>
                        <div>
                            <p className='mb-2'>Full Name</p>
                            <input
                                placeholder='Enter username'
                                onChange={handleChange}
                                type='text'
                                value={inputData.full_name}
                                className='py-2 outline outline-green-600 w-full rounded-md border px-1' />
                        </div>
                        <div>
                            <p className='mb-2'>Email</p>
                            <input
                                placeholder='Enter your Email'
                                onChange={handleChange}
                                type='text'
                                value={inputData.email}
                                className='py-2 outline outline-green-600 w-full rounded-md border px-1' />
                        </div>
                        <div>
                            <p className='mb-2'>Password</p>
                            <input
                                placeholder='Enter your Password'
                                onChange={handleChange}
                                type='text'
                                value={inputData.password}
                                className='py-2 outline outline-green-600 w-full rounded-md border px-1' />
                        </div>

                        <div>
                            <Button onClick={handleSubmit} className='w-full' type='submit' variant='contained' color='success'>Sign Up</Button>
                        </div>
                    </form>

                    <div className='flex space-x-3 items-center mt-5'>
                        <p className='m-0'>Already have an account?</p>
                        <Button variant='text' onClick={() => navigate("/signin")} >signin</Button>
                    </div>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your Account Successfully Created!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Signup