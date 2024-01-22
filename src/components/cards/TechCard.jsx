import React from 'react';

const TechCard = ({ title, classaName, tech }) => {
  return (
    <div className={`flex-1 flex flex-col gap-4 p-4 rounded-md shadow-lg bg-[#1C1B23]`}>
      <div className={`${classaName} font-medium text-lg tracking-wide`}>
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <div
            key={item}
            className='rounded-md  text-white border-slate-600 border text-xs p-2'>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
