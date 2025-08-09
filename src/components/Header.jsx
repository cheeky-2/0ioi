import { useEffect } from 'react';
import logo from '../assets/images/oioi_logo.png';
import './Header.css';
function Header(){
    useEffect(() => {
        const handleScroll = () => {
            const headerBg = document.querySelector('.header');
            if (headerBg) {
                if (window.scrollY > 920) {
                    headerBg.classList.add('move');
                } else {
                    headerBg.classList.remove('move');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(<>
        <div className='header'>
            <div className="left_nav">
                <a href="#">SHOP</a>
                <a href="#">COLLECTION</a>
                <a href="#">AMBASSADOR</a>
                <a href="#">O!Oi</a>
            </div>
            <h1><a href='#'><img src={logo} alt="oioi" /></a></h1>
            <div className="right_nav">
                <a href="#">BENEFITS</a>
                <a href="#">KR / EN</a>
                <a href="#">LOGIN</a>
                <a href="#">SEARCH</a>
                <a href="#">CART(0)</a>
            </div>
        </div>
    </>)
}
export default Header;