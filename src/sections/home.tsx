import { useState, useEffect } from 'react';
import { Box, Text, Flex, Center, Image, Heading, VisuallyHidden } from '@chakra-ui/react';
import ExternalLink from '../components/externalLink';
import JakeLyellTiny from '../assets/JakeLyellTiny.jpg';
import GithubButton from '../components/githubButton';
import { usePrefersReducedMotion } from '../components/ui/use-reduced-motion';

const Home = () => {
        // Function to calculate precise age with decimal places
        const calculateAge = (): string => {
            const birthDate = new Date('2001-08-04'); // Replace with your actual birth date
            const now = new Date();
            const ageInMilliseconds = now.getTime() - birthDate.getTime();
            const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
            return ageInYears.toFixed(9); // 9 decimal places for maximum precision
        };
    
        const reducedMotion = usePrefersReducedMotion();
        const [age, setAge] = useState<string>(calculateAge());

        // Tick every 50ms for the constantly changing effect, unless the user
        // prefers reduced motion (2.2.2), in which case show a static value.
        useEffect(() => {
            if (reducedMotion) return;
            const interval = setInterval(() => setAge(calculateAge()), 50);
            return () => clearInterval(interval);
        }, [reducedMotion]);

        return (
            <Box as="section" id="Page" aria-labelledby="home-title" tabIndex={-1} _focus={{ outline: "none" }} position="relative" pt={{ base: "20", md: "40" }}>
                <Box position="relative" zIndex="1">
                <Box>
                <Box p="8">
                    <Center>
                        <Image 
                            src={ JakeLyellTiny }
                            alt="Jake Lyell"
                            height="250px"
                            margin={"20px"}
                        />
                    </Center>
                    <Heading as="h1" id="home-title" textAlign="center" width="80%" maxW="2xl" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mx="auto" lineHeight="2">
                        Hello! I'm Jake :)
                    </Heading>
                        <Text textAlign="center" width="90%" maxW="3xl" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" mx="auto" lineHeight="1.5">
                        I'm a{' '}
                        <Text 
                            as="span" 
                            aria-hidden="true"
                            fontFamily="'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace"
                            fontSize={{ base: "lg", md: "2xl" }}
                            fontWeight="bold"
                            color="green.700" 
                            _dark={{ color: "green.400", bg: "gray.800", borderColor: "gray.600" }}
                            bg="gray.100"
                            px="2"
                            py="1"
                            borderRadius="md"
                            border="1px solid"
                            borderColor="gray.300"
                        >
                            {age}
                        </Text>
                        <VisuallyHidden>{Math.floor(parseFloat(age))}</VisuallyHidden>
                        
                        {' '}year old <Text fontStyle={"italic"} as="span">Full Stack Software Engineer</Text> at{' '}
                        
                        <ExternalLink 
                            color="#0052CC" 
                            _dark={{ color: "blue.300" }}
                            _hover={{ color: "blue.800", _dark: { color: "blue.200" } }}
                            fontWeight="extrabold"
                            textDecoration="underline"
                            href='https://www.atlassian.com/' 
                        >
                            Atlassian
                        </ExternalLink>
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
                    <ExternalLink 
                        id='linkedin-button' 
                        href="https://www.linkedin.com/in/jake-lyell/"
                        bg="blue.600"
                        color="white"
                        px="7"
                        py="3"
                        display="flex"
                        alignItems="center"
                        gap="2"
                        borderRadius="full"
                        _focusVisible={{ 
                        transform: 'scale(1.1)',
                        outline: '2px solid',
                        outlineOffset: '2px',
                        outlineColor: 'blue.600',
                        _dark: { outlineColor: 'blue.300' }
            }}
                        _hover={{ transform: 'scale(1.05)', bg: 'blue.700' }}
                        _active={{ transform: 'scale(1.05)' }}
                        transition="all 0.2s"
                        borderWidth="2px"
                        borderColor="blue.700"
                    >
                        LinkedIn
                    </ExternalLink>
                </Flex>
                
                </Box>
                </Box>
            </Box>
    );
}
export default Home;