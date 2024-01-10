import React from 'react'
import './StockCard.css'
import axios from 'axios';
import {Add_Wishlist_Url} from '../Server/Server'
import {Fetch_Wishlist_Url} from '../Server/Server'
import {Button} from 'react-bootstrap';

export default function StockCard({data}) {

    const jwtToken = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const config = {
        headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json'
        }
    };

    // const fetchWishlist = async () => {
    //     const fetchedData = await axios.get(`${Fetch_Wishlist_Url}/${username}`);
    // }
    
    const addWishlist = async (stockdata) => {
        setLoading(true)
        try{
            stockdata = { username: username, ...stockdata}
            const response = await axios.post(`${Add_Wishlist_Url}/${username}`, stockdata, config);
            //console.log("Added to wishlist", response);
            setSuccess(true)
            alert("Added to wishlist")
        }catch(err){
            // console.log("Saving Data Failed")
            // console.log(err);
            // console.log(err.response.data);
            alert(err.response.data)
        } finally{
            setLoading(false)
        }
    }


  return (
    <div className="gridcardstyle">
        <p className="cardfontstyle">Stock Symbol: {data.symbol}</p>
        <p className="cardfontstyle">Stock Currency: {data.currency}</p>
        <p className="cardfontstyle">Stock Exchange: {data.exchange}</p>
        <p className="cardfontstyle">Stock mic_code: {data.mic_code}</p>
        <p className="cardfontstyle">Stock country: {data.country}</p>
        <p className="cardfontstyle">Stock type: {data.type}</p>
        {loading ? <p>Adding to wishlist...</p> : 
        success ? <Button variant="success" disabled className='customfontstyle'>Added ❤️</Button> : 
            <Button variant="primary" className="custombutton" onClick={() => addWishlist(data)}>Add to wishlist🤍</Button>
        }
    </div>
  )
}