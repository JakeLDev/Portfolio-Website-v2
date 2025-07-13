import React from 'react';
import { Box, Text, Link, Icon } from "@chakra-ui/react";
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box 
            as="footer"
            py="4"
            textAlign="center"
            bg="gray.300"
            w="100%"
            _dark={{ bg: "gray.900", borderColor: "gray.600" }}
        >
            <Text fontSize="sm" color="gray.400">
                <Link 
                    href="https://github.com/JakeLDev/Portfolio-Website-v2"
                    target="_blank"
                    rel="noreferrer"
                    color="gray.800"
                    textDecoration={"underline"}
                    _dark={{ color: "gray.300" }}
                    _hover={{ color: "white" }}
                    transition="color 0.2s"
                >
                    Built with <Icon as={FaHeart} color="red.400" mx="1" /> using React & TypeScript
                </Link>
            </Text>
        </Box>
    );
};

export default Footer;