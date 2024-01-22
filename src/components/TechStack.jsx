import React from 'react';
import TechCard from './cards/TechCard';

const TechStack = () => {
    return (
        <div className="col-span-2 py-6 md:col-span-2 lg:col-span-3">
            <div className="text-xl font-medium mt-2 text-zinc-200 mb-5">
                What I know
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <TechCard
                    title="Frontend"
                    classaName="text-[#4f91f2]"
                    tech={[
                        'HTML',
                        'CSS',
                        'Tailwind',
                        'Javascript',
                        'Typescript',
                        'React Js',
                        'Next Js 13',
                    ]}
                />
                <TechCard
                    title="Backend"
                    classaName="text-[#f37c36]"
                    tech={[
                        'Node Js',
                        'Express Js',
                        'Next Auth'
                    ]}
                />
                <TechCard
                    title="Database"
                    classaName="text-[#e0558a]"
                    tech={[
                        'MySql',
                        'MongoDB',
                    ]}
                />
                <TechCard
                    title="Misc"
                    classaName="text-[#10c0a2]"
                    tech={[
                        'GIT',
                        'Vercel',
                        'Render',
                    ]}
                />
            </div>
        </div>
    );
};

export default TechStack;
