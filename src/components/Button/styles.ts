import { styled } from "@stitches/react";


export const ButtonContainer = styled('button', {

    borderRadius: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.8rem',
    flexShrink: '0',
    fontWeight: '600',

    '&:hover': {
        cursor: 'pointer',
    },
    
    variants:{

        variant:{
            primary:{
                backgroundColor: '$brand-red',
                color: '$white',
            },
            secondary:{
                backgroundColor: 'transparent',
                color: '$gray-500',
                border: '1px solid $gray-500'
            },
            tertiary: {
                backgroundColor: 'transparent',
                textDecorationLine: 'underline',
                color: 'inherit',
            },
        },

        size:{
            sm:{
                fontSize: '1.2rem',
                padding: '0.4rem 0.8rem',
            },
            md:{
                fontSize: '1.6rem',
                padding: '0.8rem 1.6rem',
            },
            lg:{
                fontSize: '2rem',
                padding: '1.2rem 2.4rem',
            },
        },

        textColor: {
            white: {
              color: '$white',
            },
            red: {
              color: '$brand-red',
            },
            blue: {
              color: '$brand-blue',
            }
        }
    },

    defaultVariants:{
        variant: 'primary',
        size: 'md',
        textColor: 'white'
    }

   
    
});