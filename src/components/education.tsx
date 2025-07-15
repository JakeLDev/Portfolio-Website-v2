import { Box, Heading, Text, Flex, Link, Badge } from '@chakra-ui/react';

interface EducationProps {
    institution: string;
    degree: string;
    major?: string;
    duration: string;
    description: string;
    elementId: string;
    institutionLink?: string;
    location?: string;
    gpa?: string;
    wam?: string;
    achievements?: string[];
    image?: string;
    imageHeight?: string;
}

const Education = ({ 
    institution, 
    degree,
    major,
    duration, 
    description, 
    elementId,
    institutionLink,
    location,
    gpa,
    wam,
    achievements,
    image,
    imageHeight = "100px"
}: EducationProps) => {
    return (
        <Box border={"1px solid"} borderColor="gray.300" borderRadius="lg" p="8" mb="8" boxShadow="md">
            <Flex flexDir="row" alignItems="flex-start" justifyContent="flex-start" flexWrap="wrap" gap="4">
                {image && (
                    <Box flexShrink="0">
                        <img 
                            src={image} 
                            alt={`${institution} logo`} 
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
                        {degree}
                    </Heading>
                    {major && (
                        <Text fontSize="lg" fontWeight="semibold" color="gray.600" _dark={{ color: "gray.400" }} mb="2">
                            {major}
                        </Text>
                    )}
                    <Flex flexDir="row" alignItems="center" gap="2" mb="2" flexWrap="wrap">
                        {institutionLink ? (
                            <Link 
                                href={institutionLink}
                                fontSize="xl"
                                fontWeight="semibold"
                                color="blue.600"
                                _hover={{ color: 'blue.800', textDecoration: 'underline' }}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                {institution}
                            </Link>
                        ) : (
                            <Text fontSize="xl" fontWeight="semibold" color="gray.700">
                                {institution}
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
            
            {(gpa || wam) && (
                <Box mb="4">
                    <Text fontSize="sm" fontWeight="semibold" color="gray.600" _dark={{ color: "gray.400" }} mb="2">
                        Academic Performance:
                    </Text>
                    <Flex flexWrap="wrap" gap="2">
                        {gpa && (
                            <Badge 
                                colorScheme="green" 
                                variant="subtle"
                                px="3"
                                py="1"
                                borderRadius="full"
                                fontSize="xs"
                            >
                                GPA: {gpa}
                            </Badge>
                        )}
                        {wam && (
                            <Badge 
                                colorScheme="green" 
                                variant="subtle"
                                px="3"
                                py="1"
                                borderRadius="full"
                                fontSize="xs"
                            >
                                WAM: {wam}
                            </Badge>
                        )}
                    </Flex>
                </Box>
            )}

            {achievements && achievements.length > 0 && (
                <Box>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.600" _dark={{ color: "gray.400" }} mb="2">
                        Achievements & Highlights:
                    </Text>
                    <Flex flexWrap="wrap" gap="2">
                        {achievements.map((achievement, index) => (
                            <Badge 
                                key={index}
                                colorScheme="purple" 
                                variant="subtle"
                                px="3"
                                py="1"
                                borderRadius="full"
                                fontSize="xs"
                            >
                                {achievement}
                            </Badge>
                        ))}
                    </Flex>
                </Box>
            )}
        </Box>
    );
}

export default Education;