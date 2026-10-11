import { useState, useEffect } from "react";
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

    // Scroll spy functionality
    useEffect(() => {
        const ids = navigationItems.map(item => item.id);

        // Which section scroll position alone says is current
        const computeSection = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // If we're at the very top, always show Home
            if (scrollPosition < 200) return "Page";

            // At the very bottom, show the last section
            if (scrollPosition + windowHeight >= documentHeight - 2) return ids[ids.length - 1];

            // Find which section title is closest to the top of the viewport
            let currentSection = "Page";
            let closestDistance = Infinity;
            for (const id of ids) {
                const element = document.getElementById(id);
                if (!element) continue;
                const rect = element.getBoundingClientRect();

                // Only consider sections that are visible and not too far down
                if (rect.top <= windowHeight * 0.6 && rect.bottom > -100) {
                    const distanceFromTop = Math.abs(rect.top);
                    if (distanceFromTop < closestDistance) {
                        closestDistance = distanceFromTop;
                        currentSection = id;
                    }
                }
            }
            return currentSection;
        };

        // A nav click pins its section. Short sections near the page end (Education) can't
        // scroll to the top, so position alone would say Contact; at the bottom the two are
        // both on screen and no threshold separates them. So the pin stays until the user
        // scrolls down, or up past the pinned section, rather than flipping at some pixel.
        let pinned: string | null = null;
        let userScrolling = false; // false while the click's own smooth scroll is running
        let lastY = window.scrollY;

        const pin = (id: string) => {
            if (!ids.includes(id)) return;
            pinned = id;
            userScrolling = false;
            setActiveSection(id);
        };
        const onHashChange = () => pin(window.location.hash.slice(1));
        // Clicking the link for the current hash doesn't fire hashchange
        const onClick = (e: MouseEvent) => {
            const href = (e.target as Element).closest?.('nav a[href^="#"]')?.getAttribute('href');
            if (href) pin(href.slice(1));
        };
        const takeControl = () => { userScrolling = true; };
        const onKeyDown = (e: KeyboardEvent) => {
            if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) takeControl();
        };

        const handleScroll = () => {
            const goingDown = window.scrollY > lastY;
            lastY = window.scrollY;
            const computed = computeSection();

            if (pinned) {
                if (!userScrolling) return;
                const pinnedIndex = ids.indexOf(pinned);
                const computedIndex = ids.indexOf(computed);
                // Keep the pin unless the user moved on to an earlier section or is scrolling down
                if (computedIndex === pinnedIndex || (computedIndex > pinnedIndex && !goingDown)) {
                    setActiveSection(pinned);
                    return;
                }
                pinned = null;
            }
            setActiveSection(computed);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('hashchange', onHashChange);
        window.addEventListener('click', onClick);
        window.addEventListener('wheel', takeControl, { passive: true });
        window.addEventListener('touchmove', takeControl, { passive: true });
        window.addEventListener('keydown', onKeyDown);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('hashchange', onHashChange);
            window.removeEventListener('click', onClick);
            window.removeEventListener('wheel', takeControl);
            window.removeEventListener('touchmove', takeControl);
            window.removeEventListener('keydown', onKeyDown);
        };
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
                    bg="bg/90" 
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
                >
                    <Box position="fixed" top="3" left="3" zIndex="1001">
                        <Drawer.Trigger asChild>
                            <IconButton
                                aria-label="Menu"
                                bg="bg/90"
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
                                                window.location.hash = id;
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
            <Box position="fixed" top={{ base: "3", md: "2" }} right="5" zIndex="1000">
                <ColorModeButton 
                    bg="bg/90" 
                    borderColor={"blackAlpha.200"}
                    borderWidth="1px"
                    borderRadius="md" 
                    style={{ backdropFilter: "blur(10px)" }} 
                    boxSize={{ base: "9", md: "46px" }}
                />
            </Box>
        </>
    );
}

export default TitleBar;
