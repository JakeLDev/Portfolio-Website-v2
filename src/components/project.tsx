import React from 'react';

interface ProjectProps {
    title: string;
    description: string;
    elementId: string;
    githubLink?: string;
    liveLink?: string;
    image?: string;
    linkedinLink?: string;
}

// add react prop for text
const Project = ({ title, 
                    description, 
                    elementId,
                    githubLink,
                    liveLink,
                    image,
                    linkedinLink }: ProjectProps) => {
    return (
        <div>
        <h1 id={elementId} className="text-3xl font-bold underline pt-14">
            {title}
        </h1>
        <p className="text-lg font-medium pt-4">
            {description}
        </p>
        <div className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium pt-4">
            { githubLink && <a id='github-button' 
                href={githubLink}
                className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950'
                target='_blank'
                rel="noreferrer noopener">
                GitHub
            </a> }
            { liveLink && <a id='live-button'
                href={liveLink}
                className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950'
                target='_blank'
                rel="noreferrer noopener">
                Live
            </a> }
            { linkedinLink && <a id='linkedin-button'
                href={linkedinLink}
                className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 hover:text-white active:scale-105 transition border-2 border-white border-opacity-40"
                target="_blank"
                rel="noreferrer noopener">
                <span className="opacity-70">LinkedIn</span>
            </a> }
                

        </div>
        </div>
    );
}

export default Project;