import React, { useState } from 'react';

import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarNavigation from './CalendarNavigation/CalendarNavigation';
import CalendarBody from './CalendarBody/CalendarBody';
import CalendarFooter from './CalendarFooter/CalendarFooter';
import date from '../../provider/date';

import { FlexColumn } from '../../materials/global/container.styled';
import { Line } from '../../materials/global/decoration.styled';

function Calendar(props) {
    const [selectedYear, setSelectedYear] = useState(date.currentYear());
    const [selectedMonth, setSelectedMonth] = useState(date.currentMonth());
    const { setDate, submitDate, resetDate, dateStart, dateEnd, highlight } = props;
    
    return (
        <FlexColumn>
            <CalendarHeader dateStart={dateStart} dateEnd={dateEnd} highlight={highlight} />
            <Line />
            <CalendarNavigation selectedYear={selectedYear} setSelectedYear={setSelectedYear} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
            <CalendarBody setDate={setDate} dateStart={dateStart} dateEnd={dateEnd} selectedYear={selectedYear} selectedMonth={selectedMonth} />
            <Line />
            <CalendarFooter resetDate={resetDate} submitDate={submitDate} dateStart={dateStart} dateEnd={dateEnd} />
        </FlexColumn>
    );
}

export default Calendar;