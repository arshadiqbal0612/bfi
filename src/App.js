import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className='home-container'>
          <Sidebar />
          <Home />
        </div>  
    </div>
  );
}

export default App;
