import { useState } from 'react';
import './ProductWrap1.css';
import newProductDB from './NewDB';
import bestProductDB from './BestDB';
import ProductContainer1 from './ProductContainer1';
function ProductWrap1(){
    const [selectProduct, setSelectProduct] = useState('best');
    const changeDB = (category)=>{
        setSelectProduct(category);
    };
    let productData;
    if(selectProduct === 'best'){productData = bestProductDB;}else if(selectProduct === 'new'){productData = newProductDB;}else{productData = [];}
    return(<>
        <div className="title_btn">
            <h2 className='best'><button type="button" onClick={()=>{changeDB('best')}}>BEST</button></h2>
            <h2 className='new'><button type="button" onClick={()=>{changeDB('new')}}>NEW</button></h2>
        </div>
        <ProductContainer1 products={productData} />
        <a href="#" className='all_more'>전체보기</a>
    </>)
}
export default ProductWrap1;