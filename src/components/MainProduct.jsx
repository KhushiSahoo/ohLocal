import React  from 'react';
import './MainProduct.css'
const MainProduct = ({product}) => {
  return (
    <>
    <div className="row mt-4">
        <div className="col-12 col-xs-4 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <img src={product.main_product_svg} className='img-fluid' alt="main p image" />
        </div>
        <div className="col-12 col-xs-4 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="midCol">
            <p>{product.product_title}</p>
            <p className='pro_pipeline'>{product.product_pipeline}</p>
            <div className="d-flex onlinePriceDiv">
                <img src={product.online_price_icon} alt="" />
                <h5 className='onlinePrice'> Rs.{product.online_price}</h5>
            </div>
            <div className="qty mt-4">
                <h6>Qty:{product.quantity}</h6>
            </div>
            <h5 className='detail'>All Details</h5>
            </div>
           
        </div>
        <div className="col-12 col-xs-4 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="Status">
                <div className='d-flex status'>
                    <h3 className='me-2'>Status</h3>
                    <img src={product.status_icon} alt="" />
                </div>
               <p>Time Remaining</p>
                <h5>{product.time_remaining} Minutes</h5>
                <div className='bid_placed'>
                    <h3 className='bidPlacedText'>BIDS PLACED  | </h3> 
                    <h3 className='bidPlacedQty'>{product.bid_placed}</h3>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainProduct