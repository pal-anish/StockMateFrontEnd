import React, { useState, useEffect } from "react";

import { Fetch_Wishlist_Url } from "../Server/Server";
import { Delete_Wishlist_Url } from "../Server/Server";

import Header2 from "../Header2/Header2";
import "./Wishlist.css";
import axios from "axios";

export default function Wishlist() {
  const jwtToken = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const [loading, setLoading] = useState(true);
  const [deleteloading, setDeleteLoading] = useState(false);
  const [result, setResult] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json",
    },
  };

  

  const fetchWishlist = async () => {
    try {
      const response = await axios.get(
        `${Fetch_Wishlist_Url}/${username}`,
        config
      );
      // console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.log("Error fetching stocks:", error);
      if (error.response && error.response.status === 500) {
        localStorage.clear();
        window.location.href = "login";
      }
    } finally {
      setLoading(false);
    }
  };


  const deleteWishlist = async(id) => {

    const deleteConfig = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
      data: {username,wishlistId:id}
    }

    // console.log(id);
    const delWishlist = {username, wishlistId:id};
    setDeleteLoading(true);
    try {
      const response = await axios.delete(
        `${Delete_Wishlist_Url}`,deleteConfig);
      fetchWishlist();
      // console.log("Deleted from wishlist", response);
      // alert("Deleted from wishlist");
    } catch (error) {
      // console.log("Error deleting stocks:", error);
    } finally {
      setDeleteLoading(false);
    }
  }

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <>
      <Header2 />
      <h2 className="mt-5">Wishlist Result...</h2>

      {loading ? (
          <h3>Fetching data...</h3>
      ): result?.length === 0 ? (
          <p className="noresultstyle">No Result</p>
        ) : (
        <div className="card-div cardplacement container">
        {result.map((data,index) => {
          return(
            <div className="cards-main card-container" style={{width:'15rem'}} key={index}>
                <div className="card-body">
                  <h5 className="card-title mb-2">Stock Name: {data.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Stock Symbol: {data.symbol}</li>
                  <li className="list-group-item">Stock Type: {data.type}</li>
                  <li className="list-group-item">Stock Exchange: {data.exchange}</li>
                  <li className="list-group-item">Stock Currency: {data.currency}</li>
                  <li className="list-group-item">Stock Country: {data.country}</li>
                  <li className="list-group-item">Stock Mic Code: {data.mic_code}</li>
                </ul>
                <div className="card-body">
                {deleteloading ? <p>Deleting...</p> : 
                  <button className="" onClick={() => deleteWishlist(data.wishlistId)}>Delete</button>
                  }   
                </div>
            </div>
          );
        })}
        </div>
      )}
    </>
  );
}
