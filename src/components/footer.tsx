import React from 'react';
import { Box, Flex, Text, Link, Grid, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaHeart } from 'react-icons/fa';
// import resume from '../assets/Jake Lyell Computer Science Resume v4.pdf';

const Footer = () => {
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
            icon: FaFacebook, 
            id: "facebook-img",
            href: "https://www.facebook.com/profile.php?id=100010309815833",
            label: "Facebook"
        },
        {
            icon: FaTwitter,
            id: "twitter-img",
            href: "https://twitter.com/JakeLDev",
            label: "Twitter"
        }
    ];

    return (
        <Flex justify="center" mt="20">
            <Box 
                as="footer" 
                maxW="4xl" 
                minW="70%" 
                border="1px solid" 
                borderColor="gray.300" 
                borderRadius="lg" 
                px="8"
                py="4" 
                boxShadow="md"
                bg="white"
                _dark={{ bg: "gray.800", borderColor: "gray.600" }}
            >
                <Box position="relative">
                    <Text 
                        fontSize="2xl" 
                        fontWeight="semibold" 
                        mb="4" 
                        textAlign={{ base: "center", sm: "left" }}
                        color="gray.800"
                        _dark={{ color: "white" }}
                    >
                        Contact Me
                    </Text>
                    
                    <Text mb="2" textAlign={{ base: "center", sm: "left" }}>
                        <Link 
                            href="mailto:me@jakelyell.dev" 
                            target="_blank" 
                            rel="noreferrer"
                            color="blue.600"
                            _hover={{ color: "blue.800", textDecoration: "underline" }}
                            _dark={{ color: "blue.400", _hover: { color: "blue.300" } }}
                        >
                            me@jakelyell.dev
                        </Link>
                    </Text>
{/*                     
                    <Text mb="4" textAlign={{ base: "center", sm: "left" }}>
                        <Link 
                            href={resume}
                            download="Jake Lyell Computer Science Resume.pdf"
                            color="blue.600"
                            _hover={{ color: "blue.800", textDecoration: "underline" }}
                            _dark={{ color: "blue.400", _hover: { color: "blue.300" } }}
                        >
                            Download my resume here!
                        </Link>
                    </Text> */}

                    <Grid 
                        templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
                        gap="4"
                        width={{ base: "100%", sm: "200px" }}
                        position={{ base: "static", sm: "absolute" }}
                        bottom={{ base: "auto", sm: "0" }}
                        right={{ base: "auto", sm: "0" }}
                        justifyItems="center"
                        mb={{ base: "4", sm: "0" }}
                    >
                        {mediaLinks.map((media) => (
                            <Link
                                key={media.id}
                                href={media.href}
                                target="_blank"
                                rel="noreferrer"
                                _hover={{ transform: "scale(1.1)" }}
                                transition="all 0.2s"
                                aria-label={media.label}
                            >
                                <Icon 
                                    as={media.icon}
                                    boxSize="42px"
                                    color="gray.600"
                                    _hover={{ color: "blue.600" }}
                                    _dark={{ color: "gray.400", _hover: { color: "blue.400" } }}
                                />
                            </Link>
                        ))}
                    </Grid>
                </Box>
                
                <Text 
                    textAlign="center" 
                    mt="4" 
                    fontSize="sm"
                    color="gray.600"
                    _dark={{ color: "gray.400" }}
                >
                    Website created with <Icon as={FaHeart} color="red.500" mx="1" /> (and React)
                </Text>
            </Box>
        </Flex>
    );
};

export default Footer;