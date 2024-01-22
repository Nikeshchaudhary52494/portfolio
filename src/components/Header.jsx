import React, { useEffect, useState } from 'react'
import myPic from "../assets/blackpic.jpg"
import { Cross, MenuIcon, X } from 'lucide-react'
import Sidebar from './Sidebar'
const Header = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleScroll = (event) => {
            if (isSidebarOpen) {
                event.preventDefault();
            }
        };

        const handleKeydown = (event) => {
            if (isSidebarOpen && (event.key === "ArrowUp" || event.key === "ArrowDown")) {
                event.preventDefault();
            }
        };

        document.body.addEventListener("wheel", handleScroll, { passive: false });
        document.body.addEventListener("keydown", handleKeydown);

        return () => {
            document.body.removeEventListener("wheel", handleScroll);
            document.body.removeEventListener("keydown", handleKeydown);
        };
    }, [isSidebarOpen]);


    return (
        <>
            <div className='flex relative items-center flex-col lg:flex-row w-full sm:gap-2 gap-4 rounded-lg bg-custom-background lg:p-8 p-4 blur-container'>
                <div
                    onClick={handleToggle}
                    className='top-2 md:hidden cursor-pointer absolute right-2'>
                    <MenuIcon className='text-white' />
                </div>

                <div
                    className={`w-screen md:hidden -top-4 absolute -left-10 transition-transform bg-black backdrop-filter bg-opacity-50 backdrop-blur-md transform ${isSidebarOpen ? 'translate-x-10' : '-translate-x-full'
                        }`}
                >
                    <X
                        onClick={handleToggle}
                        className='absolute top-5 left-52 text-white' />
                    <Sidebar />
                </div>

                <div className='xs:h-28 h-20 w-20 xs:w-28 flex-shrink-0 border-4 rounded-full overflow-hidden'>
                    <img
                        className='w-full h-full object-cover'
                        src={myPic}
                        alt="Nikesh"
                    />
                </div>
                <div>
                    <h1 className='text-white text-center font-bold xs:text-2xl'>I'm Nikesh Chaudhary</h1>
                    <p className='text-white text-center text-xs'>a full stack software developer from india</p>
                </div>
                <div className='flex-grow'></div>
                <div>
                    <button className='bg-blue-400 px-4 text-white py-2 rounded-lg'>Download resume</button>
                </div>
            </div>
        </>
    )
}

export default Header