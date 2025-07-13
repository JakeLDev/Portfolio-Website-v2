import React, { useState, useEffect } from 'react';
import { Box, Flex, Container, Text, Heading, Image, SimpleGrid, VStack, Badge } from '@chakra-ui/react';
import JakePortrait from '../assets/JakeLyellTiny.jpg';

const AboutMe = () => {
    const [age, setAge] = useState<string>('');

    const skills = [
        { name: "Python", category: "Programming" },
        { name: "Java", category: "Programming" },
        { name: "JavaScript", category: "Programming" },
        { name: "TypeScript", category: "Programming" },
        { name: "React", category: "Frontend" },
        { name: "HTML", category: "Frontend" },
        { name: "CSS", category: "Frontend" },
        { name: "Vue.js", category: "Frontend" },
        { name: "Git", category: "Tools" },
        { name: "AWS Lambda", category: "Cloud" },
        { name: "Linux", category: "Systems" },
        { name: "MySQL", category: "Database" },
        { name: "Docker", category: "DevOps" }
    ];

    // Function to calculate precise age with decimal places
    const calculateAge = (): string => {
        const birthDate = new Date('2001-08-04'); // Replace with your actual birth date
        const now = new Date();
        const ageInMilliseconds = now.getTime() - birthDate.getTime();
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        return ageInYears.toFixed(9); // 9 decimal places for maximum precision
    };

    // Update age every 10ms for constantly changing animation
    useEffect(() => {
        const updateAge = () => {
            setAge(calculateAge());
        };

        // Set initial age
        updateAge();

        // Update age every 10ms for constantly visible changes
        const interval = setInterval(updateAge, 10);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <Flex justify="center">
            <Container minW="70%" maxW="4xl" mt={"6"} justifySelf="center">
                <Box border={"1px solid"} borderColor="gray.300" borderRadius="lg" p="8" mb="8" boxShadow="md">
                    {/* Portrait Section */}
                    <Flex justify="center" mb="6">
                        <Image 
                            src={JakePortrait} 
                            alt="Portrait of Jake Lyell" 
                            borderRadius="lg"
                            maxW="300px"
                            objectFit="cover"
                        />
                    </Flex>

                    {/* Introduction */}
                    <Text fontSize="lg" textAlign="center" mb="6" maxW="2xl" mx="auto">
                        My name is Jake Lyell, I'm a{' '}
                        <Text 
                            as="span" 
                            fontFamily="'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace"
                            fontSize="lg"
                            fontWeight="bold"
                            color="green.500" 
                            _dark={{ color: "green.400",  bg: "gray.800", borderColor: "gray.600" }}
                            bg="gray.100"
                            px="2"
                            py="1"
                            borderRadius="md"
                            border="1px solid"
                            borderColor="gray.300"
                        >
                            {age}
                        </Text>
                        {' '}year old Software Engineer, currently working at Atlassian as a Full Stack Software Engineer on Confluence Data Center
                    </Text>


                    {/* Background Section */}
                    <VStack align="stretch" spacing="4" mb="6">
                        <Heading as="h2" size="lg" color="gray.700" _dark={{ color: "gray.300" }}>
                            Background
                        </Heading>
                        <Text fontSize="md">
                            After graduating from university in June 2022, I spent some time self-teaching and travelling around Korea and Japan with my friends before starting work at Atlassian in January 2023.
                        </Text>
                        <Text fontSize="md">
                            I'm currently based in Sydney as of March 2024.
                        </Text>
                    </VStack>

                    {/* Hobbies Section */}
                    <VStack align="stretch" spacing="4" mb="6">
                        <Heading as="h2" size="lg" color="gray.700" _dark={{ color: "gray.300" }}>
                            Hobbies
                        </Heading>
                        <Text fontSize="md">
                            I enjoy playing video games, building computers and completing coding projects for my own amusement.
                            I have also recently started building and programming keyboards, starting with the relatively simple GMMK Pro and moving onto soldering a Dumbpad (12 key macropad with rotary encoder).
                            I have also built and programmed a Sofle v2 split ortholinear keyboard.
                        </Text>
                    </VStack>

                    {/* Skills Section */}
                    <VStack align="stretch" spacing="4">
                        <Heading as="h2" size="lg" color="gray.700" _dark={{ color: "gray.300" }}>
                            Skills
                        </Heading>
                        <Text fontSize="md" mb="4">
                            At Atlassian I primarily use Java for backend work, and TypeScript/JavaScript for frontend work, so I'd say I'm most proficient in these in a professional context. However Python is still my favourite language for quick scripts, webscrapers etc, due to my experience with it at University.
                        </Text>
                        
                        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing="3">
                            {skills.map((skill, index) => (
                                <Badge 
                                    key={index}
                                    colorScheme="blue" 
                                    variant="subtle"
                                    px="4"
                                    py="2"
                                    borderRadius="full"
                                    fontSize="sm"
                                    textAlign="center"
                                    fontWeight="medium"
                                >
                                    {skill.name}
                                </Badge>
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Box>
            </Container>
        </Flex>
    );
}

export default AboutMe;