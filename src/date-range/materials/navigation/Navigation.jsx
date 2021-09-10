import { NavigationContainer, NavigationContent } from './Navigation.styled';
import drawLeftArrow from '../assets/drawLeftArrow';
import drawRightArrow from '../assets/drawRightArrow';
import Logo from '../Logo/Logo';
import { colors } from '../global/theme';

function Navigation (props) {
    const { type, enable, action } = props;
    const color = enable() ? colors.black : colors.grey;

        return (
        <NavigationContainer type={type} >
            <NavigationContent onClick={enable() ? action : undefined} enable={enable()} >
                { type === 'before' ? (
                    <>
                        <Logo draw={drawLeftArrow} color={color} />
                    </>
                ) : (
                    <>
                        <Logo draw={drawRightArrow} color={color}/>
                    </>
                )}
            </NavigationContent>
        </NavigationContainer>
    );
}

export default Navigation;