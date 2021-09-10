import { ButtonContainer, ButtonContent } from './Button.styled';

function Button (props) {
    const { type, action, enable, label } = props;
    console.log(type);
    return (
        <ButtonContainer enable={enable} >
            <ButtonContent type={type} onClick={enable() ? action : undefined} enable={enable()} >
                {label}
            </ButtonContent>
        </ButtonContainer>
    );
}

export default Button;