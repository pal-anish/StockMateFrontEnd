import React, {useEffect} from "react";
import {Link, link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
 
import './Header2.css'
import logo from '../Assets/AppLogo.jpg'
import profileimg from '../Assets/ProfileImage.jpeg'
 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
 
 
export default function Header2() {

  const navigate = useNavigate();

  const navigateLogout = () => {
    alert("Logout Successful");
    navigate('/');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
}
  return (
    <Navbar collapseOnSelect expand="lg" className=" headerbckgrnd">
      <Container>
        <Navbar.Brand href="#logo" className="textdeatiling" >
          <Image src={logo} style={{ width: '50px', height: '50px' }} className="headermargin" roundedCircle />
          {''}STOCKMATE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto customnavbar">
            <div className="">
            <Link to='/search' className="textdeatiling"><IoHome /> Home</Link>
            <Link to='/wishlist' className="textdeatiling"><FaHeart /> WishList</Link>
            <Link to='/userdetails' className="textdeatiling">
            {/* <Image src={profileimg} style={{ width: '50px', height: '50px' }} className="headermargin" roundedCircle /> */}
            <CgProfile /> Profile
            </Link>
            </div>
            <Button variant="outline-danger"className="logoutbutton" onClick={navigateLogout}>
                Log Out <RiLogoutCircleRLine />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
 
