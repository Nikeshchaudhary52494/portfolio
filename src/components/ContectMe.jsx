import { Link } from 'react-router-dom'
import React from 'react'

const ContectMe = () => {
    return (
        <>
            <Link to='mailto:your.nikeshchaudhary52494@gmail.com'>
                <div className='flex justify-end p-2'>
                    <button className='bg-green-400 p-2 rounded-lg text-white'>Contect me</button>
                </div>
            </Link>
        </>
    )
}

export default ContectMe