import React from 'react'
import Projects from './Projects'
import { projectCard } from '../utils/data'
import TechStack from './TechStack'
const MainSection = () => {
    return (
        <>
            <div>
                <Projects title="Projects" data={projectCard} />
                <TechStack />
            </div>
        </>
    )
}

export default MainSection