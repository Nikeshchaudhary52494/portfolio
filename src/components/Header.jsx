import React from 'react'
import myPic from "../assets/blackpic.jpg"
const Header = () => {
    return (
        <>
            <div className='flex items-center  w-full xs:gap-10 gap-2 bg-custom-background p-4 blur-container'>
                <div className='xs:h-28 h-20 w-20 xs:w-28 flex-shrink-0 border-4 rounded-full overflow-hidden'>
                    <img
                        className='w-full h-full object-cover'
                        src={myPic}
                        alt="Nikesh"
                    />
                </div>
                <div>
                    <h1 className='text-white font-bold xs:text-2xl'>Nikesh Chaudhary</h1>
                </div>
            </div>
        </>
    )
}

export default Header