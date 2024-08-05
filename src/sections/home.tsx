import React from 'react';
import Title from '../components/title';

const Home = () => {

    return (
        <>
            <div className="h-10"></div>
            <div className="flex justify-center">
                <Title text="" elementId="Home"/>
                <p className="text-center w-3/5 max-w-md">Hello! I'm Jake. I'm a software engineer at Atlassian in Sydney. I'm currently working as a Full Stack Engineer on Confluence Data Center, using primarily Java, and TypeScript.</p>
            </div>
        </>
    );
}
export default Home;