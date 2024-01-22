import React from 'react'

const Sidebar = () => {
    const sidebarOptions = [
        "Linkedin",
        "GitHub",
        "Leetcode",
        "Twitter",
        "Instageam"
    ]
    return (
        <>
            <div className='bg-[#1C1B23] flex flex-col gap-4 p-4'>
                <h3>Socials</h3>
                {sidebarOptions.map((option) => (
                    <p className='text-slate-300'>{option}</p>
                ))}
            </div>
        </>
    )
}

export default Sidebar