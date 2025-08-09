
import './SaleProductWrap.css';
import SaleProductDB from "./SaleProductDB";
import SaleProducts from "./SaleProducts";
import theMore from '../assets/images/icon/the_more.png';
function SaleProductWrap(){
    return(<>
        <div className="sale_product_wrap">
            <div className="title_more">
                <h2>Discount Product</h2>
                <a href="#">
                    <em>더보기</em>
                    <img src={theMore} alt="" />
                </a>
            </div>
            <SaleProducts productDB={SaleProductDB} />
        </div>
    </>)
}
export default SaleProductWrap;