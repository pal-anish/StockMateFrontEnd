import React from 'react'
import Image from 'react-bootstrap/Image';
import logo from '../Assets/AppLogo.jpg'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header1 from '../Header1/Header1';

export default function Landingpage() {

  const navigate = useNavigate();
  const navigateLogin = () => navigate('/login');
  const navigateRegister = () => navigate('/register');

  return (
    <>
    <Header1/>
    <div className="formcontainer">
        <form className="formAlign">
            <Image src={logo} style={{ width: '300px', height: '300px' }} roundedCircle />
            <h1 className="mt-3">Welcome to the App</h1>
            <h6 className="mt-3">Trouble no more when finding stocks.</h6>
            <br></br>
            <div className="d-grid">
                <button type="submit" className="formlevel button" onClick={navigateLogin}>Login</button>
            </div>
            <br></br>
            <div className="d-grid">
                <button type="submit" className="formlevel button" onClick={navigateRegister}>Sign Up</button>
            </div>
        </form>
    </div>
    </>
  )
}
