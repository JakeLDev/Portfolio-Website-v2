"use client"

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

// The default focus ring comes from the (gray) colorPalette: gray.400 is only
// 2.56:1 on white. Use blue.600 / blue.300, which clear 3:1 on both page
// backgrounds. Only the ring token changes, so the gray components keep their look.
const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        gray: {
          focusRing: {
            value: { _light: "{colors.blue.600}", _dark: "{colors.blue.300}" },
          },
        },
      },
    },
  },
})

const system = createSystem(defaultConfig, config)

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
