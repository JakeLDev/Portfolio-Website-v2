"use client";

import React, { useCallback } from "react";
import { Box } from "@chakra-ui/react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ParticleContainerProps {
  width?: string | number;
  height?: string | number;
  [key: string]: any; // Allow other Box props to be passed through
}

const ParticleContainer: React.FC<ParticleContainerProps> = ({ 
  width = "100%", 
  height = "400px", 
  ...boxProps 
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log("Particles.js loaded");
    },
    []
  );

  return (
    <Box
      position="absolute"
      width={width}
      height={height}
      overflow="hidden"
      top={0}
        left={0}
      zIndex={-1}
      {...boxProps}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
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
          fpsLimit: 120,
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
                distance: 150,
                links: {
                  opacity: 0.4,
                },
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              enable: true,
              distance: 155,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
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