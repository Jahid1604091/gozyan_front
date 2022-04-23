
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import HotelsPage from './pages/HotelsPage';


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/hotels' element={<HotelsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
