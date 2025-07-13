import React, { useState } from "react";
import { Tabs, Box, Flex, IconButton, VStack, Text } from '@chakra-ui/react';
import { ColorModeButton } from "./ui/color-mode";
import { FaBars, FaTimes } from 'react-icons/fa';

const TitleBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleTabClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        // Close mobile menu after navigation
        setIsMenuOpen(false);
    };

    const navigationItems = [
        { id: "Page", label: "Home" },
        { id: "ProjectsTitle", label: "Projects" },
        { id: "SkillsTitle", label: "Skills" },
        { id: "WorkExperienceTitle", label: "Work Experience" },
        { id: "EducationTitle", label: "Education" }
    ];

    return (
        <>
            {/* Color Mode Button - Fixed top-right for all screen sizes */}
            <Box 
                position="fixed" 
                top="3" 
                right="3" 
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
            
            {/* Desktop Navigation */}
            <Flex justify="center" p="2" display={{ base: "none", md: "flex" }}>
                <Box position="fixed" minWidth="465px" m="0" zIndex="999">
                    <Tabs.Root 
                        colorPalette="purple" 
                        size="md" 
                        variant="subtle" 
                        background={"whiteAlpha.200"} 
                        borderColor={"blackAlpha.300"} 
                        borderWidth="1px" 
                        borderRadius="md" 
                        padding="1" 
                        style={{ backdropFilter: "blur(10px)" }}
                    >
                        <Tabs.List>
                            {navigationItems.map((item) => (
                                <Tabs.Trigger 
                                    key={item.id}
                                    value={item.id} 
                                    onClick={() => handleTabClick(item.id)}
                                >
                                    {item.label}
                                </Tabs.Trigger>
                            ))}
                        </Tabs.List>
                    </Tabs.Root>
                </Box>
            </Flex>

            {/* Mobile Hamburger Menu */}
            <Box display={{ base: "block", md: "none" }}>
                {/* Hamburger Button */}
                <Box 
                    position="fixed" 
                    top="3" 
                    left="3" 
                    zIndex="1001"
                >
                    <IconButton
                        aria-label="Open menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        background={"whiteAlpha.200"}
                        borderColor={"blackAlpha.200"}
                        borderWidth="1px"
                        borderRadius="md"
                        style={{ backdropFilter: "blur(10px)" }}
                        size="sm"
                        color="gray.800"
                        _dark={{ color: "white" }}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </IconButton>
                </Box>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <Box
                        position="fixed"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        bg="blackAlpha.600"
                        zIndex="1000"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <VStack
                            position="fixed"
                            top="16"
                            left="3"
                            right="3"
                            bg="white"
                            _dark={{ bg: "gray.800" }}
                            borderRadius="md"
                            p="4"
                            spacing="3"
                            boxShadow="xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {navigationItems.map((item) => (
                                <Text
                                    key={item.id}
                                    w="100%"
                                    p="3"
                                    textAlign="center"
                                    cursor="pointer"
                                    borderRadius="md"
                                    _hover={{ bg: "purple.50", _dark: { bg: "purple.900" } }}
                                    onClick={() => handleTabClick(item.id)}
                                    fontSize="lg"
                                    fontWeight="medium"
                                >
                                    {item.label}
                                </Text>
                            ))}
                        </VStack>
                    </Box>
                )}
            </Box>
        </>
    );
}

export default TitleBar;