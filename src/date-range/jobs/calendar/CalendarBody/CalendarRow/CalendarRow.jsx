import CalendarCell from "../CalendarCell/CalendarCell";
import { TableRow } from "../../../../materials/global/table.styled";

function CalendarRow(props) {
    const { setDate, dateStart, dateEnd, selectedYear, selectedMonth, days, increment } = props;

    function getCells(days, position) {
        const cells = [];

        for (let i = position; i < position + 7; i++) {
            const cell = (
            <CalendarCell
                key={`m-calendar-cell-${i}`}
                setDate={setDate}
                position={i}
                days={days}
                selectedYear={selectedYear}
                selectedMonth={selectedMonth}
                dateStart={dateStart}
                dateEnd={dateEnd}
            />);

            cells.push(cell);
        }

        return cells;
    }

    return (
        <TableRow>
            {getCells(days, increment)}
        </TableRow>
    );
}

export default CalendarRow;