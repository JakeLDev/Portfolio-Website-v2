import Project from "../components/project";
import { Box } from '@chakra-ui/react';
import WAPOLImage from '../assets/WAPOL2.png';
import CasualPayImage from '../assets/CasualPayCalculator.png';
// import MomentumTradingImage from '../assets/MomentumTrading.png';
// import ResistanceImage from '../assets/Resistance.png';
import HygieneBotImage from '../assets/HygieneBot.png';
// import QFinSiteImage from '../assets/QFin-site2.png';
// import MeanReversionImage from '../assets/MeanReversionProject.png';
// import imagecoming from '../assets/image-coming.png';
import wordcountImage from '../assets/word_count2.png';
import ExactSearchImage from '../assets/ExactSearch.png';
import RovoDCConnectorImage from '../assets/RovoDCConnector.png';


const Projects = () => {
    return (
        <Box>
            {RovoDCConnector}
            {ExactSearch}
            {WordCount}
            {WAPOL}
            {PaycheckCalculator}
            {TwitterHygieneBot}
            {/* {MomentumTrading}
            {Resistance} */}
            {/* {QFinWebsite} */}
            {/* {MeanReversion} */}
        </Box>
    );
}
export default Projects;

const RovoDCConnector = (
    <Project
        title="Rovo DC Connector"
        description="Developed a native connector for Confluence Data Center, to allow it to connect to Atlassian's Rovo AI product. 
        This connector allows Rovo to access and index content from the on-premises Confluence Data Center instance, 
        enabling users to search for and access Confluence content with AI in a unified location in cloud with the rest of their data."
        elementId="RovoDCConnectorProject"
        patchNotesLink="https://confluence.atlassian.com/doc/confluence-9-4-release-notes-1528300438.html"
        image={RovoDCConnectorImage}
        status="On-going"
        duration="Confluence DC Project"
        skills={["Java", "Data Integration", "Atlassian Rovo", "Authentication", "Artificial Intelligence"]}
    />
)

const ExactSearch = (
    <Project
        title="Exact Search for Confluence DC"
        description="Optimized and extended content indexing capabilities for Confluence DC, allowing users to search for exact strings and phrases within documents. This feature was added to the Confluence DC OpenSearch integration. The feature request for this functionality was 16 years old with over 900 votes (CONFSERVER-14910)."
        elementId="ExactSearchProject"
        patchNotesLink="https://confluence.atlassian.com/doc/confluence-9-5-release-notes-1573487019.html"
        image={ExactSearchImage}
        status="Completed"
        duration="Confluence DC Project"
        skills={["Java", "Regex", "Lucene", "OpenSearch", "Performance Optimisation"]}
    />
)

const WordCount = (
    <Project 
        title="Word Count in the Confluence DC Editor"
        description="Solo developed a feature for the Confluence DC editor to count the number of words or characters in the open document. This feature was developed in TypeScript and React, and was integrated into the Confluence DC editor. The feature is seen and used by millions of users daily."
        elementId="WordCountProject"
        patchNotesLink="https://confluence.atlassian.com/doc/confluence-9-0-release-notes-1387867170.html"
        image={wordcountImage}
        status="Completed"
        duration="Confluence DC Project"
        skills={["TypeScript", "React", "TinyMCE", "Software Architecture"]}
    />
)

const WAPOL = (
    <Project 
        title="Crime Data Visualisation for the WA Police Force"
        description="Created an interactive desktop application for the Data Science and Analytics Division of the WA Police Force to visualize crime data trends on an interactive heat map of Western Australia. Developed in a team of six over the course of 3 months. I performed a team leadership role and was responsible for the data processing and visualization components."
        elementId="WAPOLProject"
        image={WAPOLImage}
        status="Completed"
        duration="University Project"
        skills={["Python", "Pandas", "PyQt5", "GIS", "SciPy", "Data Visualization", "Team Leadership"]}
    />
)

