import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

interface TitleProps {
    text: string;
    elementId: string;
    children?: React.ReactNode;
}

// add react prop for text
const Title = ({ text, elementId, children }: TitleProps) => {
    return (
        <Box 
            id={elementId}
            // maxW="5xl" 
            // mx="auto" 
            minW="55%"
            maxW="1000px"
            w="100%"
            pt="24"
            mt="-8"
        >
            <Heading 
                as="h1" 
                fontSize="4xl"
                fontFamily="'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace" 
                color="blue.500" 
                fontWeight="600"
                _dark={{ color: "blue.400" }}
                textAlign="left"
                mb="8"
            >
                // {text.toLowerCase().replace(/\s+/g, '_')}
            </Heading>
            {children}
        </Box>
    );
}

export default Title;