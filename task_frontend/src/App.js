import { Toaster } from 'react-hot-toast';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';

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


