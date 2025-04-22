import React from 'react';
import { Box, Heading, Text, Flex, Button, Link } from '@chakra-ui/react';
import GithubButton from './githubButton';

interface ProjectProps {
    title: string;
    description: string;
    elementId: string;
    githubLink?: string;
    liveLink?: string;
    image?: string;
    imageHeight?: string;
    linkedinLink?: string;
}

// add react prop for text
const Project = ({ title, 
                    description, 
                    elementId,
                    githubLink,
                    liveLink,
                    image,
                    imageHeight = "300px",
                    linkedinLink }: ProjectProps) => {
    return (
        <Box border={"1px solid"} borderColor="gray.300" borderRadius="lg" p="8" mb="8" boxShadow="md">
        <Heading as="h1" id={elementId} size="lg">
            {title}
        </Heading>
        {image && 
            <Box pt="4">
                <img src={image} alt={title} style={{ maxWidth: '100%', maxHeight: imageHeight, borderRadius: '8px' }} />
            </Box>
        }
        <Text fontSize="lg" fontWeight="medium" pt="4" flexWrap={"wrap"} wordBreak={"break-word"}>
            {description}
        </Text>
        <Flex flexDir="row" alignItems="center" justifyContent="center" gap="2" px="4" fontSize="lg" fontWeight="medium" pt="4">
            { githubLink && 
                <GithubButton
                    githubLink={githubLink}
                    text="GitHub"
                    elementId="github-button"
                />
            }
            { liveLink && 
                <Link 
                    id='live-button'
                    href={liveLink}
                    bg="white" 
                    px="7" 
                    py="3" 
                    display="flex" 
                    alignItems="center" 
                    gap="2" 
                    borderRadius="full"
                    _hover={{ transform: 'scale(1.05)' }}
                    _focus={{ transform: 'scale(1.1)' }}
                    _active={{ transform: 'scale(1.05)' }}
                    transition="all 0.2s"
                    cursor="pointer"
                    borderWidth="1px"
                    borderColor="gray.200"
                    color="gray.900"
                    target='_blank'
                    rel="noreferrer noopener"
                >
                    Live
                </Link>
            }
            { linkedinLink && 
                <Link 
                    id='linkedin-button'
                    href={linkedinLink}
                    bg="gray.900" 
                    color="white"
                    px="7" 
                    py="3" 
                    display="flex" 
                    alignItems="center" 
                    gap="2" 
                    borderRadius="full"
                    _hover={{ transform: 'scale(1.05)', color: 'white' }}
                    _focus={{ transform: 'scale(1.1)' }}
                    _active={{ transform: 'scale(1.05)' }}
                    transition="all 0.2s"
                    borderWidth="2px"
                    borderColor="whiteAlpha.400"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Box opacity="0.7">LinkedIn</Box>
                </Link>
            }
        </Flex>
        </Box>
    );
}

export default Project;