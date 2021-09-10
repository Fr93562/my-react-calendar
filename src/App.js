import logo from './logo.svg';
import './App.css';

import DateRange from './date-range/DateRange';

function submit () {
  console.log('submit');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <DateRange submitRange={submit} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
     
    </div>
  );
}

export default App;
