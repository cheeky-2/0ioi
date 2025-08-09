import BnrImg from '../assets/images/bnr/imsibnr.png';
import './BandBanner.css';
function BandBanner(){
    return(<>
        <a href="#" className='brn'>
            <img src={BnrImg} alt="임시배너" title='임시배너입니다' />
        </a>
    </>)
}
export default BandBanner;