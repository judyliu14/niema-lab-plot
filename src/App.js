import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Chart />
      <Tabs>
        <div label="title1">
          Content1
        </div>
        <div label="title2">
          Content2
        </div>
        <div label="title3">
          Content3
        </div>
      </Tabs>
    </div>
  );
}

export default App;
