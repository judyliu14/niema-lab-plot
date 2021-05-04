import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Chart />
    </div>
  );
}

export default App;
