import { Box, Heading, Text, Flex, Link, Badge, Image } from '@chakra-ui/react';

interface ProjectProps {
    title: string;
    description: string;
    elementId: string;
    githubLink?: string;
    liveLink?: string;
    patchNotesLink?: string;
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
    patchNotesLink,
    image,
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
                            <Box mb="2">
                                <Text fontSize="md" fontWeight="semibold" color="gray.600" _dark={{ color: "gray.400" }} mb="2">
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
                                            fontSize="sm"
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
            { patchNotesLink && 
                <Link 
                    href={patchNotesLink}
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
                        _dark: { bg: "gray.800", color: "purple.400" },
                        borderColor: "purple.400",
                        color: "purple.600",
                    }}
                    transition="all 0.2s"
                    fontSize="sm"
                    fontWeight="medium"
                    textDecoration="none"
                >
                    Patch Notes
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
                        display={{ base: "none", lg: "block" }}
                        width={{ base: "0", lg: "50%" }}
                    >
                        <Image 
                            src={image} 
                            alt={title} 
                            position="absolute"
                            top="30%"
                            right="-2.5rem"
                            overflow="hidden"
                            borderRadius="8px 8px 0 0"
                            objectFit="cover"
                            border={"1px solid"}
                            borderColor="gray.300"
                            _dark={{ borderColor: "gray.600" }}
                        />
                    </Box>
                )}
            </Flex>
        </Box>
    );
}

export default Project;