import { Box, Heading, Text, Flex, Link, Badge } from '@chakra-ui/react';

interface WorkExperienceProps {
    company: string;
    position: string;
    duration: string;
    description: string;
    elementId: string;
    companyLink?: string;
    location?: string;
    skills?: string[];
    image?: string;
    imageHeight?: string;
}

const WorkExperience = ({ 
    company, 
    position, 
    duration, 
    description, 
    elementId,
    companyLink,
    location,
    skills,
    image,
    imageHeight = "100px"
}: WorkExperienceProps) => {
    return (
        <Box border={"1px solid"} borderColor="gray.300" borderRadius="lg" p="8" mb="8" boxShadow="md">
            <Flex flexDir="row" alignItems="flex-start" justifyContent="flex-start" flexWrap="wrap" gap="4">
                {image && (
                    <Box flexShrink="0">
                        <img 
                            src={image} 
                            alt={`${company} logo`} 
                            style={{ 
                                maxWidth: '100px', 
                                maxHeight: imageHeight, 
                                borderRadius: '8px',
                                objectFit: 'contain'
                            }} 
                        />
                    </Box>
                )}
                <Box flex="1">
                    <Heading as="h2" id={elementId} size="lg" mb="2">
                        {position}
                    </Heading>
                    <Flex flexDir="row" alignItems="center" gap="2" mb="2" flexWrap="wrap">
                        {companyLink ? (
                            <Link 
                                href={companyLink}
                                fontSize="xl"
                                fontWeight="semibold"
                                color="blue.600"
                                _hover={{ color: 'blue.800', textDecoration: 'underline' }}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                {company}
                            </Link>
                        ) : (
                            <Text fontSize="xl" fontWeight="semibold" color="gray.700">
                                {company}
                            </Text>
                        )}
                        {location && (
                            <Text fontSize="md" color="gray.400" _dark={{ color: "gray.300" }}>
                                • {location}
                            </Text>
                        )}
                    </Flex>
                    <Text fontSize="md" color="gray.500" _dark={{ color: "gray.300" }} fontWeight="medium" mb="4">
                        {duration}
                    </Text>
                </Box>
            </Flex>
            
            <Text fontSize="lg" fontWeight="medium" mb="4" flexWrap={"wrap"} wordBreak={"break-word"}>
                {description}
            </Text>
            
            {skills && skills.length > 0 && (
                <Box>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.400" mb="2">
                        Skills & Technologies:
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
                                fontSize="xs"
                                userSelect="text"
                                cursor="text"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </Flex>
                </Box>
            )}
        </Box>
    );
}

export default WorkExperience;