import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ContectMe from './ContectMe';

const Sidebar = () => {
    const sidebarOptions = [
        {
            name: "Linkedin",
            icon: <FaLinkedinIn />,
            linkto: "https://www.linkedin.com/in/nikeshchaudhary52494/",
            color: "text-blue-500"
        },
        {
            name: "GitHub",
            icon: <FaGithub />,
            linkto: "https://github.com/Nikeshchaudhary52494",
            color: "text-orange-500"
        },
        {
            name: "Leetcode",
            icon: <SiLeetcode />,
            linkto: "https://leetcode.com/nikeshchaudhary52494/",
            color: "text-green-500"
        },
        {
            name: "Twitter",
            icon: <BsTwitterX />,
            linkto: "https://twitter.com/nikesh52494",
            color: "text-white"
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            linkto: "https://www.instagram.com/nikeshchaudhary52494/",
            color: "text-pink-500"
        },
    ]
    return (
        <>
            <div className='bg-[#1C1B23] flex pb-20 rounded-lg w-60 h-screen md:h-fit flex-col p-5'>
                <h3 className='text-slate-400 font-bold text-xl mb-10'>Socials</h3>
                {sidebarOptions.map((option) => (
                    <Link to={option.linkto}>
                        <p
                            className='text-slate-500 border-b py-6 cursor-pointer border-slate-700 flex gap-5 text-sm items-center'>
                            <span
                                className={`text-xl ${option.color}`}>{option.icon}
                            </span>
                            {option.name}
                        </p>
                    </Link>
                ))}
                <div className='flex md:hidden my-5'>
                    <ContectMe />
                </div>
            </div>
        </>
    )
}

export default Sidebar