import React from 'react';
import { Box, Heading, Text, Flex, Button, Link, Badge } from '@chakra-ui/react';
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
    skills?: string[];
    duration?: string;
    status?: string;
}

const Project = ({ 
    title, 
    description, 
    elementId,
    githubLink,
    liveLink,
    image,
    imageHeight = "200px",
    linkedinLink,
    skills,
    duration,
    status
}: ProjectProps) => {
    return (
        <Box border={"1px solid"} borderColor="gray.300" borderRadius="lg" p="8" mb="8" boxShadow="md">
            <Flex flexDir="row" alignItems="flex-start" justifyContent="flex-start" flexWrap="wrap" gap="4">
                {image && (
                    <Box flexShrink="0">
                        <img 
                            src={image} 
                            alt={title} 
                            style={{ 
                                maxWidth: '150px', 
                                maxHeight: imageHeight, 
                                borderRadius: '8px',
                                objectFit: 'contain'
                            }} 
                        />
                    </Box>
                )}
                <Box flex="1">
                    <Heading as="h2" id={elementId} size="lg" mb="2">
                        {title}
                    </Heading>
                    <Flex flexDir="row" alignItems="center" gap="2" mb="2" flexWrap="wrap">
                        {status && (
                            <Text fontSize="md" color="gray.500" _dark={{ color: "gray.300" }} fontWeight="medium">
                                {status}
                            </Text>
                        )}
                        {duration && (
                            <Text fontSize="md" color="gray.500" _dark={{ color: "gray.300" }}>
                                | {duration}
                            </Text>
                        )}
                    </Flex>
                </Box>
            </Flex>
            
            <Text fontSize="lg" fontWeight="medium" mb="4" flexWrap={"wrap"} wordBreak={"break-word"}>
                {description}
            </Text>
            
            {skills && skills.length > 0 && (
                <Box mb="4">
                    <Text fontSize="sm" fontWeight="semibold" color="gray.600" _dark={{ color: "gray.400" }} mb="2">
                        Technologies Used:
                    </Text>
                    <Flex flexWrap="wrap" gap="2">
                        {skills.map((skill, index) => (
                            <Badge 
                                key={index}
                                colorScheme="blue" 
                                variant="subtle"
                                px="3"
                                py="1"
                                borderRadius="full"
                                fontSize="xs"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </Flex>
                </Box>
            )}
            <Flex flexDir="row" alignItems="center" justifyContent="center" gap="2" px="4" fontSize="lg" fontWeight="medium">
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
                    _dark={{ bg: "gray.700", color: "white", borderColor: "gray.600" }}
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
                    _dark={{ bg: "gray.600", borderColor: "gray.500" }}
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