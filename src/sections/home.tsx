import React from 'react';
import Title from '../components/title';

const Home = () => {

    return (
        <>
            <div className='pt-56'>
                {/* <img className="h-48 w-48 rounded-full object-cover border-[0.30rem] border-white shadow-xl m-auto" src={LinkedInPFP} alt="Profile Picture" /> */}
                <div className="">
                
                {/* Icon Profile Picture */}
                <div className='p-8'>
                    <p className="text-center w-4/5 max-w-2xl text-3xl font-bold mx-auto leading-[2] ">Hello! I'm Jake :)</p>
                    <p className="text-center w-4/5 max-w-2xl text-3xl font-bold mx-auto leading-[1.5]">I'm a Software Engineer at <a className="text-atlassian-blue secret-link font-extrabold [text-shadow:1px_1px_1px_rgb(255,255,255),-1px_1px_1px_rgb(255,255,255),-1px_-1px_1px_rgb(255,255,255),1px_-1px_1px_rgb(255,255,255)]" href='https://www.atlassian.com/' target="_blank">Atlassian</a> in Sydney, Australia. I'm currently working with React, Typescript and Java.</p>
                </div>
                
                {/* stolen the below, fix it up */}
                <div id='button-container' className='flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
                    <a id='github-button' href='' className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950'>GitHub</a>
                    <a className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:text-white active:scale-105 transition border-2 border-white border-opacity-40" href="https://www.linkedin.com/in//" target="_blank"><span className="opacity-70">LinkedIn</span></a>
                </div>
                
                </div>
            </div>
        </>
    );
}
export default Home;