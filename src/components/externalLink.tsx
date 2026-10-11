import { Link, Icon, VisuallyHidden, type LinkProps } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ExternalLinkProps extends LinkProps {
    // Icon-only links have no visible text: callers put "(opens in new tab)" in their aria-label instead.
    iconOnly?: boolean;
}

// Link that opens in a new tab and says so, visually and to screen readers.
const ExternalLink = ({ children, iconOnly, ...props }: ExternalLinkProps) => (
    <Link target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        {!iconOnly && (
            <>
                <Icon as={FaExternalLinkAlt} boxSize="0.7em" />
                <VisuallyHidden> (opens in new tab)</VisuallyHidden>
            </>
        )}
    </Link>
);

export default ExternalLink;
