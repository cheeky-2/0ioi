import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import MainBg from './MainBg';
import ProductWrap1 from './ProductWrap1';
import Ambassador from './Ambassador';
import BandBanner from './BandBanner';
import SaleProductWrap from './SaleProductWrap';
import LookBook from './LookBook';
import Footer from './Footer';
function MainHome(){
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
            <Footer />
        </>
    )
}
export default MainHome;