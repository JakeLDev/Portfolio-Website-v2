import WorkExperience from "../components/workExperience";
import React from 'react';
import { Box } from '@chakra-ui/react';
import AtlassianLogo from '../assets/Atlassian-Logo-2687666607.png';
import QFinLogo from '../assets/QFin-Logo2.png';
import VinniesLogo from '../assets/Gray+Design+Vinnies+logo.jpg';
import CFCLogo from '../assets/CFC.png';

const WorkExperiences = () => {
    return (
        <Box>
                <WorkExperience 
                    company="Atlassian" 
                    position="Software Engineer"
                    duration="January 2023 - Present"
                    image={AtlassianLogo}
                    imageHeight="100px"
                    description="Joined Atlassian in January 2023 as a Graduate Software Engineer. Atlassian is a software company that develops products primarily for software teams. My role involves working on both frontend and backend development for Atlassian's Confluence product. Developing new features for Confluence Data Center, a product that allows users to collaborate on documents and share information. The product is used by both large and small companies worldwide. My team is responsible for developing new features for the product, as well as maintaining and fixing bugs in the existing codebase when they occur."
                    elementId="AtlassianExperience"
                    companyLink="https://www.atlassian.com/"
                    location="Sydney, Australia"
                    skills={["Java", "React", "JavaScript", "TypeScript", "Kotlin", "REST APIs", "Agile Development", "Git", "CI/CD"]}
                />
                
                <WorkExperience 
                    company="QFin UWA" 
                    position="Executive Director of Trading"
                    duration="November 2021 - August 2022"
                    image={QFinLogo}
                    imageHeight="100px"
                    description="Worked as the Executive Director of Trading at QFin UWA for 2022. QFin is a club that focuses on trading stocks and cryptocurrencies, utilizing algorithmic approaches. The role involved creating, running and participating in projects for 2022's Trading Team, along with organizing and running some trading-based events and workshops. I built both a website and an algorithm back-testing framework for the club over summer. As a member of the Executive team, I was responsible for managing the trading team and organizing events."
                    elementId="QFinExperience"
                    companyLink="https://qfinuwa.com"
                    location="Perth, Australia"
                    skills={["React", "HTML", "CSS", "JavaScript", "Python", "Pandas", "Numpy", "Alpha Vantage APIs", "Trading Algorithms"]}
                />
                
                <WorkExperience 
                    company="St Vincent de Paul (Vinnies WA)" 
                    position="Web Developer"
                    duration="December 2021 - June 2022"
                    image={VinniesLogo}
                    imageHeight="100px"
                    description="Worked as a Web Developer creating the new intranet system for Vinnies WA called the 'Vintranet'. This private site hosts all internal documents, templates and forms for Vinnies WA, and is used by hundreds of staff and volunteers. I worked with the IT team to develop the site, and populate it with all the necessary documents and forms. Developed and populated a new intranet system for Vinnies WA, for use across 52 stores, warehouse depos, and head office staff."
                    elementId="VinniesExperience"
                    companyLink="https://www.vinnies.org.au/"
                    location="Perth, Australia"
                    skills={["HTML", "CSS", "JavaScript", "Custom CMS", "Content Management", "Document Management"]}
                />
                
                <WorkExperience 
                    company="Coders for Causes UWA" 
                    position="Volunteer Software Engineer"
                    duration="November 2021 - March 2022"
                    image={CFCLogo}
                    imageHeight="100px"
                    description="Volunteer Developer for the Coders For Causes club at UWA. A club that provides volunteer software engineering teams for non-profit companies and charities. I participated in one of the summer projects for the Western Australian Institute of Sport by creating a web application for the track and field division. Developed a Web Application for WAIS to help visualise the performance of pole vaulters in training. We incorporated computer vision software and user input to allow coaches to best train their athletes. Worked in a large team of volunteers to develop the full stack of this application."
                    elementId="CFCExperience"
                    companyLink="https://codersforcauses.org/"
                    location="Perth, Australia"
                    skills={["Vue.js", "Django", "HTML", "CSS", "JavaScript", "Docker", "PostgreSQL", "Computer Vision"]}
                />
        </Box>
    );
}

export default WorkExperiences;