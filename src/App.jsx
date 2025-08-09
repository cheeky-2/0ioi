import { useEffect } from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header';
import MainBg from './components/MainBg';
import ProductWrap1 from './components/ProductWrap1';
import Ambassador from './components/Ambassador';
import BandBanner from './components/BandBanner';
import SaleProductWrap from './components/SaleProductWrap';
import LookBook from './components/LookBook';
function App() {
  useEffect(()=>{
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
  },[]);
  return (
    <>
      <Header />
      <MainBg />
      <ProductWrap1 />
      <Ambassador />
      <BandBanner />
      <SaleProductWrap />
      <LookBook />
    </>
  )
}

export default App;
