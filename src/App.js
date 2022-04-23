
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
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
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
