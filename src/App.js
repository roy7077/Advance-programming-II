
import './App.css';
import BasicTable from './components/BasicTable';
import Profile from './components/Profile';
import { BrowserRouter } from 'react-router-dom'
import { Unit1 } from './conts.js/Unit1';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='my-profile'>
      <Profile/>
      </div>

      <div className='div-sagar'>
      <h1 className='heading' >ADVANCE  programming - II </h1>
      </div>

      <div className='div-sagar'>
      <h1 className='heading'>UNIT - 1</h1>
      </div>
      <BasicTable data={Unit1}/>
      
      <div className='div-sagar'>
      <h1 className='heading'>UNIT - 2</h1>
      </div>
      <BasicTable data={Unit1} />

      <div className='div-sagar'>
      <h1 className='heading'>UNIT - 3</h1>
      </div>
      <BasicTable data={Unit1} />

    </div>
    </BrowserRouter>
  );
}

export default App;
