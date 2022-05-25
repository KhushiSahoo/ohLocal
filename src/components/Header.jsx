import React from 'react';
import './Header.css'

const Header = ({product}) => {
  return (
    <>
    <center>
        <div className='header'>
        <img src={product.svg}></img>
        <div>
        <h1>{product.heading}</h1>
        <h6>{product.sub_heading}</h6>
        </div>
       
        </div>
        
    </center>
    </>
  )
}

export default Header