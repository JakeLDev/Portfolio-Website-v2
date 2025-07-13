import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, Link, Center, Image, Button } from '@chakra-ui/react';
import LinkedInPFP from '../assets/LinkedinPFP-square.jpg';
import GithubButton from '../components/githubButton';
import ParticlesBackground from '../components/particles';

const Home = () => {

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
            const interval = setInterval(updateAge, 50);
    
            // Cleanup interval on component unmount
            return () => clearInterval(interval);
        }, []);

        const [age, setAge] = useState<string>(calculateAge());
    return (
        <>
            <ParticlesBackground />
            <Box pt={{ base: "20", md: "40" }}>
                <Box>
                <Box p="8">
                    <Center>
                        <Image 
                            src={ LinkedInPFP }
                            alt="Profile Picture"
                            height="250px"
                            margin={"20px"}
                        />
                    </Center>
                    <Text textAlign="center" width="80%" maxW="2xl" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mx="auto" lineHeight="2">
                        Hello! I'm Jake :)
                    </Text>
                        <Text textAlign="center" width="90%" maxW="3xl" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" mx="auto" lineHeight="1.5">
                        I'm a{' '}
                        <Text 
                            as="span" 
                            fontFamily="'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace"
                            fontSize={{ base: "lg", md: "2xl" }}
                            fontWeight="bold"
                            color="green.500" 
                            _dark={{ color: "green.400", bg: "gray.800", borderColor: "gray.600" }}
                            bg="gray.100"
                            // _dark={{ bg: "gray.900" }}
                            px="2"
                            py="1"
                            borderRadius="md"
                            border="1px solid"
                            borderColor="gray.300"
                            // _dark={{ borderColor: "gray.600" 
                        >
                            {age}
                        </Text>
                        {' '}year old Full Stack Software Engineer at{' '}
                        <Link 
                            color="#0052CC" 
                            fontWeight="extrabold"
                            textShadow="1px 1px 1px white, -1px 1px 1px white, -1px -1px 1px white, 1px -1px 1px white"
                            href='https://www.atlassian.com/' 
                            target="_blank"
                        >
                            Atlassian
                        </Link>
                        {' '}in Sydney, Australia.
                        </Text>
                    <Text textAlign="center" width="90%" maxW="3xl" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" mx="auto" paddingTop="3" lineHeight="1.5">
                        I'm currently working on Confluence Data Center, where I develop and maintain highly-scalable, user-facing features, I'm currently working with React, Typescript and Java.
                    </Text>
                    
                </Box>

                {/* Social Links */}
                <Flex id='button-container' flexDir="row" alignItems="center" justifyContent="center" gap="2" px="4" fontSize="lg" fontWeight="medium">
                    <GithubButton
                        githubLink='https://github.com/JakeLDev'
                        text='GitHub'
                        elementId='github-button'
                    />
                    <Link 
                        id='linkedin-button' 
                        href="https://www.linkedin.com/in/jake-lyell/"
                        bg="blue.500"
                        color="white"
                        px="7"
                        py="3"
                        display="flex"
                        alignItems="center"
                        gap="2"
                        borderRadius="full"
                        outline="none"
                        _focus={{ transform: 'scale(1.1)' }}
                        _hover={{ transform: 'scale(1.05)', color: 'purple.200' }}
                        _active={{ transform: 'scale(1.05)' }}
                        transition="all 0.2s"
                        borderWidth="2px"
                        borderColor="blue.600"
                        target="_blank"
                    >
                        LinkedIn
                    </Link>
                </Flex>
                
                </Box>
            </Box>
        </>
    );
}
export default Home;