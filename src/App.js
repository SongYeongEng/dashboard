import logo from './logo.svg';
import './App.css';
import Dashboard from './components/MyDashBoard'
import Profile from './components/Profile'
import Instrument from './components/Instrument';

function App() {
  return (
    <>
    
      <Dashboard />
      <div className="flex">
        <div className="Com1"> 
        <Profile />
        </div>
        <div className="Com2"> 
        <Instrument />
        </div>
      </div>
    </>
  
  );
}

export default App;
