import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import './Ambassador.css';
import AmbassadorProduct from './AmbassadorProduct';
import Gominsi from './Gominsi';
import Esom from './Esom';
import Newjeans from './Newjeans';
import Rose from './Rose';
function Ambassador(){
    const [selectAP, setSelectAP] = useState('gominsi');
    const changeAmbassador = (ambassador)=>{
        setSelectAP(ambassador);
    }
    const ambassadors = {
        gominsi: Gominsi,
        esom:Esom,
        newjeans:Newjeans,
        rose:Rose,
    }
    const SelectedComponent = ambassadors[selectAP];
    return(<>
        <div className="ambassador_wrap">
            <h2>AMBASSADOR Product</h2>
            <div className="ambassador_name">
                <button type="button" onClick={()=>{changeAmbassador('gominsi')}} style={{ fontWeight: selectAP === 'gominsi' ? 'bold' : '400' }}>고민시</button>
                <button type="button" onClick={()=>{changeAmbassador('esom')}} style={{ fontWeight: selectAP === 'esom' ? 'bold' : '400' }}>이솜</button>
                <button type="button" onClick={()=>{changeAmbassador('newjeans')}} style={{ fontWeight: selectAP === 'newjeans' ? 'bold' : '400' }}>뉴진스</button>
                <button type="button" onClick={()=>{changeAmbassador('rose')}} style={{ fontWeight: selectAP === 'rose' ? 'bold' : '400' }}>로제</button>
            </div>
            <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            loop={true}
            navigation
            >
                <SwiperSlide><AmbassadorProduct ambassadorItem={SelectedComponent} /></SwiperSlide>
                <SwiperSlide><AmbassadorProduct ambassadorItem={SelectedComponent} /></SwiperSlide>
            </Swiper>
        </div>
    </>)
}
export default Ambassador;