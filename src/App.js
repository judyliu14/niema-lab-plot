import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs>
        <div label="chart_1">
          <Chart chart={1} />
        </div>
        <div label="chart_2">
          <Chart chart={2} />
        </div>
        <div label="chart_3">
          <Chart chart={3} />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
