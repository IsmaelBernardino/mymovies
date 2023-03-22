import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import CategoryInfo from './pages/CategoryInfo';
import Footer from './components/Footer';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:category' element={<Movies />} />
          <Route path='/category/:type/:id' element={<CategoryInfo />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
