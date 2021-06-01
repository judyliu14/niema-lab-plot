import './App.css';
import Chart from './components/Chart';
import Tabs from './components/Tabs';
// import { Button, Dropdown, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

function App() {
  return (
    
    <div className="App">

      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            <Chart chart={1} />
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
           <Chart chart={2} />
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <Chart chart={3} />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}

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
        <div label="chart_4">
          <Chart chart={4} />
        </div>
        <div label="chart_5">
          <Chart chart={5} />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
