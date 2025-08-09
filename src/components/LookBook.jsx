import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './LookBook.css';
import esomImg from '../assets/images/celebrity/esom01.png';
import roseImg from '../assets/images/celebrity/rose01.png';
import newjeansImg from '../assets/images/celebrity/newjeans01.png';
function LookBook(){
    return(<>
        <div className="lookbook_wrap">
            <div className="lookbook_title"><h2>LOOKBOOK</h2></div>
            <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            onSlideChange={() => console.log('slide changed')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            >
                <SwiperSlide><img src={esomImg} alt="이솜룩북" /></SwiperSlide>
                <SwiperSlide><img src={newjeansImg} alt="뉴진스룩북" /></SwiperSlide>
                <SwiperSlide><img src={roseImg} alt="로제룩북" /></SwiperSlide>
                <SwiperSlide><img src={esomImg} alt="이솜룩북" /></SwiperSlide>
                <SwiperSlide><img src={newjeansImg} alt="뉴진스룩북" /></SwiperSlide>
                <SwiperSlide><img src={roseImg} alt="로제룩북" /></SwiperSlide>
            </Swiper>
        </div>
    </>)
}
export default LookBook;