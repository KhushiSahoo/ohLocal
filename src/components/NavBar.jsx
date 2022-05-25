import React , {useState} from 'react'
import './NavBar.css'
const NavBar = ({product}) => {
    const [showLinks , setShowLinks]=useState(false);
  return (
    <div className='NavBar'>
        <div className="leftside">
            <input type="text" />
            <button>Search</button>
        </div>
        <div className="rightside">
            <div className="links" id={showLinks? 'hidden': ''}>
            <a href="/liveBid">Live Bids</a>
            <a href="/profile"><img src={product.person_icon}></img></a>
            <a href='/help'>Help & Support</a>
           
            </div>
            <button onClick={()=>setShowLinks(!showLinks)}><i class="fa-solid fa-bars"></i></button> 
        </div>
    </div>
  )
}

export default NavBar