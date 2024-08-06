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
        backgroundColor: '$brand-blue',
        'webkit-font-smoothing': 'antialised'
    },

    'body, input, textarea, button': {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '400'
    }
})