const PaycheckCalculator = (
    <Project 
        title="Casual Paycheck Calculator"
        description="Developed a web application to estimate the paycheck of a casual employee. The user inputs their hourly pay rate and penalty rates before either inputting their hours worked manually, or allowing the application to read the events on your google calendar and calculate the number of hours programmatically. The users pay rates and hours are used to estimate the size of the users paycheck."
        elementId="CasualPayProject"
        image={CasualPayImage}
        githubLink="https://github.com/JakeLDev/Casual-Pay-Calculator"
        status="Completed"
        duration="Personal Project"
        skills={["React", "TypeScript", "Google Calendar API", "Web Development"]}
    />
)

// const MomentumTrading = (
//     <Project 
//         title="Momentum Trading Algorithm"
//         description="Created a set of algorithms to trade cryptocurrencies, based around the trading strategy of 'momentum trading'. Worked in a team of 3 people to create a set of Python algorithms with the goal of achieving a positive return when trading on 2020 price data for popular cryptocurrencies. Our algorithm was tested against both the market and other teams' algorithms."
//         elementId="MomentumTradingProject"
//         image={MomentumTradingImage}
//         githubLink="https://github.com/QFinUWA/2021-Momentum-Trading-Buy-Low-Sell-Lower"
//         status="Completed"
//         duration="QFin UWA Project"
//         skills={["Python", "Gemini Modules", "Numpy", "Pandas", "Algorithmic Trading", "Cryptocurrency"]}
//     />
// )

// const Resistance = (
//     <Project 
//         title="'The Resistance' Card Game Artificial Intelligence Agent"
//         description="Researched and developed a game-playing Artificial Intelligence agent to play the card game 'The Resistance' to compete in a tournament at UWA. We created an agent that utilizes Bayes' Rule for calculating probabilities in a Bayesian, imperfect information game. Received full marks for Player vs Player performance."
//         elementId="ResistanceProject"
//         image={ResistanceImage}
//         githubLink="https://github.com/JakeLDev/The-Resistance-AI-CITS3001"
//         status="Completed"
//         duration="University Project"
//         skills={["Python", "Artificial Intelligence", "Bayesian Inference", "Game Theory", "Probability"]}
//     />
// )

const TwitterHygieneBot = (
    <Project
        title="Twitter Hygiene Bot"
        description="Twitter Bot that tweets at set intervals to give reminders on commonly forgotten hygiene procedures. Targeted at people new to living alone. For example: A Tweet every 3 months to remind you to change your toothbrush! Undertaken to learn about serverless architecture and AWS Lambda."
        elementId="HygieneBotProject"
        image={HygieneBotImage}
        githubLink="https://github.com/JakeLDev/Twitter-Hygiene-Bot"
        liveLink="https://twitter.com/HygieneBot"
        status="Live"
        duration="Personal Project"
        skills={["AWS Lambda", "AWS EventBridge", "Twitter API", "Python", "Serverless"]}
    />
)

// const QFinWebsite = (
//     <Project 
//         title="QFin UWA Website"
//         description="Created a Web Application and Email Domain for the QFin UWA club which displays what the club is about; our events, executive team and committee, and our sponsors. The site is accessible to both desktop and mobile users. Built as part of my role as Executive Director of Trading."
//         elementId="QFinWebsiteProject"
//         image={QFinSiteImage}
//         githubLink="https://github.com/QFinUWA/qfin-website"
//         liveLink="https://qfinuwa.com"
//         status="Deprecated"
//         duration="QFin UWA Project"
//         skills={["React", "HTML", "CSS", "JavaScript", "Responsive Design", "Club Management"]}
//     />
// )

// const MeanReversion = (
//     <Project 
//         title="Trading Team Project - Mean Reversion"
//         description="Created a project for the QFin Trading Team to complete in Semester 1, 2022. This Project was based on trading on the concept of Mean Reversion. I provided the team with a custom back-testing framework to allow them to test their strategies against historical data. The project was completed by 3 teams of 4 students."
//         elementId="MeanReversionProject"
//         image={MeanReversionImage}
//         githubLink="https://github.com/QFinUWA/Mean-Reversion-Trading-Team-Project-Semester-1-2022"
//         status="Completed"
//         duration="QFin UWA Project"
//         skills={["Python", "Pandas", "Numpy", "Alpha Vantage APIs", "Custom Back-testing Framework", "Financial Analysis"]}
//     />
// )