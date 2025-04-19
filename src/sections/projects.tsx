import Project from "../components/project";
import React from 'react';

const Projects = () => {
    return (
        <div className="flex justify-center">
            <div className="min-w-[70%] max-w-4xl justify-self-center">
                <Project 
                    title="Project 1" 
                    description="Description of Project 1"
                    elementId="Project1Title"
                    githubLink="https://github.com/JakeLDev/Workout-Tracker"/>
                <Project 
                    title="Project 2"
                    description="test" 
                    elementId="Project2Title"/>
                <Project 
                    title="Project 3"
                    description="test2"
                    elementId="Project3Title"/>
            </div>
        </div>
    );
}
export default Projects;