import React from 'react'
import { Link } from 'react-router-dom'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitterX, BsX, BsXCircle } from 'react-icons/bs'

export default function FooterComp() {
    return (
        <div className='border border-t-8 p-5 border-teal-500 rounded-2xl'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex sm:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to={"/"} className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg text-white'>
                                Karthick's
                            </span>
                            Blog
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 mt-4 text-gray-500'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-bold uppercase'>About</h1>
                            <div className='flex flex-col gap-2 text-sm font-medium mt-4'>
                                <Link
                                    to={"/sign-up"}>
                                    My Other Site
                                </Link>
                                <Link to={"/about"}>
                                    Karthick's Blog
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-bold uppercase'>Follow Us</h1>
                            <div className='flex flex-col gap-2 text-sm font-medium mt-4'>
                                <a
                                    href="https://github.com/pkselva"
                                    target='_blank' >
                                    Github
                                </a>
                                <Link to={"#"}>
                                    Discord
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-bold uppercase'>Legal</h1>
                            <div className='flex flex-col gap-2 text-sm font-medium mt-4'>
                                <Link to={"#"} >
                                    Privacy Policy
                                </Link>
                                <Link to={"#"}>
                                    Terms &amp; Conditions
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-5 border opacity-10' />
            <div className='text-gray-600 w-full sm:flex sm:items-center sm:justify-between'>
                <footer className="text-sm">
                    &copy; {new Date().getFullYear()} <Link to={'#'}>Karthick's Blog.</Link> All rights reserved.
                </footer>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Link to={"#"}><BsFacebook /></Link>
                    <Link to={"#"}><BsInstagram /></Link>
                    <Link to={"#"}><BsTwitterX /></Link>
                    <a href='https://github.com/pkselva' target='_blank'><BsGithub /></a>
                    <Link to={"#"}><BsDribbble /></Link>
                </div>
            </div>
        </div>
    )
}
