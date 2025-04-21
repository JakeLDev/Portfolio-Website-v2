import React from "react";
import { Tabs, Box, Flex } from '@chakra-ui/react';
import { ColorModeButton } from "./ui/color-mode";

const TitleBar = () => {
    const handleTabClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Color Mode Button - Positioned in top right */}
            <Box 
                position="fixed" 
                top="5" 
                right="5" 
                zIndex="1000"
            >
                <ColorModeButton 
                    background={"whiteAlpha.200"} 
                    borderColor={"blackAlpha.200"}
                    borderWidth="1px"
                    borderRadius="md" 
                    style={{ backdropFilter: "blur(10px)" }} 
                />
            </Box>
            
            {/* Title Bar - Centered */}
            <Flex justify="center" p="2">
                <Box position="fixed" m="2" zIndex="999">
                    <Tabs.Root colorPalette="purple" size="md" variant="subtle" background={"whiteAlpha.200"} borderColor={"blackAlpha.200"} borderWidth="1px" borderRadius="md" padding="1" style={{ backdropFilter: "blur(10px)" }}>
                        <Tabs.List>
                            <Tabs.Trigger value="Page" onClick={() => handleTabClick("Page")}>Home</Tabs.Trigger>
                            <Tabs.Trigger value="AboutMeTitle" onClick={() => handleTabClick("AboutMeTitle")}>About Me</Tabs.Trigger>
                            <Tabs.Trigger value="ProjectsTitle" onClick={() => handleTabClick("ProjectsTitle")}>Projects</Tabs.Trigger>
                            <Tabs.Trigger value="WorkExperienceTitle" onClick={() => handleTabClick("WorkExperienceTitle")}>Work Experience</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </Box>
            </Flex>
        </>
    );
}

export default TitleBar;