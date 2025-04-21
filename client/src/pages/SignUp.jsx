import { Button, Label, Textarea, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-2xl mx-auto flex-col gap-5 md:flex-row md:items-center'>
        {/* left */}
        <div className='flex-1'>
          <Link to={"/"} className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg text-white'>
              Karthick's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            Create an account to join our community.
            Share your thoughts and connect with others who love great content just like you.
          </p>
        </div>
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div className=''>
              <label>Your username</label>
              <TextInput type="text" placeholder='Username' id='userName'/>
            </div>
            <div className=''>
              <label>Your email</label>
              <TextInput type="text" placeholder='name@company.com' id='email'/>
            </div>
            <div className=''>
              <label>Your password</label>
              <TextInput type="password" placeholder='********' id='password'/>
            </div >
            <button className='p-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l hover:from-purple-500 hover:to-pink-500 hover:cursor-pointer'>
              Sign Up
            </button>
            <div className='flex gap-2 text-sm'>
              <span>Have an account?</span>
              <Link to={"/sign-in"} className='text-blue-500'>
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
