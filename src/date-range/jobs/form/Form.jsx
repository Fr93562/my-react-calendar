import Input from "../../materials/input/Input";
import { navigation } from "../../materials/global/theme";
import { FlexRow } from '../../materials/global/container.styled';

function FormDate (props) {
    const { action, handleOpen, dateStart, dateEnd } = props;

    return (
        <FlexRow tabIndex={navigation.tabIndex} onClick={action} onKeyDown={handleOpen} >
            <Input type="left" date={dateStart} highlight={''} /> 
            <Input type="right" date={dateEnd} highlight={''} /> 
        </FlexRow>
    );
}

export default FormDate;