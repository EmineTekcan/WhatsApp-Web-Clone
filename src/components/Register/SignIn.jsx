import { Alert, Button, IconButton, Snackbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { login } from '../../redux/Auth/LoginSlice'

const SignIn = () => {

    const [inputData, setInputData] = useState({ email: '', password: '' })
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token")


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleSubmit = () => {
        dispatch(login(inputData))
        setOpen(true)
        refreshPage();
    }

    useEffect(() => {

        if (token)
            navigate("/")
    }, [token])

    const refreshPage = () => {
        navigate(window.location.pathname, { replace: true });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((values) => ({ ...values, [name]: value }));
    }

    return (
        <div>
            <div className='flex justify-center h-screen items-center'>
                <div className='w-[30%] p-10 shadow-md bg-white '>
                    <form
                        className='space-y-5'>
                        <div>
                            <p className='mb-2'>Email</p>
                            <input
                                placeholder='Enter your Email'
                                onChange={handleChange}
                                type='text'
                                name="email"
                                value={inputData.email}
                                className='py-2 outline outline-green-600 w-full rounded-md border px-1' />
                        </div>
                        <div>
                            <p className='mb-2'>Password</p>
                            <input
                                name="password"
                                placeholder='Enter your Password'
                                onChange={handleChange}
                                type='text'
                                value={inputData.password}
                                className='py-2 outline outline-green-600 w-full rounded-md border px-1' />
                        </div>

                        <div>
                            <Button onClick={handleSubmit} className='w-full' type='submit' variant='contained' color='success'>Sign In</Button>
                        </div>
                    </form>

                    <div className='flex space-x-3 items-center mt-5'>
                        <p className='m-0'>Create New Account</p>
                        <Button variant='text' onClick={() => navigate("/signup")} >signup</Button>
                    </div>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Login Successfull!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default SignIn