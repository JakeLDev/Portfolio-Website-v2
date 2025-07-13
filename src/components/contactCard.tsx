import React from 'react';
import { Box, Flex, Text, Link, Icon, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactCard = () => {
    const mediaLinks = [
        {
            icon: FaGithub,   
            id: "github-img",
            href: "https://github.com/JakeLDev",
            label: "GitHub"
        },
        {
            icon: FaLinkedin, 
            id: "linkedin-img",
            href: "https://www.linkedin.com/in/jake-lyell/",
            label: "LinkedIn"
        },
        {
            icon: FaTwitter,
            id: "twitter-img",
            href: "https://twitter.com/JakeLDev",
            label: "Twitter"
        }
    ];

    return (
        <Box>
            <Box 
                border="1px solid" 
                borderColor="gray.300" 
                borderRadius="lg" 
                p="8"
                mb="8"
                minWidth="3xl"
                boxShadow="md"
                bg="white"
                _dark={{ bg: "gray.800", borderColor: "gray.600" }}
            >
                <VStack textAlign="center">
                    <Text 
                        fontSize="2xl" 
                        fontWeight="bold"
                        color="gray.800"
                        _dark={{ color: "white" }}
                    >
                        Contact me!
                    </Text>
                    
                    <Text 
                        fontSize="lg"
                        color="gray.600"
                        _dark={{ color: "gray.300" }}
                        maxW="2xl"
                    >
                        Feel free to reach out if you'd like to connect!
                    </Text>
                    
                    <VStack>
                        <Link 
                            href="mailto:me@jakelyell.dev" 
                            target="_blank" 
                            rel="noreferrer"
                            bg="blue.600"
                            color="white"
                            px="8"
                            py="3"
                            borderRadius="md"
                            fontSize="lg"
                            fontWeight="semibold"
                            _hover={{ bg: "blue.700", transform: "translateY(-2px)" }}
                            transition="all 0.2s"
                            textDecoration="none"
                        >
                            Get in touch
                        </Link>
                        
                        <Flex gap="4" justify="center">
                            {mediaLinks.map((media) => (
                                <Link
                                    key={media.id}
                                    href={media.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    p="3"
                                    borderRadius="full"
                                    bg="gray.100"
                                    _dark={{ bg: "gray.700" }}
                                    _hover={{ 
                                        bg: "blue.100", 
                                        _dark: { bg: "blue.800" },
                                        transform: "translateY(-2px)"
                                    }}
                                    transition="all 0.2s"
                                    aria-label={media.label}
                                >
                                    <Icon 
                                        as={media.icon}
                                        boxSize="20px"
                                        color="gray.600"
                                        _dark={{ color: "gray.300" }}
                                        _hover={{ color: "blue.600", _dark: { color: "blue.300" } }}
                                    />
                                </Link>
                            ))}
                        </Flex>
                    </VStack>
                </VStack>
            </Box>
        </Box>
    );
};

export default ContactCard;