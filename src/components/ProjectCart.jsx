import React from 'react'
import pic from "../assets/byte.png"
import { Link } from 'react-router-dom'

const ProjectCart = ({
    title,
    src,
    href,
    color,
    techStack,
}) => {
    console.log(color)

    return (
        <Link to={href}>
            <div>
                <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                    <div className="relative">
                        <img
                            src={src}
                            alt={title}
                            className="aspect-video object-cover"
                        />
                        <div className={`absolute flex justify-center items-center text-white font-bold text-3xl top-0 left-0 w-full h-full ${color} bg-opacity-50`}>{title}</div>
                    </div>
                    <div className="flex flex-col px-4 py-2 h-24">
                        <div className="flex font-bold">Tech used:</div>
                        <div className="flex text-xs">{techStack}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCart