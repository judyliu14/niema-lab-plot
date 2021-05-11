import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs>
        <div label="chart_1">
          <Chart />
        </div>
        <div label="chart_2">
          <Chart />
        </div>
        <div label="chart_3">
          <Chart />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
