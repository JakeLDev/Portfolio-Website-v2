import Project from "../components/project";
import React from 'react';
import { Flex, Container } from '@chakra-ui/react';
import LinkedInPFP from '../assets/LinkedinPFP-square.jpg';

const Projects = () => {
    return (
        <Flex justify="center">
            <Container minW="70%" maxW="4xl" mt={"6"} justifySelf="center">
                <Project 
                    title="Project 1" 
                    description="Description of Project 1fasdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwww"
                    elementId="Project1Title"
                    image={LinkedInPFP}
                    githubLink="https://github.com/JakeLDev/Workout-Tracker"
                    liveLink="https://jakelyell.dev/"/>
                <Project 
                    title="Project 2"
                    description="test" 
                    elementId="Project2Title"/>
                <Project 
                    title="Project 3"
                    description="test2"
                    elementId="Project3Title"/>
            </Container>
        </Flex>
    );
}
export default Projects;