import React from 'react'
import Projects from './Projects'
import { projectCard } from '../utils/data'
import TechStack from './TechStack'
import ExtraProjects from './ExtraProjects'
const MainSection = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <Projects title="Projects" data={projectCard} />
                <ExtraProjects />
                <TechStack />
            </div>
        </>
    )
}

export default MainSection