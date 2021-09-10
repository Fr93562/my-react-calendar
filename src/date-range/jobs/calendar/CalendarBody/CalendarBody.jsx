import date from '../../../provider/date';
import CalendarRow from "./CalendarRow/CalendarRow";
import CalendarLabel from "./CalendarLabel/CalendarLabel";
import { FlexRow } from '../../../materials/global/container.styled';
import { TableBody, TableContainer } from "../../../materials/global/table.styled";

function CalendarBody(props) {
    const { setDate, dateStart, dateEnd, selectedYear, selectedMonth } = props;

    function getRows(selectedYear, selectedMonth) {
        const days = date.calendar(selectedYear, selectedMonth);
        const rows = [];

        for (let i = 0; i < days.length; i += 7) {
            const row = <CalendarRow 
                            key={`m-calendar-row-${i}`}
                            selectedMonth={selectedMonth}
                            selectedYear={selectedYear}
                            dateStart={dateStart}
                            dateEnd={dateEnd}
                            setDate ={setDate }
                            days={days}
                            increment={i}
                        />
            rows.push(row);
        }
        return rows;
    }

    return (
        <FlexRow>
            <TableContainer>
                <CalendarLabel />
                <TableBody>
                    {getRows(selectedYear, selectedMonth)}
                </TableBody>
            </TableContainer>
        </FlexRow>
    );
}

export default CalendarBody;
