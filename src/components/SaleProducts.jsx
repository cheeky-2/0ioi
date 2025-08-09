import './SaleProduct.css';
function SaleProducts({productDB}){
    return(<>
        <ul className="sale_products">
            {productDB.map((data,idx)=>(
                <li key={idx}>
                    <a href="#"><img src={data.src} alt="" /></a>
                    <div className="product_contents">
                        <div className="title_size">
                            <a href="#"><em>{data.title}</em></a>
                            <span>({data.size})</span>
                        </div>
                        <div className="del_price_price">
                            <a href="#">
                                <span>{data.del.toLocaleString('ko-kr')}원</span>
                                <em>{data.price.toLocaleString('ko-kr')}원</em>
                            </a>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </>)
}
export default SaleProducts;