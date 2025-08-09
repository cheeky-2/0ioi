import NewjeansImg1 from '../assets/images/celebrity/newjeans01.png';
import NewjeansImg2 from '../assets/images/celebrity/newjeans02.png';
import gominsiDB1 from './AmbassadorGominsiDB1';
import gominsiDB2 from './AmbassadorGominsiDB2';
import './Newjeans.css';
function Newjeans(){
    return(<>
        <ul className='newjeans_product_wrap'>
            <li>
                <img src={NewjeansImg1} alt="" />
                <ul className="products">
                    {gominsiDB1.map((data,idx)=>(
                        <li key={idx}>
                            <a href="#">
                                <img src={data.src} alt="" />
                                <div className="product_contents">
                                    <div className="product_colors">
                                        {data.colors.map((color,index)=>(
                                            color.src ? (<img key={index} src={color.src} alt={color.name} />) : null
                                        ))}
                                    </div>
                                    <p className='product_title'>{data.title}</p>
                                    <p className='product_price'>KRW{data.price.toLocaleString('ko-kr')}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
            <li>
                <img src={NewjeansImg2} alt="" />
                <ul className="products">
                    {gominsiDB2.map((data,idx)=>(
                        <li key={idx}>
                            <a href="#">
                                <img src={data.src} alt="" />
                                <div className="product_contents">
                                    <div className="product_colors">
                                        {data.colors.map((color,index)=>(
                                            color.src ? (<img key={index} src={color.src} alt={color.name} />) : null
                                        ))}
                                    </div>
                                    <p className='product_title'>{data.title}</p>
                                    <p className='product_price'>KRW{data.price.toLocaleString('ko-kr')}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    </>)
}
export default Newjeans;