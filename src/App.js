import DateRange from './date-range/DateRange';

function App(props) {

  function submit() {
    console.log('is submit');
  }

  const rangeStart = '';
  const rangeEnd = '';

  return (
      <DateRange submitRange={submit} rangeStart={rangeStart} rangeEnd={rangeEnd} />
  );
}

export default App;
