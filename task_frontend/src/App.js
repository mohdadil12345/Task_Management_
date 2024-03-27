import { Toaster } from 'react-hot-toast';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';


function App() {
  return (
    <div >
      <Navbar/>
      <AllRoutes/>
  <Toaster/>
    </div>
  );
}

export default App;
