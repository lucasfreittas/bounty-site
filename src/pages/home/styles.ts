import { styled } from "@stitches/react";
import BannerHeroBG from '../../assets/banner-hero-bg.png';

export const HomeContainer = styled('section', {

});

export const BannerHero = styled('section', {
    background: `url(${BannerHeroBG.src})`,
    height: '80rem',
    width: '100%',
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: 10,

    [`.modelImage`]: {
        position: 'absolute',
        bottom: 0,
    },

    [`.mobileImage`]: {
        position: 'absolute',
        bottom: '16%',
        right: '80px',
    },

    [`.textContainer`]: {
        margin: 'auto',

        paddingTop: '160px',
        display:    'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

        color: '$white',

        'div':{
            margin: '8rem',
            zIndex: 10,
        }
    },

    [`.line1`]: {
        fontWeight: '300',
        fontSize: '4rem',
        letterSpacing: '18.4px',
        zIndex: 10,
    },

    [`.line2`]: {
        fontWeight: '600',
        fontSize: '11.6rem',
        lineHeight: '85%',
        zIndex: 10,
    },

    [`.line3`]: {
        fontWeight: '300',
        fontSize: '4rem',
        lineHeight: '120%',
        letterSpacing: '18.4px',
        zIndex: 10,
    },

    [`.line4`]: {
        fontWeight: '600',
        fontSize: '7.57rem',
        lineHeight: '101%',
        zIndex: 10,
    },

    [`.whiteBorder`]: {
        width: '100%',
        backgroundColor: '$white',
        height: '4rem',
        position: 'absolute',
        bottom: 0,
        borderRadius: '3.2rem 3.2rem 0 0'
    },

    '@media (max-width: 1280px)': {
        [`.modelImage`]: {
            left: '-100px'
        },

        [`.mobileImage`]: {
            right: '8px',
        },
    },
});

export const MainContainer = styled('section', {
    display: 'flex',
    gap: '8rem',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1128px',
    margin: 'auto',
    padding: '8rem 2.4rem',
});

export const BrandVideo = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '3.6rem',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '-3.6rem 0',
    zIndex: 20, 

    h1: {
        fontSize: '3.2rem',
        lineHeight: '140%',
        color: '$gray-700',
        fontWeight: '600',
    },

    span: {
        color: '$brand-blue',
    },

    div: {
        overflow: 'hidden',
        maxWidth: '92.4rem',
        maxHeighteight: '52rem',
        borderRadius: '3.2rem', 
    }

});

export const CardsSection = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 0',
    gap: '8rem',

    [`.cardSectionTitle`]: {
        width: '100%',
        
        
        h1: {
            fontSize: '3.2rem',
            lineHeight: '140%',
            fontWeight: '600',
            maxWidth: '41rem',
        },

        span:{
            color: '$brand-red',
        },
    },

    [`.cardsContainer`]: {
        display: 'flex',
        position: 'relative',
        justifyContent:"space-between",
        width: '100%',
        alignItems: 'center',

        'p': {
            fontSize: '2rem',
            lineHeight: '140%',
            maxWidth: '25.2rem',
        }
    },

    [`.boomerang`]:{
        position: 'absolute',
        right: '228px',
        top: '-180px',
    },
});