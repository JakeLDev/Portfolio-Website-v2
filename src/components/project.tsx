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
        <Box 
            border={"1px solid"} 
            borderColor="gray.300" 
            borderRadius="lg" 
            mb="8" 
            boxShadow="md"
            overflow="hidden"
        >
            <Flex direction="row" minHeight="250px">
                {/* Text Content - Full width on narrow screens, left half on wide screens */}
                <Box 
                    flex="1" 
                    p="8" 
                    display="flex" 
                    flexDirection="column" 
                    // justifyContent="space-between"
                    width={{ base: "100%", lg: "50%" }}
                >
                <Heading as="h2" id={elementId} size="lg" mb="2">
                    {title}
                </Heading>
                <Flex flexDir="row" alignItems="center" gap="2" mb="4" flexWrap="wrap">
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
                
                    <Box>
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
                    </Box>
                    
                    <Flex flexDir="row" alignItems="center" justifyContent="flex-start" gap="3" mt="4">
            { githubLink && 
                <Link 
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    bg="transparent"
                    color="gray.600"
                    _dark={{ color: "gray.300", borderColor: "gray.600" }}
                    px="4" 
                    py="2" 
                    display="flex" 
                    alignItems="center" 
                    gap="2" 
                    borderRadius="md"
                    border="1px solid"
                    borderColor="gray.300"
                    _hover={{ 
                        bg: "gray.50", 
                        _dark: { bg: "gray.800", color: "blue.400" },
                        borderColor: "blue.400",
                        color: "blue.600",
                    }}
                    transition="all 0.2s"
                    fontSize="sm"
                    fontWeight="medium"
                    textDecoration="none"
                >
                    GitHub
                </Link>
            }
            { liveLink && 
                <Link 
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    bg="blue.600"
                    color="white"
                    _dark={{ bg: "blue.500" }}
                    px="4" 
                    py="2" 
                    display="flex" 
                    alignItems="center" 
                    gap="2" 
                    borderRadius="md"
                    _hover={{ 
                        bg: "blue.700",
                        _dark: { bg: "blue.600", color: "white" },
                        transform: "translateY(-1px)"
                    }}
                    transition="all 0.2s"
                    fontSize="sm"
                    fontWeight="medium"
                    textDecoration="none"
                >
                    Live Demo
                </Link>
            }
            { linkedinLink && 
                <Link 
                    href={linkedinLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    bg="transparent"
                    color="gray.600"
                    _dark={{ color: "gray.300", borderColor: "gray.600" }}
                    px="4" 
                    py="2" 
                    display="flex" 
                    alignItems="center" 
                    gap="2" 
                    borderRadius="md"
                    border="1px solid"
                    borderColor="gray.300"
                    _hover={{ 
                        bg: "gray.50", 
                        _dark: { bg: "gray.800", color: "blue.400" },
                        borderColor: "blue.400",
                        color: "blue.600",
                    }}
                    transition="all 0.2s"
                    fontSize="sm"
                    fontWeight="medium"
                    textDecoration="none"
                >
                    LinkedIn
                </Link>
            }
                    </Flex>
                </Box>
                
                {/* Right Half - Image (hidden on narrow screens) */}
                {image && (
                    <Box 
                        flex="1" 
                        position="relative"
                        overflow="hidden"
                        // bg="gray.50"
                        // _dark={{ bg: "gray.800" }}
                        display={{ base: "none", lg: "block" }}
                        width={{ base: "0", lg: "50%" }}
                    >
                        <img 
                            src={image} 
                            alt={title} 
                            style={{ 
                                position: 'absolute',
                                top: '30%',
                                right: '-2.5rem',
                                // height: "500px",
                                overflow: 'hidden',
                                // width: "auto",
                                // minHeight: '28.25rem',
                                // maxHeight: "550px",
                                // width: '100%',
                                // width: 'auto',
                                // height: 'auto',
                                borderRadius: '8px 8px 0 0',
                                // boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                // transform: 'scale(1.0)',
                                // transition: 'transform 0.3s ease'
                            }}
                        />
                    </Box>
                )}
            </Flex>
        </Box>
    );
}

export default Project;