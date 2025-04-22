import React from 'react';
import { Box, Text, Flex, Link, Center, Image, Button } from '@chakra-ui/react';
import LinkedInPFP from '../assets/LinkedinPFP-square.jpg';
import GithubButton from '../components/githubButton';

const Home = () => {
    return (
        <>
            <Box pt="56">
                <Box>
                {/* Icon Profile Picture */}
                <Box p="8">
                    <Center>
                        <Image 
                            src={ LinkedInPFP }
                            alt="Profile Picture"
                            height="250px"
                            margin={"20px"}
                        />
                    </Center>
                    <Text textAlign="center" width="80%" maxW="2xl" fontSize="4xl" fontWeight="bold" mx="auto" lineHeight="2">
                        Hello! I'm Jake :)
                    </Text>
                    <Text textAlign="center" width="80%" maxW="2xl" fontSize="3xl" fontWeight="bold" mx="auto" lineHeight="1.5">
                        I'm a Software Engineer at{' '}
                        <Link 
                            color="#0052CC" 
                            fontWeight="extrabold"
                            textShadow="1px 1px 1px white, -1px 1px 1px white, -1px -1px 1px white, 1px -1px 1px white"
                            href='https://www.atlassian.com/' 
                            target="_blank"
                        >
                            Atlassian
                        </Link>
                        {' '}in Sydney, Australia. I'm currently working with React, Typescript and Java.
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