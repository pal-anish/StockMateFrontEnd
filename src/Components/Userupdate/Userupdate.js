import React, { useState , useEffect} from 'react'
import Image from 'react-bootstrap/Image';
import profileImg from '../Assets/ProfileImage.jpeg'
import './Userupdate.css'
import Header2 from '../Header2/Header2';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Userdetails_Update_Url } from '../Server/Server';
import {Userdetails_Url} from '../Server/Server'

export default function Userupdate() {

    const [user, setUser] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [firstname, setFirstname] = useState(user?.firstname);
    const [lastname, setLastname] = useState(user?.lastname);
    const [email , setEmail] = useState(user?.email);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const username = localStorage.getItem('username');
                const result = await axios.get(`${Userdetails_Url}/${username}`);
                // console.log(result);
                setUser(result.data);
                setFirstname(result.data.firstname);
                setLastname(result.data.lastname);
                setEmail(result.data.email);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

     console.log("User deatils" , user);

    

    const submitDetails = (e) => {
        e.preventDefault();
        if (user.firstname === firstname && user.lastname === lastname && user.email === email) {
            alert("No changes to update");
            return;
        }
        const username = localStorage.getItem('username');
        const userData = {firstname: firstname, lastname: lastname, email: email};
        axios.put(`${Userdetails_Update_Url}/${username}`, userData).then((response) => {
            setFirstname("");
            setLastname("");
            setEmail("");
            alert("User Details Updated Successfully");
            navigateBacktoUserdetails();
        })
        .catch((error) => {
            alert("Update Failed");
            // console.log(error);
        
        });
    }

    const navigate = useNavigate();
    const navigateBacktoUserdetails = () => navigate('/userdetails');

    
  return (
    <>
    <Header2/>
    {loading ? <h1>Loading data...</h1> :
    <div className="formcontainer">
            <form onSubmit={submitDetails}>
                <Image src={profileImg} style={{ width: '100px', height: '100px' }} roundedCircle />
                <h3>Update Details</h3>

                <div className="mb-3">
                    <label className="custom-label">First name</label>
                    <input
                        type="text"
                        className="- formlevel"
                        placeholder="First name"
                        value={firstname}
                        
                        onChange={(event)=> setFirstname(event.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="custom-label">Last name</label>
                    <input 
                    type="text" 
                    className="formlevel" 
                    placeholder="Last name"
                    value={lastname}
                    
                    onChange={(event)=> setLastname(event.target.value)}
                    required
                    />
                </div>

                <div className="mb-3">
                    <label className="custom-label">Email address</label>
                    <input
                        type="email"
                        className="formlevel"
                        placeholder="Enter email"
                        value={email}
                        
                        onChange={(event)=> setEmail(event.target.value)}
                    />
                </div>
                {/* <div className="mb-3">
                    <label className="custom-label">Password</label>
                    <input
                        type="password"
                        className=" formlevel"
                        placeholder="Enter password"
                    />
                </div> */}

                <div className="d-grid">
                    <button type="submit" className="formlevel button">
                        Save
                    </button>
                </div>
            </form>
            </div>
    }
            </>
  )
}
