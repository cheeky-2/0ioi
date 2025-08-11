import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './reset.css';
import './App.css';
import Header from './components/Header';
import MainBg from './components/MainBg';
import ProductWrap1 from './components/ProductWrap1';
import Ambassador from './components/Ambassador';
import BandBanner from './components/BandBanner';
import SaleProductWrap from './components/SaleProductWrap';
import LookBook from './components/LookBook';
import Footer from './components/Footer';
import MainHome from './components/MainHome';
function App() {
  /* useEffect(()=>{
    const aClick = (e)=>{
      const target = e.target.closest('a');
      if(target && target.getAttribute('href') === '#'){
        e.preventDefault();
      }
    }
    document.addEventListener('click',aClick);
    return ()=>{
      document.removeEventListener('click',aClick);
    }
  },[]); */
  return (
    <>
      <Routes>
        <Route path='/' element={<MainHome />}></Route>
      </Routes>
    </>
  )
}

export default App;
