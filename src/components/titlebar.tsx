import React, { useEffect, useState } from "react";
import { Tabs, Tab } from '@nextui-org/react'

const TitleBar = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const tabs = document.querySelectorAll("[data-tab-id]");
        tabs.forEach(tab => {
            if (tab) {
                const handleScroll = () => {
                    const tabKey = tab.getAttribute("data-tab-id") || "";
                    console.log(tabKey);
                    const aboutMe = document.getElementById(tabKey);
                    aboutMe?.scrollIntoView({behavior: "smooth"});
                };
    
                tab.addEventListener("click", handleScroll);
    
                // Cleanup the event listener on component unmount
                return () => {
                    tab.removeEventListener("click", handleScroll);
                };
            }
        }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount
            
        });


    return (
        <>
            <div className="flex justify-center p-2">
                <Tabs className="fixed" key="md" size="md" radius="full" color="secondary" variant='solid' aria-label="Tabs sizes">
                    <Tab data-tab-id="AboutMeTitle" key="About Me" title="About Me"/>
                    <Tab data-tab-id="ProjectsTitle" key="Projects" title="Projects"/>
                    <Tab data-tab-id="WorkExperienceTitle" key="Work Experience" title="Work Experience"/>
                </Tabs>
            </div>
        </>
    );
}

export default TitleBar;