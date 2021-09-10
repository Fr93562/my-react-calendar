import date from '../../../../provider/date';
import range from "../../../../provider/range";
import action from "../../../../provider/action";
import format from "../../../../provider/format";
import { TableCell } from "../../../../materials/global/table.styled";
import Day from '../../../../materials/day/Day';

function CalendarCell(props) {
    const { setDate, dateStart, dateEnd, selectedYear, selectedMonth, days, position } = props;
    
    function getDate(e, day) {
        const date = `${selectedYear}-${format.dateRender(selectedMonth)}-${format.dateRender(day)}`;
        setDate(date);
    }

    function getDateAcces(e, day) {
        if (action.keyPress(e, 'Enter')) {
            getDate(e, day);
        }
    }

    function getEnableDays(day) {
        const actualYear = date.currentYear();
        const actualMonth = date.currentMonth();
        const minRange = range.min();
        let response = true;

        if (!day) {
            response = false;
        }
        if (minRange === selectedYear && actualMonth === selectedMonth && day < date.currentDay()) {
            response = false;
        }
        if (actualYear === selectedYear && actualMonth === selectedMonth && day > date.currentDay()) {
            response = false;
        }
        return response;
    }

    function getLimitDaySelected(day, value, result) {
        let response = '';

        if (day) {
            const dateBroken = format.dateToArray(value);

            if (dateBroken[0] === day && dateBroken[1] === selectedMonth && dateBroken[2] === selectedYear) {
                response = result;
            }
        }
        return response;
    }

    function getRangeDaySelected(day) {
        let response = '';

        if (dateStart && dateEnd && day) {
            const dateStartBroken = format.dateToArray(dateStart);
            const dateEndBroken = format.dateToArray(dateEnd);

            if (dateStartBroken[1] === selectedMonth && dateEndBroken[1] === selectedMonth &&
                dateStartBroken[2] === selectedYear && dateEndBroken[2] === selectedYear) {

                if (dateStartBroken[0] < day && dateEndBroken[0] > day) {
                    response = 'range';
                }
            } else {

                if (dateStartBroken[1] === selectedMonth && dateStartBroken[2] === selectedYear && dateStartBroken[0] < day) {
                    response = 'range';
                }

                if (dateEndBroken[1] === selectedMonth && dateEndBroken[2] === selectedYear && dateEndBroken[0] > day) {
                    response = 'range';
                }

                if ((dateStartBroken[1] < selectedMonth && dateEndBroken[1] > selectedMonth) && (dateStartBroken[2] === selectedYear && dateEndBroken[2] === selectedYear)) {
                    response = 'range';
                }
            }
        }
        return response;
    }

    function getSelectedDay(day) {
        let response = '';
        response = getLimitDaySelected(day, dateStart, 'start');

        if (!response) {
            response = getRangeDaySelected(day);
        }

        if (!response) {
            response = getLimitDaySelected(day, dateEnd, 'end');
        }

        if (dateStart && dateEnd && dateStart === dateEnd && response) {
            response = 'alone'
        }
        return response;
    }

    const enable = getEnableDays(days[position]);

    return (
        <TableCell>
            <Day
                enable={enable}
                value = {days[position]}
                getDate={getDate}
                getDateAcces={getDateAcces}
                getSelectedDay={getSelectedDay}
            />
        </TableCell>
    );
}

export default CalendarCell;