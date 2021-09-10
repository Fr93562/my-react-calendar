import date from '../../../provider/date';
import range from '../../../provider/range';
import format from "../../../provider/format";
import Navigation from '../../../materials/navigation/Navigation';
import { Legend } from '../../../materials/global/content.styled';
import { FlexRowSpaced } from '../../../materials/global/container.styled';

function CalendarNavigation(props) {
    const { selectedYear, selectedMonth, setSelectedYear, setSelectedMonth } = props;
    const month = format.months[selectedMonth];

    function previousMonth() {
        if (selectedMonth === 1) {
            setSelectedYear(selectedYear - 1);
            setSelectedMonth(11);
        } else {
            setSelectedMonth(selectedMonth - 1);
        }
    }

    function nextMonth() {
        if (selectedMonth === 11) {
            setSelectedYear(selectedYear + 1);
            setSelectedMonth(0);
        } else {
            setSelectedMonth(selectedMonth + 1);
        }
    }

    function getMinRange() {
        let enable = true;
        const actualMonth = date.currentMonth();
        const minRange = range.min();

        if (actualMonth === selectedMonth && minRange === selectedYear) {
            enable = false;
        }
        return enable;
    }

    function getMaxRange() {
        let enable = true;
        const actualYear = date.currentYear();
        const actualMonth = date.currentMonth();

        if (actualMonth === selectedMonth && actualYear === selectedYear) {
            enable = false;
        }
        return enable;
    }

    return (
        <FlexRowSpaced>
            <Navigation type="before" enable={getMinRange} action={previousMonth} />
            <Legend>
                {`${month} ${selectedYear}`}
            </Legend>
            <Navigation type="next" enable={getMaxRange} action={nextMonth} />
        </FlexRowSpaced>
    );
}

export default CalendarNavigation;