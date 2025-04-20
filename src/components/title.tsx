import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

interface TitleProps {
    text: string;
    elementId: string;
}

// add react prop for text
const Title = ({ text, elementId }: TitleProps) => {
    return (
        <Box>
        <Heading as="h1" id={elementId} size="xl" fontWeight="bold" textDecoration="underline" pt="14">
            {text}
        </Heading>
        </Box>
    );
}

export default Title;