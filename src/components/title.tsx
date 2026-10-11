import React from 'react';
import { Box, Heading, VisuallyHidden } from '@chakra-ui/react';

interface TitleProps {
    text: string;
    elementId: string;
    children?: React.ReactNode;
}

const Title = ({ text, elementId, children }: TitleProps) => {
    const headingId = `${elementId}-heading`;
    return (
        <Box 
            as="section"
            id={elementId}
            aria-labelledby={headingId}
            tabIndex={-1}
            _focus={{ outline: "none" }}
            minW="55%"
            maxW="1000px"
            w="100%"
            pt="16"
        >
            <Heading 
                as="h2" 
                id={headingId}
                fontSize="4xl"
                lineHeight="1.1"
                fontFamily="'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace" 
                color="blue.500" 
                fontWeight="600"
                _dark={{ color: "blue.400" }}
                textAlign="left"
                mb="8"
            >
                <span aria-hidden="true">// {text.toLowerCase().replace(/\s+/g, '_')}</span>
                <VisuallyHidden>{text}</VisuallyHidden>
            </Heading>
            {children}
        </Box>
    );
}

export default Title;
