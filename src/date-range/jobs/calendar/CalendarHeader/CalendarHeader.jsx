import Input from "../../../materials/input/Input";
import { FlexRow } from '../../../materials/global/container.styled';

function CalendarHeader(props) {
    const { dateStart, dateEnd, highlight } = props;

    return (
        <>
            <FlexRow>
                <Input type="left" date={dateStart} highlight={highlight} />
                <Input type="right" date={dateEnd} highlight={highlight} />
            </FlexRow>
        </>

    );
}

export default CalendarHeader;