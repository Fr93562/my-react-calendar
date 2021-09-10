import React from 'react';
import Form from './jobs/form/Form';
import Calendar from './jobs/calendar/Calendar';
import Background from './materials/background/Background';
import action from './provider/action';
import { Container } from './DateRange.styled';

class DateRange extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            dateStart: '',
            dateEnd: '',
            open: false,
        };

        this.setDefaultValues();
    }

    componentDidUpdate() {
        this.setDefaultValues();
    }

    handleAction = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    }

    handleEchapp = (event) => {
        event.stopPropagation();
        const { open } = this.state;

        if (open && action.keyPress(event, 'Escape')) {
            this.handleAction();
        }
    }

    handleOpen = (event) => {
        const { open } = this.state;

        if (!open && action.keyPress(event, 'Enter')) {
            this.handleAction();
        }
    }

    setDefaultValues = () => {
        const { dateStart, dateEnd } = this.state;

        if (!dateStart && !dateEnd) {
            this.setDateStart('');
            this.setDateEnd('');
        }
    }

    setDateStart = (date) => {
        this.setState({
            dateStart: date,
        });
    }

    setDateEnd = (date) => {
        this.setState({
            dateEnd: date,
        });
    }

    setDate = (date) => {
        const { dateStart, dateEnd } = this.state;

        if (!dateStart) {

            this.setDateStart(date);
        } else if (dateStart && dateEnd) {

            this.setDateStart(date);
            this.setDateEnd('');
        } else if (dateStart) {

            const oldDateStart = new Date(dateStart);
            const newDateStart = new Date(date);

            if (oldDateStart <= newDateStart) {

                this.setDateEnd(date);
            } else {

                this.setDateStart(date);
            }
        }
    }

    submitDate = () => {
        const { submitRange } = this.props;
        const { dateStart, dateEnd } = this.state;

        submitRange(dateStart, dateEnd);
        this.handleAction();
    }

    resetDate = () => {
        this.setDateStart('');
        this.setDateEnd('');
    }

    getHighlight = () => {
        const { dateStart } = this.state;
        let highlight = '';

        if (!dateStart) {
            highlight = 'left';
        }

        if (dateStart) {
            highlight = 'right';
        }
        return highlight;
    }

    render() {
        const { dateStart, dateEnd, open } = this.state;
        // TODO: à tester sur nec
        window.addEventListener('keydown', this.handleEchapp);

        console.log(dateStart, dateEnd);
        return (
            <Container>
                <Form action={this.handleAction} handleOpen={this.handleOpen} dateStart={dateStart} dateEnd={dateEnd}/>
                {open && (
                    <>
                        <Calendar setDate={this.setDate} submitDate={this.submitDate} resetDate={this.resetDate} dateStart={dateStart} dateEnd={dateEnd} highlight={this.getHighlight()} />
                        <Background action={this.handleAction} />
                    </>)}
            </Container>
        );
    }
}

export default DateRange;