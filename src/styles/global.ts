import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    html: {
        fontSize: '62.5%'
    },

    body: {
        backgroundColor: '$white',
        'webkit-font-smoothing': 'antialised',
        margin: 'auto',
        overflowX: 'hidden',
    },

    'body, input, textarea, button': {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '400'
    },

    'button, a': {
        border: 'none',
        boxShadow: 'none',
        textDecoration: 'none',
    }
})