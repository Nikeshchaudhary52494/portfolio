import React from 'react'
import pic from "../assets/byte.png"

const ProjectCart = ({
    title,
    src,
    href,
    techStack,
}) => {

    return (
        <div>
            <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                    src={pic}
                    alt="spotify"
                    className="aspect-video object-cover"
                />
                <div className="flex flex-col px-4 py-2 h-24">
                    <div className="flex font-bold">{title}</div>
                    <div className="flex text-xs">{techStack}</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCart