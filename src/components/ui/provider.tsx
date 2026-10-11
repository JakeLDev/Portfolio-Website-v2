"use client"

import { ChakraProvider, createSystem, defaultBaseConfig, defineConfig, mergeConfigs } from "@chakra-ui/react"
import {
  badgeRecipe, buttonRecipe, containerRecipe, headingRecipe,
  iconRecipe, linkRecipe, skeletonRecipe, tabsSlotRecipe,
} from "@chakra-ui/react/theme"
// Chakra doesn't export its default tokens on their own, only bundled with every
// component recipe (~200 KB). These deep imports (aliased in vite.config.ts and
// tsconfig.json) rebuild the default theme with just the recipes this site uses.
// Using a new Chakra component? Add its recipe above or it renders unstyled.
// Upgrading Chakra? Compare against node_modules/@chakra-ui/react/dist/esm/theme/index.js.
import { breakpoints } from "chakra-theme/breakpoints"
import { globalCss } from "chakra-theme/global-css"
import { layerStyles } from "chakra-theme/layer-styles"
import { animationStyles } from "chakra-theme/motion-styles"
import { textStyles } from "chakra-theme/text-styles"
import { semanticColors } from "chakra-theme/semantic-tokens/colors"
import { semanticRadii } from "chakra-theme/semantic-tokens/radii"
import { semanticShadows } from "chakra-theme/semantic-tokens/shadows"
import { animations } from "chakra-theme/tokens/animations"
import { aspectRatios } from "chakra-theme/tokens/aspect-ratios"
import { blurs } from "chakra-theme/tokens/blurs"
import { borders } from "chakra-theme/tokens/borders"
import { colors } from "chakra-theme/tokens/colors"
import { cursor } from "chakra-theme/tokens/cursor"
import { durations } from "chakra-theme/tokens/durations"
import { easings } from "chakra-theme/tokens/easings"
import { fontSizes } from "chakra-theme/tokens/font-sizes"
import { fontWeights } from "chakra-theme/tokens/font-weights"
import { fonts } from "chakra-theme/tokens/fonts"
import { keyframes } from "chakra-theme/tokens/keyframes"
import { letterSpacings } from "chakra-theme/tokens/letter-spacing"
import { lineHeights } from "chakra-theme/tokens/line-heights"
import { radii } from "chakra-theme/tokens/radius"
import { sizes } from "chakra-theme/tokens/sizes"
import { spacing } from "chakra-theme/tokens/spacing"
import { zIndices } from "chakra-theme/tokens/z-indices"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const system = createSystem(mergeConfigs(defaultBaseConfig, defineConfig({
  preflight: true,
  cssVarsPrefix: "chakra",
  cssVarsRoot: ":where(html, .chakra-theme)",
  globalCss,
  theme: {
    breakpoints,
    keyframes,
    tokens: {
      aspectRatios, animations, blurs, borders, colors, durations, easings, fonts, fontSizes,
      fontWeights, letterSpacings, lineHeights, radii, spacing, sizes, zIndex: zIndices, cursor,
    },
    semanticTokens: { colors: semanticColors, shadows: semanticShadows, radii: semanticRadii },
    recipes: {
      badge: badgeRecipe, button: buttonRecipe, container: containerRecipe, heading: headingRecipe,
      icon: iconRecipe, link: linkRecipe, skeleton: skeletonRecipe,
    },
    slotRecipes: { tabs: tabsSlotRecipe },
    textStyles,
    layerStyles,
    animationStyles,
  },
})))

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
