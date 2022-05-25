import React from 'react';
import './BidCard.css';
const BidCard = ({product}) => {
const clickHandler=(e)=>{
    e.preventDefault();
    alert("You Clicked it");
}
 
  return (
    <><div className="card">
        <div className="Header">
            <div className="top">
                <div className="row">
                    <div className="col-9 col-xs-8 col-sm-8 ">
                        <h4 className='shopAddress'>{product.shop_address}</h4>
                        <h2>Rs.{product.offer_price}</h2>
                        <h4 className='delivery'> Delivery & Services</h4>
                        <div className='express row mt-2'>
                            <div className='col-9 col-sm-7 d-flex'>
                                <img src ={product.express_delivery_icon} className="icon"alt="express image"></img> 
                                <div>
                                <h5>Express delivery </h5>
                                <h6>(delivery in 1 hour)</h6>
                                </div>
                                </div>
                        <div className='col-3'>
                        <img src={product.express_delivery?product.check_icon : product.cross_icon} className="icon">
                        </img></div>
                        </div>
                        <div className='return row '>
                            <div className='col-9 col-sm-7  d-flex'>
                                <img src ={product.return_option_icon}className="icon" alt="express image"></img> 
                                <h6 >Return Option </h6></div>
                        <div className='col-3'>
                        <img src={product.return_option?product.check_icon : product.cross_icon}className="icon">
                        </img></div>
                        </div>
                        
                        
                    </div>
                    <div className="col-3 col-xs-4 col-sm-4">
                        <img src={product.shop_image} className='shop_image img-fluid'></img>
                        <p className='shop_name'>
                            {product.shop_name}
                        </p>
                    </div>
                   
                </div>
                
            </div>
        </div>
        <div className='col-4 d-flex offer mb-3'><img src={product.extra_offer_icon}alt="image.."></img>Extra Offer</div>
        <div>
        <p className='proName'>{product.product_name}</p>
        
        </div>
        <center>
        <button className='buy_button' onClick={clickHandler}>Buy Now</button>
        </center>
        
        <p>Alternate Products</p>
        <div className="footer row d-flex">
            <div className=" col-5 col-xs-3 col-sm-3 col-md-3  col-lg-5 col-xl-3 alternateImage "
            style={{  
                backgroundImage: "https://image.shutterstock.com/image-photo/stylish-watch-on-woman-hand-600w-1103215058.jpg",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>

                
            </div>
            <div className="col-7 col-xs-9 col-sm-9 col-md-9   col-lg-7 col-xl-9 alternateDetail">
                <div><p>{product.alternate_product_details.product_name}</p></div>
                

            </div>
            <div className="col-12">
            <div className='detailFooter d-flex'>
                   <div className='d-flex'>
                       <img src={product.alternate_product_details.online_price_icon}></img>
                       <h6><span>Rs.</span><span className='strike'>{product.alternate_product_details.online_price}</span> </h6>
                       <h6>Rs.{product.alternate_product_details.offer_price}</h6>
                       </div> 
                   <button className='order_button' onClick={clickHandler}>Order Now</button>
                </div>
            </div>

        </div>
        </div>
    </>
  )
}

export default BidCard