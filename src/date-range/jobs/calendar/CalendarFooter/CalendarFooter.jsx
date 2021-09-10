import Button from "../../../materials/button/Button";
import { FlexRowSpaced } from '../../../materials/global/container.styled';

function CalendarFooter (props) {
    const { resetDate, submitDate, dateStart, dateEnd } = props;

    function enableReset() {
        let response = false;

        if (dateStart) {
            response = true;
        }
        return response;
    }

    function enableSubmit() {
        let response = false;

        if (dateStart && dateEnd) {
            response = true;
        }
        return response;
    }

    return (
        <FlexRowSpaced>
            <Button type={'minimalist'} enable={enableReset} action={resetDate} label={'Réinitialiser'} />
            <Button type={'full'} enable={enableSubmit} action={submitDate} label={'Valider la sélection'} />
        </FlexRowSpaced>
    );
}

export default CalendarFooter;