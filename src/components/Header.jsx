import logo from '../assets/images/oioi_logo.png';
import './Header.css';
function Header(){
    
    return(<>
        <div className='header'>
            <div className="left_nav">
                <a href="#">SHOP</a>
                <a href="#">COLLECTION</a>
                <a href="#">AMBASSADOR</a>
                <a href="#">O!Oi</a>
            </div>
            <h1><a href='../App.jsx'><img src={logo} alt="oioi" /></a></h1>
            <div className="right_nav">
                <a href="#">BENEFITS</a>
                <a href="#">KR / EN</a>
                <a href="#">LOGIN</a>
                <a href="#">SEARCH</a>
                <a href="#">CART(0)</a>
            </div>
        </div>
        {window.addEventListener('scroll',()=>{
            const headerBg = document.querySelector('.header');
            if(window.scrollY > 920){
                headerBg.classList.add('move');
            }else{headerBg.classList.remove('move');}
        })}
    </>)
}
export default Header;