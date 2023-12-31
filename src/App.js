import './App.css';
import Body from './components/Body';
import Profile from './components/Profile';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='my-profile'>
      <Profile/>
      </div>
      <Body/>
    </div>
    </BrowserRouter>
  );
}

export default App;
