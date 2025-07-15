import { Link } from '@chakra-ui/react';

interface GithubButtonProps {
    githubLink: string;
    text?: string;
    elementId?: string;
}

const GithubButton = ({githubLink, text, elementId}: GithubButtonProps) => {
    return (
        <Link 
            id={ elementId }
            href={ githubLink }
            bg="#171515"
            color="white"
            px="7"
            py="3"
            display="flex"
            alignItems="center"
            gap="2"
            borderRadius="full"
            outline="none"
            _focus={{ transform: 'scale(1.1)' }}
            _hover={{ transform: 'scale(1.05)', color: 'purple.200' }}
            _active={{ transform: 'scale(1.05)' }}
            transition="all 0.2s"
            cursor="pointer"
            borderWidth="2px"
            borderColor="gray.700"
            target='_blank'
        >
            { text ? text : "GitHub" }
        </Link>
    )
};
export default GithubButton;