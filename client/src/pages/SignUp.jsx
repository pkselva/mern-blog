import { Alert } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../services/product';

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!formData.userName || !formData.email || !formData.password) {
      setLoading(false);
      return setErrorMessage("Please fill out all fields");
    }

    try {
      const res = await registerUser(formData);
      setLoading(false);
      setErrorMessage(null);
      if (!res.success) {
        return setErrorMessage(res.error || "Something went wrong");
      }

      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setErrorMessage("Something went wrong");
    }
  };

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
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label>Your username</label>
              <input
                type="text"
                placeholder='Username'
                name='userName'
                onChange={handleOnChange}
                className='border border-gray-300 rounded-lg p-2' />
            </div>
            <div className='flex flex-col'>
              <label>Your email</label>
              <input
                type="email"
                placeholder='name@company.com'
                name='email'
                onChange={handleOnChange}
                className='border border-gray-300 rounded-lg p-2' />
            </div>
            <div className='flex flex-col'>
              <label>Your password</label>
              <input
                type="password"
                placeholder='************'
                name='password'
                onChange={handleOnChange}
                className='border border-gray-300 rounded-lg p-2' />
            </div >
            <button
              className={`p-2 rounded-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l hover:from-purple-500 hover:to-pink-500 hover:cursor-pointer ${loading ? 'opacity-55 cursor-not-allowed' : ''}`}
              type='submit'>
              {loading ? 'Signing Up....' : 'Sign Up'}
            </button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to={"/sign-in"} className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert
              // className="bg-red-100 text-red-500 p-2 text-center rounded-lg"
              className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}
