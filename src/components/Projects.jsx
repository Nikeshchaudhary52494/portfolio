import React from 'react'
import ProjectCart from './ProjectCart'

const Projects = ({ title, data }) => {
    return (
        <>
            <section className="grid gap-8 p-5 mt-5 md:p-0">
                <div className="text-xl font-medium text-zinc-200">{title}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {data.map((card) => (
                        <ProjectCart
                            href={card.href}
                            key={card.id}
                            title={card.title}
                            src={card.imageUrl}
                            color={card.color}
                            techStack={card.techStack}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Projects