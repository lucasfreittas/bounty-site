import { styled } from "@stitches/react";

export const MenuWrapper = styled('div', {
    position: 'absolute',
    top: 0,
    width: '100vw',
    zIndex: 9,
});

export const MenuContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '114rem',
    margin: 'auto',
    padding: '2.4rem',
   
});

export const MenuLinks = styled('nav', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: '4rem',
    margin: '0 8rem',

    'a': {
        color: '$white',
        fontSize: '1.6rem',
    }
});

export const MenuActions = styled('nav', {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4rem',
    fontWeight: '600',

    'a': {
        color: '$white',
        fontSize: '1.6rem',
    }
});