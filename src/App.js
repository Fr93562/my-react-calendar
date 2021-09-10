import DateRange from './date-range/DateRange';

function App(props) {
  const { submit } = props;

  return (
      <DateRange submitRange={submit} />
  );
}

export default App;
