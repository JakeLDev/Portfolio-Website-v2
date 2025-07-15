import { Box, Badge, Heading } from '@chakra-ui/react';
import { 
    SiTypescript, SiJavascript, SiPython, SiReact, SiVuedotjs, SiHtml5, SiCss3,
    SiNodedotjs, SiPostgresql, SiMysql, SiMongodb, SiDocker, SiApachemaven,
    SiGit, SiGithub, SiLinux, SiIntellijidea, SiJira, SiAmazonwebservices,
    SiConfluence, SiPostman, SiNpm, SiSpringboot, SiGraphql, SiAwslambda, SiOpensearch,
    SiRedux, SiWebpack, SiVite, SiJupyter, SiPandas, SiNumpy, SiScikitlearn, SiOpenai,
    SiChakraui, SiKubernetes, SiJenkins, SiGithubactions, SiServerless, SiApachelucene, SiBamboo, SiBitbucket, SiGithubcopilot
} from 'react-icons/si';
import { 
    FaJava, FaDatabase, FaCloud, FaCode, FaTools, FaCogs, FaChartBar,
    FaProjectDiagram, FaUsers, FaCheckCircle, FaBug, FaLayerGroup
} from 'react-icons/fa';

const Skills = () => {
    // Icon mapping for technologies with their brand colors
    const getSkillIcon = (skill: string) => {
        const iconMap: { [key: string]: { icon: any, color: string } } = {
            // Backend
            "Java": { icon: FaJava, color: "#ED8B00" },
            "TypeScript": { icon: SiTypescript, color: "#3178C6" },
            "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
            "Python": { icon: SiPython, color: "#3776AB" },
            "Node.js": { icon: SiNodedotjs, color: "#339933" },
            "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
            "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
            "MySQL": { icon: SiMysql, color: "#4479A1" },
            "MongoDB": { icon: SiMongodb, color: "#47A248" },
            "GraphQL": { icon: SiGraphql, color: "#E10098" },
            "Lucene": { icon: SiApachelucene, color: "#6B7280" },
            "OpenSearch": { icon: SiOpensearch, color: "#FF9900" },
            
            // Frontend
            "React.js": { icon: SiReact, color: "#61DAFB" },
            "HTML5": { icon: SiHtml5, color: "#E34F26" },
            "CSS3": { icon: SiCss3, color: "#1572B6" },
            "Chakra UI": { icon: SiChakraui, color: "#319795" },
            "Vue.js": { icon: SiVuedotjs, color: "#4FC08D" },
            "Redux": { icon: SiRedux, color: "#764ABC" },
            "Vite": { icon: SiVite, color: "#646CFF" },
            "Webpack": { icon: SiWebpack, color: "#8DD6F9" },
            
            // DevOps
            "AWS": { icon: SiAmazonwebservices, color: "#FF9900" },
            "Docker": { icon: SiDocker, color: "#2496ED" },
            "Git": { icon: SiGit, color: "#F05032" },
            "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
            "Linux": { icon: SiLinux, color: "#FCC624" },
            "Kubernetes": { icon: SiKubernetes, color: "#326CE5" },
            "Jenkins": { icon: SiJenkins, color: "#D24939" },
            "Serverless": { icon: SiServerless, color: "#FD5750" },
            "Bamboo": { icon: SiBamboo, color: "#0052CC" },
            "Bitbucket": { icon: SiBitbucket, color: "#0052CC" },
            
            // Data Science
            "Pandas": { icon: SiPandas, color: "#442d9eff" },
            "NumPy": { icon: SiNumpy, color: "#005875ff" },
            "Jupyter": { icon: SiJupyter, color: "#F37626" },
            "Machine Learning": { icon: SiScikitlearn, color: "#F7931E" },
            
            // Tools
            "GitHub": { icon: SiGithub, color: "#000000ff" },
            "IntelliJ IDEA": { icon: SiIntellijidea, color: "#000000" },
            // "VS Code": { icon: null, color: "#007ACC" },
            "Jira": { icon: SiJira, color: "#0052CC" },
            "Confluence": { icon: SiConfluence, color: "#0052CC" },
            "Postman": { icon: SiPostman, color: "#FF6C37" },
            "npm": { icon: SiNpm, color: "#CB3837" },
            "Maven": { icon: SiApachemaven, color: "#C71A36" },
            // "Cursor AI": { icon: null, color: "#6B7280" }, // Placeholder for Cursor AI
            "ChatGPT": { icon: SiOpenai, color: "#10A37F" },
            
            // Generic fallbacks
            "REST APIs": { icon: FaCode, color: "#6B7280" },
            "SQL": { icon: FaDatabase, color: "#336791" },
            "Microservices": { icon: FaLayerGroup, color: "#6B7280" },
            "CI/CD": { icon: FaCogs, color: "#6B7280" },
            "AWS Lambda": { icon: SiAwslambda, color: "#FF9900" },
            "Infrastructure as Code": { icon: FaCloud, color: "#6B7280" },
            "Cloud Computing": { icon: FaCloud, color: "#6B7280" },
            "SciPy": { icon: FaChartBar, color: "#8CAAE6" },
            "Data Analysis": { icon: FaChartBar, color: "#6B7280" },
            "Statistics": { icon: FaChartBar, color: "#6B7280" },
            "Data Visualization": { icon: FaChartBar, color: "#6B7280" },
            "Computer Vision": { icon: FaChartBar, color: "#6B7280" },
            "Agile Development": { icon: FaUsers, color: "#6B7280" },
            "Scrum": { icon: FaUsers, color: "#6B7280" },
            "Object Oriented Programming (OOP)": { icon: FaCode, color: "#6B7280" },
            "Test Driven Development (TDD)": { icon: FaCheckCircle, color: "#10B981" },
            "Code Review": { icon: FaBug, color: "#EF4444" },
            "Database Design": { icon: FaDatabase, color: "#6B7280" },
            "Software Architecture": { icon: FaProjectDiagram, color: "#6B7280" },
            "Performance Optimization": { icon: FaCogs, color: "#6B7280" },
            "Chrome DevTools": { icon: FaTools, color: "#4285F4" },
            "Responsive Design": { icon: FaCode, color: "#6B7280" },
            "Single Page Applications": { icon: FaCode, color: "#6B7280" },
            "Kotlin": { icon: FaCode, color: "#7F52FF" },
            "GitHub Copilot": { icon: SiGithubcopilot, color: "#6B7280" },
        };
        
        return iconMap[skill] || null;
    };

    const skillCategories = [
        {
            category: "Backend",
            skills: [
                "Java", "Python",
                "Node.js", "REST APIs", "Spring Boot", "SQL", "PostgreSQL", 
                "MySQL", "Microservices", "GraphQL", "Lucene", "OpenSearch"
            ]
        },
        {
            category: "Frontend", 
            skills: [
                "React.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
                "Atlassian Design System", "Vue.js", "Responsive Design", 
                "Single Page Applications", "Webpack", "TinyMCE"
            ]
        },
        {
            category: "DevOps",
            skills: [
                "AWS", "Docker", "CI/CD", "Git", "Bitbucket", "Bitbucket Pipelines", "Bamboo", "GitHub Actions",
                "Linux", "AWS Lambda", "Infrastructure as Code",
                "Serverless", "Cloud Computing"
            ]
        },
        {
            category: "Data Science & AI",
            skills: [
                "Python", "Pandas", "NumPy", "Machine Learning", 
                "Data Analysis", "Statistics", "Jupyter", "SciPy",
                "Data Visualization", "Computer Vision"
            ]
        },
        {
            category: "Practices",
            skills: [
                "Agile Development", "Scrum",
                "Test Driven Development (TDD)", "Code Review", 
                "Database Design", "Software Architecture", "Performance Optimization"
            ]
        },
        {
            category: "Tools",
            skills: [
                "Git", "GitHub", "IntelliJ IDEA", "VS Code", "Jira",
                "Confluence", "Postman", "Chrome DevTools", "npm", "Maven", "Cursor AI", "ChatGPT", "GitHub Copilot"
            ]
        }
    ];

    return (
        <Box>
            {skillCategories.map((category, index) => (
                <Box key={index}>
                    {/* Desktop Layout - 2 column table */}
                    <Box 
                        display={{ base: "none", md: "grid" }}
                        gridTemplateColumns="200px 1fr" 
                        gap="6"
                        py="6"
                        alignItems="start"
                    >
                        {/* Category Name Column */}
                        <Box>
                            <Heading 
                                as="h3" 
                                size="lg" 
                                color="gray.700" 
                                _dark={{ color: "gray.300" }}
                                fontWeight="600"
                            >
                                {category.category}
                            </Heading>
                        </Box>
                        
                        {/* Skills Column */}
                        <Box>
                            <Box display="flex" flexWrap="wrap" gap="2">
                                {category.skills.map((skill, skillIndex) => {
                                    const skillData = getSkillIcon(skill);
                                    return (
                                        <Badge
                                            key={skillIndex}
                                            variant="subtle"
                                            colorScheme="blue"
                                            px="3"
                                            py="2"
                                            borderRadius="md"
                                            fontSize="lg"
                                            fontWeight="medium"
                                            display="flex"
                                            alignItems="center"
                                            gap="2"
                                            userSelect="text"
                                        >
                                            {skillData && (
                                                <Box 
                                                    as={skillData.icon} 
                                                    boxSize="20px"
                                                    color={skillData.color}
                                                    display="inline-block"
                                                />
                                            )}
                                            {skill}
                                        </Badge>
                                    );
                                })}
                            </Box>
                        </Box>
                    </Box>

                    {/* Mobile Layout - Centered stacked */}
                    <Box 
                        display={{ base: "block", md: "none" }}
                        py="6"
                        textAlign="center"
                    >
                        {/* Category Name - Centered */}
                        <Heading 
                            as="h3" 
                            size="lg" 
                            color="gray.700" 
                            _dark={{ color: "gray.300" }}
                            fontWeight="600"
                            mb="4"
                        >
                            {category.category}
                        </Heading>
                        
                        {/* Skills - Centered */}
                        <Box display="flex" flexWrap="wrap" gap="2" justifyContent="center">
                            {category.skills.map((skill, skillIndex) => {
                                const skillData = getSkillIcon(skill);
                                return (
                                    <Badge
                                        key={skillIndex}
                                        variant="subtle"
                                        colorScheme="blue"
                                        px="3"
                                        py="2"
                                        borderRadius="md"
                                        fontSize="sm"
                                        fontWeight="medium"
                                        display="flex"
                                        alignItems="center"
                                        gap="2"
                                        userSelect="text"
                                    >
                                        {skillData && (
                                            <Box 
                                                as={skillData.icon} 
                                                boxSize="16px"
                                                color={skillData.color}
                                                display="inline-block"
                                            />
                                        )}
                                        {skill}
                                    </Badge>
                                );
                            })}
                        </Box>
                    </Box>
                    
                    {/* Separator Line (except for last item) */}
                    {index < skillCategories.length - 1 && (
                        <Box 
                            height="1px" 
                            bg="gray.200" 
                            _dark={{ bg: "gray.600" }}
                            mx="0"
                        />
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default Skills;