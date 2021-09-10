import format from "../../../../provider/format";
import {TableHeader, TableRow, TableParamCell } from "../../../../materials/global/table.styled";
import { Label } from '../../../../materials/global/content.styled';

function CalendarLabel() {
    function getDayName() {
        return format.days.map((day) =>
            (<TableParamCell key={`day-${day}`}>
                <Label>
                    {day}
                </Label>
            </TableParamCell>)
        );
    }

    return (
        <TableHeader>
            <TableRow>
                {getDayName()}
            </TableRow>
        </TableHeader>
    );
}

export default CalendarLabel;