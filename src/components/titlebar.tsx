import React, { useEffect } from "react";
import { Tabs, Box, Flex } from '@chakra-ui/react';

const TitleBar = () => {
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
            <Flex justify="center" p="2">
                <Box position="fixed" m="2">
                    <Tabs.Root colorScheme="purple" size="md">
                        <Tabs.List>
                            <Tabs.Trigger value="Home">Home</Tabs.Trigger>
                            <Tabs.Trigger value="AboutMeTitle">About Me</Tabs.Trigger>
                            <Tabs.Trigger value="ProjectsTitle">Projects</Tabs.Trigger>
                            <Tabs.Trigger value="WorkExperienceTitle">Work Experience</Tabs.Trigger> 
                            {/* <Tab data-tab-id="AboutMeTitle">About Me</Tab>
                            <Tab data-tab-id="ProjectsTitle">Projects</Tab>
                            <Tab data-tab-id="WorkExperienceTitle">Work Experience</Tab> */}
                        </Tabs.List>
                        <Tabs.Content value="Home">
                            <h1>Home</h1>
                        </Tabs.Content>
                        <Tabs.Content value="AboutMeTitle"> 
                            <h1>About Me</h1>
                        </Tabs.Content>
                        <Tabs.Content value="ProjectsTitle">
                            <h1>Projects</h1>
                        </Tabs.Content>
                        <Tabs.Content value="WorkExperienceTitle">
                            <h1>Work Experience</h1>
                        </Tabs.Content>
                    </Tabs.Root>
                </Box>
            </Flex>
        </>
                                    // <Tabs.Trigger data-tab-id="Page">Home</Tabs.Trigger>
                                    // <Tab data-tab-id="AboutMeTitle">About Me</Tab>
                                    // <Tab data-tab-id="ProjectsTitle">Projects</Tab>
                                    // <Tab data-tab-id="WorkExperienceTitle">Work Experience</Tab>
        
    );
}

export default TitleBar;