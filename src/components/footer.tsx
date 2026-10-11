import { Box, Text, Icon, VisuallyHidden } from "@chakra-ui/react";
import ExternalLink from './externalLink';
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
                <ExternalLink 
                    href="https://github.com/JakeLDev/Portfolio-Website-v2"
                    color="gray.800"
                    textDecoration={"underline"}
                    _dark={{ color: "gray.300" }}
                    _hover={{ color: "black", _dark: { color: "white" } }}
                    transition="color 0.2s"
                >
                    Built with <Icon as={FaHeart} color="red.600" _dark={{ color: "red.400" }} mx="1" /><VisuallyHidden>love</VisuallyHidden> using React & TypeScript<VisuallyHidden>, source code on GitHub</VisuallyHidden>
                </ExternalLink>
            </Text>
            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} mt="2">
                Updated July 2025
            </Text>
        </Box>
    );
};

export default Footer;