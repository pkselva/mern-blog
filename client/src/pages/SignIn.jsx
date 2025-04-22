import { Alert } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../services/product';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Signin() {

  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector(state => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all fields"));
    }

    try {
      dispatch(signInStart());
      const res = await loginUser(formData);
      if (!res.success) {
        return dispatch(signInFailure(res.error || "Something went wrong"));
      }

      dispatch(signInSuccess(res));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
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
            Log in to continue exploring stories, sharing your thoughts, and staying connected with the community.
          </p>
        </div>
        {/* right */}
        <div className='flex-1'>
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit}>
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
              {loading ? 'Signing In....' : 'Sign In'}
            </button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Create an account?</span>
            <Link to={"/sign-up"} className='text-blue-500'>
              Sign Up
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
