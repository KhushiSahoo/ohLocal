import React ,{ useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import BidCard from './components/BidCard';
import Header from './components/Header';
import MainProduct from './components/MainProduct';
import NavBar from './components/NavBar'
import  { v4 as uuidv4 } from 'uuid';
function App() {


 const [val, setVal] = useState([]);

  

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/");
      console.log(data);
      setVal(data);
    };
    getData();
  }, [setVal]);


  return (
    <div className="App">
      {val.nav_bar?<><NavBar product={val.nav_bar}/></>:<>{"Loading..."}</>}
    <div className="container">
    
      {val.heading?<><div className='Head'><Header product={val.heading}/></div></>:<>{"Loading..."}</>}
      {val.main_product?<><MainProduct product={val.main_product}/></>:<>{"Loading..."}</>}
      {val.bids? <><div className='row'>
      {val.bids.map(bid=>{
        return(<div className='col-12 col-md-6 col-lg-4 column' key={uuidv4()}>
            <BidCard product={bid}/>
        </div>)
    })}</div></>:<>{"loading"}</>}
    </div>
    </div>
  );
}

export default App;
