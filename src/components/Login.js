import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        // Logic to toggle between sign in and sign up forms
        setIsSignInForm(!isSignInForm);

    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='background-image'></img>
            </div>

            <form className='w-3/12 absolute p-12 bg-black my-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             text-white rounded-lg bg-opacity-80'>

                <h1 className='font-bold text-white text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm &&
                    (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />)}

                <input type='text' placeholder='Email or phone number' className='p-4 my-4 w-full bg-gray-700' />

                {!isSignInForm &&
                    (<input type='password' placeholder='Set Password' className='p-4 my-4 w-full  bg-gray-700' />)}

                {!isSignInForm &&
                    (<input type='password' placeholder='confirm Password' className='p-4 my-4 w-full  bg-gray-700' />)}

                {isSignInForm &&
                    (<input type='password' placeholder=' Password' className='p-4 my-4 w-full  bg-gray-700' />)}

                <button className='p-4 my-6 bg-red-600 text-white rounded-lg w-full'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In Now"}
                </p>
            </form>

        </div>
    )
}

export default Login
