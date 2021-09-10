import { DayContainer, DayContent } from './Day.styled';
import { navigation } from "../global/theme";

function Day(props) {
    const { enable, value, getDate, getDateAcces, getSelectedDay } = props;
    const type = getSelectedDay(value);

    return (
        <DayContainer
            tabIndex={enable ? navigation.tabIndex : undefined}
            onClick={enable ? (e) => getDate(e, value) : undefined}
            onKeyDown={enable ? (e) => getDateAcces(e, value) : undefined}
            enable={enable}
            type={type}
        >
            <DayContent 
                enable={enable}
                type={type}    
            >
                {value}
            </DayContent>
        </DayContainer>

    );
}

export default Day;