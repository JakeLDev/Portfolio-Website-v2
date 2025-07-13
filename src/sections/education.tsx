import React from 'react';
import { Box, Flex, Text, Heading, Badge, Link } from '@chakra-ui/react';
import UWALogo from '../assets/uwa-logo.png';

const Education = () => {
    return (
        <Box>
                <Box border={"1px solid"} borderColor="gray.300" borderRadius="lg" p="8" mb="8" boxShadow="md">
                    <Flex flexDir="row" alignItems="flex-start" justifyContent="flex-start" flexWrap="wrap" gap="4">
                        {UWALogo && (
                            <Box flexShrink="0">
                                <img 
                                    src={UWALogo} 
                                    alt="UWA logo" 
                                    style={{ 
                                        maxWidth: '100px', 
                                        maxHeight: '100px', 
                                        borderRadius: '8px',
                                        objectFit: 'contain'
                                    }} 
                                />
                            </Box>
                        )}
                        <Box flex="1">
                            <Heading as="h2" size="lg" mb="2">
                                Bachelor of Science
                            </Heading>
                            <Flex flexDir="row" alignItems="center" gap="2" mb="2" flexWrap="wrap">
                                <Link 
                                    href="https://www.uwa.edu.au/"
                                    fontSize="xl"
                                    fontWeight="semibold"
                                    color="blue.600"
                                    _hover={{ color: 'blue.800', textDecoration: 'underline' }}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    University of Western Australia (UWA)
                                </Link>
                                <Text fontSize="md" color="gray.400" _dark={{ color: "gray.300" }}>
                                    • Perth, Australia
                                </Text>
                            </Flex>
                            <Text fontSize="md" color="gray.500" _dark={{ color: "gray.300" }} fontWeight="medium" mb="4">
                                February 2019 - July 2022
                            </Text>
                        </Box>
                    </Flex>
                    
                    <Text fontSize="lg" fontWeight="medium" mb="4" flexWrap={"wrap"} wordBreak={"break-word"}>
                        Double Major in <strong>Computer Science</strong> and <strong>Data Science</strong>
                        <br />
                        <strong>WAM:</strong> 71.304 | <strong>GPA:</strong> 5.652
                        <br />
                        Graduated with comprehensive knowledge in software development, algorithms, machine learning, and data analysis. 
                        Completed projects in web development, artificial intelligence, and statistical modeling.
                    </Text>
                    
                    <Box>
                        <Text fontSize="sm" fontWeight="semibold" color="gray.600" _dark={{ color: "gray.400" }} mb="2">
                            Key Areas of Study:
                        </Text>
                        <Flex flexWrap="wrap" gap="2">
                            {[
                                "Algorithms & Data Structures",
                                "Software Engineering",
                                "Machine Learning",
                                "Data Analysis",
                                "Database Systems",
                                "Web Development",
                                "Artificial Intelligence",
                                "Statistics",
                                "Python Programming",
                                "Java Programming"
                            ].map((subject, index) => (
                                <Badge 
                                    key={index}
                                    colorScheme="purple" 
                                    variant="subtle"
                                    px="3"
                                    py="1"
                                    borderRadius="full"
                                    fontSize="xs"
                                >
                                    {subject}
                                </Badge>
                            ))}
                        </Flex>
                    </Box>
                </Box>
        </Box>
    );
}

export default Education;