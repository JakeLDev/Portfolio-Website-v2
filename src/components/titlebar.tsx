import { useState, useEffect, useRef } from "react";
import { Box, Flex, IconButton, CloseButton, Drawer, Portal, Link } from '@chakra-ui/react';
import { ColorModeButton } from "./ui/color-mode";
import { FaBars } from 'react-icons/fa';

const navigationItems = [
    { id: "Page", label: "Home" },
    { id: "ProjectsTitle", label: "Projects" },
    { id: "SkillsTitle", label: "Skills" },
    { id: "WorkExperienceTitle", label: "Work Experience" },
    { id: "EducationTitle", label: "Education" },
    { id: "ContactTitle", label: "Contact" }
];

interface NavListProps {
    activeSection: string;
    direction: "row" | "column";
    onNavigate?: (id: string) => void;
}

// One list of in-page links, shared by the desktop bar and the mobile drawer.
const NavList = ({ activeSection, direction, onNavigate }: NavListProps) => (
    <Flex as="ul" listStyleType="none" m="0" p="0" gap="1" flexDir={direction} colorPalette="blue">
        {navigationItems.map((item) => {
            const active = activeSection === item.id;
            return (
                <li key={item.id}>
                    <Link
                        href={`#${item.id}`}
                        aria-current={active ? "location" : undefined}
                        onClick={onNavigate ? (e) => { e.preventDefault(); onNavigate(item.id); } : undefined}
                        display="block"
                        px="3"
                        py="1.5"
                        borderRadius="md"
                        textAlign={direction === "column" ? "center" : undefined}
                        fontSize={direction === "column" ? "lg" : "md"}
                        fontWeight={active ? "bold" : "medium"}
                        color={active ? "colorPalette.fg" : "fg"}
                        bg={active ? "colorPalette.subtle" : "transparent"}
                        // Non-colour cue for the current section: a 2px underline bar
                        boxShadow={active ? "inset 0 -2px 0 0 currentColor" : "none"}
                        textDecoration="none"
                        _hover={{ bg: active ? "colorPalette.muted" : "bg.muted", textDecoration: "none" }}
                    >
                        {item.label}
                    </Link>
                </li>
            );
        })}
    </Flex>
);

const TitleBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Page");
    // Section chosen in the drawer; navigated to once the drawer has closed so
    // the drawer's focus-restore to the hamburger can't steal focus from it.
    const pendingSection = useRef<string | null>(null);

    // Scroll spy functionality
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // If we're at the very top, always show Home
            if (scrollPosition < 200) {
                setActiveSection("Page");
                return;
            }

            // If we're near the bottom of the page, show the last section
            if (scrollPosition + windowHeight >= documentHeight - 100) {
                setActiveSection(navigationItems[navigationItems.length - 1].id);
                return;
            }

            // Find which section title is closest to the top of the viewport
            let currentSection = "Page";
            let closestDistance = Infinity;
            
            for (const item of navigationItems) {
                const element = document.getElementById(item.id);
                if (!element) continue;
                const rect = element.getBoundingClientRect();

                // Only consider sections that are visible and not too far down
                if (rect.top <= windowHeight * 0.6 && rect.bottom > -100) {
                    const distanceFromTop = Math.abs(rect.top);
                    if (distanceFromTop < closestDistance) {
                        closestDistance = distanceFromTop;
                        currentSection = item.id;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navigation */}
            <Flex justify="center" p="2" display={{ base: "none", md: "flex" }}>
                <Box 
                    as="nav"
                    aria-label="Main"
                    position="fixed" 
                    minWidth="465px" 
                    m="0" 
                    zIndex="999"
                    background={"whiteAlpha.200"} 
                    borderColor={"blackAlpha.300"} 
                    borderWidth="1px" 
                    borderRadius="md" 
                    padding="1" 
                    style={{ backdropFilter: "blur(10px)" }}
                >
                    <NavList activeSection={activeSection} direction="row" />
                </Box>
            </Flex>

            {/* Mobile Hamburger Menu + Drawer */}
            <Box display={{ base: "block", md: "none" }}>
                <Drawer.Root
                    placement="start"
                    size="xs"
                    open={isMenuOpen}
                    onOpenChange={(e) => setIsMenuOpen(e.open)}
                    onExitComplete={() => {
                        if (pendingSection.current) {
                            window.location.hash = pendingSection.current;
                            pendingSection.current = null;
                        }
                    }}
                >
                    <Box position="fixed" top="3" left="3" zIndex="1001">
                        <Drawer.Trigger asChild>
                            <IconButton
                                aria-label="Menu"
                                background={"whiteAlpha.200"}
                                borderColor={"blackAlpha.200"}
                                borderWidth="1px"
                                borderRadius="md"
                                style={{ backdropFilter: "blur(10px)" }}
                                size="sm"
                                color="gray.800"
                                _dark={{ color: "white" }}
                            >
                                <FaBars />
                            </IconButton>
                        </Drawer.Trigger>
                    </Box>
                    <Portal>
                        <Drawer.Backdrop />
                        <Drawer.Positioner>
                            <Drawer.Content>
                                <Drawer.Header>
                                    <Drawer.Title srOnly>Site navigation</Drawer.Title>
                                </Drawer.Header>
                                <Drawer.Body>
                                    <nav aria-label="Main">
                                        <NavList
                                            activeSection={activeSection}
                                            direction="column"
                                            onNavigate={(id) => {
                                                pendingSection.current = id;
                                                setIsMenuOpen(false);
                                            }}
                                        />
                                    </nav>
                                </Drawer.Body>
                                <Drawer.CloseTrigger asChild>
                                    <CloseButton aria-label="Close menu" size="sm" position="absolute" top="2" right="2" />
                                </Drawer.CloseTrigger>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>
            </Box>

            {/* Color Mode Button - after the nav in the DOM so tab order matches the visual order */}
            <Box position="fixed" top="5" right="5" zIndex="1000">
                <ColorModeButton 
                    background={"whiteAlpha.200"} 
                    borderColor={"blackAlpha.200"}
                    borderWidth="1px"
                    borderRadius="md" 
                    style={{ backdropFilter: "blur(10px)" }} 
                />
            </Box>
        </>
    );
}

export default TitleBar;
