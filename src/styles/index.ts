import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({
    theme: {
        colors: {
            'brand-blue': '#27adff',
            'brand-red': '#ff0037',

            'gray-300': '#c5c5c5',
            'gray-500': '#575757',
            'gray-700': '#393939',

            'white': '#ffff',
        }
    },

    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1280px)',
      },

})