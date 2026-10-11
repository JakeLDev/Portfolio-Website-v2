import { Box, Heading, Text, Flex, Badge, VisuallyHidden, Image } from '@chakra-ui/react';
import ExternalLink from './externalLink';

interface ProjectProps {
    title: string;
    description: string;
    elementId: string;
    githubLink?: string;
    liveLink?: string;
    liveLinkText?: string;
    patchNotesLink?: string;
    image?: string;
    imageAlt?: string;
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
    liveLinkText = "Live Demo",
    patchNotesLink,
    image,
    imageAlt = "",
    linkedinLink,
    skills,
    duration,
    status
}: ProjectProps) => {
    return (
        <Box 
            as="article"
            aria-labelledby={elementId}
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
                <Heading as="h3" id={elementId} size="lg" mb="2">
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
                                <Flex as="ul" listStyleType="none" m="0" p="0" flexWrap="wrap" gap="2">
                                    {skills.map((skill, index) => (
                                        <li key={index}>
                                        <Badge
                                            colorScheme="blue" 
                                            variant="subtle"
                                            px="3"
                                            py="1"
                                            borderRadius="full"
                                            fontSize="sm"
                                            userSelect="text"
                                            cursor="text"
                                        >
                                            {skill}
                                        </Badge>
</li>
                                    ))}
                                </Flex>
                            </Box>
                        )}
                    </Box>
                    
                    <Flex flexDir="row" alignItems="center" justifyContent="flex-start" gap="3" mt="4">
            { githubLink && 
                <ExternalLink 
                    href={githubLink}
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
                    GitHub<VisuallyHidden> repository for {title}</VisuallyHidden>
                </ExternalLink>
            }
            { liveLink && 
                <ExternalLink 
                    href={liveLink}
                    bg="blue.600"
                    color="white"
                    px="4" 
                    py="2" 
                    display="flex" 
                    alignItems="center" 
                    gap="2" 
                    borderRadius="md"
                    _hover={{ 
                        bg: "blue.700",
                        transform: "translateY(-1px)"
                    }}
                    transition="all 0.2s"
                    fontSize="sm"
                    fontWeight="medium"
                    textDecoration="none"
                >
                    {liveLinkText}<VisuallyHidden> for {title}</VisuallyHidden>
                </ExternalLink>
            }
            { patchNotesLink && 
                <ExternalLink 
                    href={patchNotesLink}
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
                    Patch Notes<VisuallyHidden> for {title}</VisuallyHidden>
                </ExternalLink>
            }
            { linkedinLink && 
                <ExternalLink 
                    href={linkedinLink}
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
                    LinkedIn<VisuallyHidden> page for {title}</VisuallyHidden>
                </ExternalLink>
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
                            loading="lazy"
                            alt={imageAlt}
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