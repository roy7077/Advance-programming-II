
import './App.css';
import BasicTable from './components/BasicTable';
import Profile from './components/Profile';
import { BrowserRouter } from 'react-router-dom'
import { chapter1 ,chapter2 ,chapter3 ,chapter4 } from './conts.js/Data';

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

      {/* UNIT - 1 */}
      <div className='div-sagar'>
      <h1 className='heading'>UNIT - 1</h1>
      </div>
      <div className='div-sagar-1'>
      <h1 className='heading'>Chapter-1</h1>
      </div>
      <BasicTable data={chapter1}/>

      <div className='div-sagar-1'>
      <h1 className='heading'>Chapter-2</h1>
      </div>
      <BasicTable data={chapter2}/>
       
      <div className='div-sagar-1'>
      <h1 className='heading'>Chapter-3</h1>
      </div>
      <BasicTable data={chapter3}/>
      
      {/* UNIT - 2 */}
      <div className='div-sagar'>
      <h1 className='heading'>UNIT - 2</h1>
      </div>
      <div className='div-sagar-1'>
      <h1 className='heading'>Chapter-4</h1>
      </div>
      <BasicTable data={chapter4}/>

      <div className='div-sagar-1'>
      <h1 className='heading'>Chapter-5</h1>
      </div>
      <BasicTable data={chapter2}/>
       
      <div className='div-sagar-1'>
      <h1 className='heading'>Chapter-6</h1>
      </div>
      <BasicTable data={chapter3}/>

    </div>
    </BrowserRouter>
  );
}

export default App;
