import React, { useState, useEffect } from 'react'
import Image from 'react-bootstrap/Image';
import profileImg from '../Assets/ProfileImage.jpeg'
import Header2 from '../Header2/Header2';
import './Userdetails.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Userdetails_Url} from '../Server/Server'


export default function Userdetails() {

    const navigate = useNavigate();
    const navigateUserupdate = () => navigate('/userupdate');
    const navigateLogout = () => {
        alert("Logout Successful");
        navigate('/');
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload();
    }

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const username = localStorage.getItem('username');
                const result = await axios.get(`${Userdetails_Url}/${username}`);
                // console.log(result);
                setUser(result.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

  return (
    <>
    <Header2/>
    <div className="form-container">
            <form >
                <Image src={profileImg} style={{ width: '100px', height: '100px' }} roundedCircle />
                <h3>Userdetails</h3>

                <div className="mb-3">
                    <label className="custom-label">First name</label>
                    <input
                        type="text"
                        className="- formlevel"
                        placeholder="First name"
                        defaultValue={user.firstname}
                        readOnly
                    />
                </div>
                <div className="mb-3">
                    <label className="custom-label">Last name</label>
                    <input type="text" 
                    className="formlevel" 
                    placeholder="Last name"
                    defaultValue={user.lastname}
                    readOnly/>
                </div>

                <div className="mb-3">
                    <label className="custom-label">UserName</label>
                    <input type="text" 
                    className="formlevel" 
                    placeholder="UserName "
                    defaultValue={user.username} 
                    readOnly/>
                </div>

                <div className="mb-3">
                    <label className="custom-label">Email address</label>
                    <input
                        type="email"
                        className="formlevel"
                        placeholder="Email"
                        defaultValue={user.email}
                        readOnly
                    />
                </div>
                <div className="mb-3">
                    <label className="custom-label">Password</label>
                    <input
                        type="text"
                        className=" formlevel"
                        placeholder="Password"
                        defaultValue={user.password}
                        readOnly
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="formlevel button" onClick={navigateUserupdate}>
                        Edit Details
                    </button>   
                </div>
                
            </form>
            </div>
            </>
  )
}
