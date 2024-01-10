import React, { useState , useEffect} from 'react';

import Header2 from '../Header2/Header2';
import StockCard from '../StockCard/StockCard';
import './Homepage.css';
import {Stocks_Url} from '../Server/Server'


import { useNavigate, useLocation } from "react-router-dom";
import { IoIosSearch } from 'react-icons/io';

import { IoClose } from 'react-icons/io5';



export default function Homepage() {

    let query;
    const [text, setText] = useState("");
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const jwtToken = localStorage.getItem('token');

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (text === "") return;
        navigate(`/search?key=${text}`);
    };

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search);

    query = searchQuery.get("key");

    const fetchStock = async () => {
        //if (!query) return;
    
        try {
          setLoading(true);
    
          const response = await fetch(
            `${Stocks_Url}?country=${query || ""}`,
            {headers: {'Authorization': `Bearer ${jwtToken}`}}
          );
          if (response.status >= 400) {
            alert("Please Login again");
            localStorage.clear();
            window.location.href ='login';
          };
    
          const { data } = await response.json();
          setResult(data.slice(0, 20));
          //console.log(data.slice(0, 10));
          setLoading(false);
        } catch (error) {
          // console.log('Error fetching stocks:', error);
          if (error.response && error.response.status === 500) {
            localStorage.clear();
            window.location.href ='login';
        }
        }
    };

    useEffect(() => {
    fetchStock();
    }, [query]);

    return(
    <>
        <Header2/>

        <section className="customsection">
        <div className="divstyle1">
          <form
            onSubmit={handleSearch}
            className="container formstyle1">
            {/* <div className="searchiconstyle">
              <IoIosSearch />
            </div> */}
            <input
              type="text"
              placeholder="Search for Stocks by country"
              className="searchbarstyle"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="searchbartextstyle">
              <div
                onClick={() => setText("")}
                className={`"closepopup" ${text.length > 0 ? "opacity-100" : "opacity-0"}`}
              >
                <IoClose />
              </div>
              <button type="submit" className='customsearchbuttonstyle'>
                <div className="searchiconstyle">
                  <IoIosSearch />
                </div>
              </button>
            </div>
          </form>
        </div>


        <div className="container resultboxstyle">
          {loading ? (
            <h3>Fetching data...</h3>
          ) : result?.length === 0 ? (
            <p className="noresultstyle">No Result</p>
          ) : (
            <>
              <p className="resultfounsstyle">{query ? 
               ` ${result.length} Result found! ` : "Trending Stock" }
              </p>
              <div className="gridstyle">
                {result.map((data, id) => (
                  <StockCard data={data} key={id}/>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>

    )
}
