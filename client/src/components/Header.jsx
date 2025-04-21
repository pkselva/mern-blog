import React from 'react'
import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className='border-b-2'>
            <Link to={"/"} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg text-white'>
                    Karthick's
                </span>
                Blog
            </Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden sm:inline'
                />
            </form>
            <Button className="sm:hidden p-2 bg-white border border-gray-200 hover:bg-gray-100 transition w-12 h-10" color="gray" pill>
                <AiOutlineSearch className="text-black dark:text-white size-5" />
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className="p-2 bg-white border border-gray-200 hover:bg-gray-100 transition w-12 h-10" color="gray" pill>
                    <FaMoon className="text-black dark:text-white" />
                </Button>
                <Link to={"/sign-in"}>
                    <Button className="px-3 py-2 bg-white border border-gray-200 hover:bg-gray-100 transition text-black dark:text-white" color="gray" pill>
                        Sign In
                    </Button>
                </Link>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink active={path === "/"} as={'div'}>
                    <Link to={"/"}>
                        Home
                    </Link>
                </NavbarLink>
                <NavbarLink active={path === "/about"} as={'div'}>
                    <Link to={"/about"}>
                        About
                    </Link>
                </NavbarLink>
                <NavbarLink active={path === "/projects"} as={'div'}>
                    <Link to={"/projects"}>
                        Projects
                    </Link>
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    )
}
