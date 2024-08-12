import { ButtonContainer } from "./styles";

interface ButtonProps {
    text: string
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'md' | 'lg';
    textColor?: 'white' | 'red' | 'blue';
}

export function Button({text, variant='primary', size='md', textColor='white'}: ButtonProps){
    return(
        <ButtonContainer variant={variant} size={size} textColor={textColor}>
            {text}
        </ButtonContainer>
    )
};