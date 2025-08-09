import './ProductContainer1.css';
function ProductContainer1({products}){
    return(<>
        <ul>
            {products.map((data,idx)=>(
                <li key={idx}>
                    <img src={data.src} alt="" />
                    <div className="product_content">
                        <div className="color_size">
                            <div className="product_color">
                                {data.colors.map((color,index)=>(
                                    color.src ? (<img key={index} src={color.src} alt={color.name} />) : null
                                ))}
                            </div>
                            <p className='size'>({data.size})</p>
                        </div>
                        <a href="#">{data.title}</a>
                        <a href="#">{data.price.toLocaleString('ko-kr')}원</a>
                    </div>
                </li>
            ))}
        </ul>
    </>)
}
export default ProductContainer1;