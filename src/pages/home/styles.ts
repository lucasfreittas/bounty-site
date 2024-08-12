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

    '@media (max-width: 1280px)': {
        background: 'red',
    },
});
