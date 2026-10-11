"use client";

import React, { useCallback } from "react";
import { Box, type BoxProps } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { usePrefersReducedMotion } from "./ui/use-reduced-motion";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ParticleContainerProps extends BoxProps {
  width?: string | number;
  height?: string | number;
}

const ParticleContainer: React.FC<ParticleContainerProps> = ({ 
  width = "100%", 
  height = "400px", 
  ...boxProps 
}) => {
  // Get current color mode
  const { colorMode } = useColorMode();
  
  // Dynamic colors based on theme
  const particleColor = colorMode === "light" ? "#1e40af" : "#60a5fa"; // Dark blue in light mode, light blue in dark mode
  const linkColor = colorMode === "light" ? "#1e40af" : "#60a5fa";

  // Static particles when the user prefers reduced motion (2.2.2)
  const reducedMotion = usePrefersReducedMotion();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box
      position="absolute"
      width={width}
      height={height}
      overflow="hidden"
      top={0}
      left={0}
      zIndex={-1}
      mb="4"
      {...boxProps}
    >
      <Particles
        key={colorMode} // Force re-render when theme changes
        id={`tsparticles-${colorMode}`}
        init={particlesInit}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 175,
                links: {
                  opacity: 0.6,
                },
              },
              push: {
                quantity: 2,
              },
              remove: {
                quantity: 2,
              },
            },
          },
          particles: {
            color: {
              value: particleColor,
            },
            links: {
              enable: true,
              distance: 165,
              color: linkColor,
              opacity: 0.15,
              width: 1,
            },
            move: {
              enable: !reducedMotion,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 90,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </Box>
  );
};

export default ParticleContainer;