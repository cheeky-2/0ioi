import './Footer.css';
function Footer(){
    return(<>
        <div className="footer_wrap">
            <ul className="footer_top">
                <li className='customer_service'>
                    <em>CUSTOMER SERVICE</em>
                    <a href="#">1:1 INQUIRY</a>
                    <a href="#">NOTICE</a>
                    <a href="#">STOCKIST</a>
                    <a href="#">ABOUT</a>
                </li>
                <li className='legal_notice'>
                    <em>LEGAL NOTICE</em>
                    <a href="#">TERMS OF USE</a>
                    <a href="#">PRIVACY POLICY</a>
                </li>
                <li className='social_media'>
                    <em>SOCIAL MEDIA</em>
                    <a href="#">INSTAGRAM</a>
                    <a href="#">YOUTUBE</a>
                    <a href="#">TWITTER</a>
                </li>
            </ul>
            <div className="footer_bottom">
                <p>© FINDFORM 2023</p>
                <p>Findform Co., Ltd<br />CEO : 홍정우<br />13487 경기 성남시 분당구 판교로 242 판교디지털센터 A동 1005호<br />Mail - Order License : 제 2022-성남분당A - 1603호<br />Business registration number : [191-81-00440] Check business information<br />Hosting Service: cafe24<br />Customer Service : 1600-6352<br />E-Mail : oioikoreaofficial@findformkorea.com<br />Exchange/Return Address : 13487 경기 성남시 분당구 판교로 242 판교디지털센터 A동 1005호, Republic of Korea SmartDistribution findform</p>
            </div>
        </div>
    </>)
}
export default Footer;