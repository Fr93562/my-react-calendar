import { InputContainer, InputContent } from './Input.styled';
import format from '../../provider/format';
import { colors } from '../global/theme';
import drawCalendar from '../assets/drawCalendar';
import Logo from '../Logo/Logo';

function Input (props) {
    const { type, date, highlight } = props;
    
    function getState () {
        let response = '';

        if (date) {
            response = 'active';
        }
        if (highlight ===type) {
            response = 'selected'
        }
        return response;
    }

    function getColor () {
        let color= colors.grey;
        const state = getState ();

        if (state) {
            if (state === 'active') {
                color = colors.black;
            } else {
                color = colors.blue;
            }
        }
        return color;
    }

    return (
        <InputContainer type={type} color={getColor()}>
            <InputContent color={getColor()}>
            <Logo draw={drawCalendar} color={getColor()} />
            {date ? 
                format.dateReverse(date)
                :
                type === 'left' ? format.defaultValues.start : format.defaultValues.end
            }
            </InputContent>

        </InputContainer>
    );
}

export default Input;