import React,{ useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Login.css'
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from '../Assets/AppLogo.jpg'
import Header1 from '../Header1/Header1';

import axios from 'axios';
import {Login_Url} from '../Server/Server'
import { useNavigate } from 'react-router-dom';


function Login() {

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [validated, setValidated] = useState(false);

    const submitDetails = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
        event.stopPropagation();
    }
    else{
        const userData = {username: username, password:password};
        console.log(userData);
        axios.post(`${Login_Url}`, userData).then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("username", userData.username);
            console.log(localStorage);
            alert("Login Successful");
            navigateHomepage();
        })
        .catch((error) => {
            alert("Login Failed");
            console.log(error);
        });

    }
        setValidated(true);
    
    };

    const navigate = useNavigate();
    const navigateHomepage = () => navigate('/search');


    return (
        <>
        <Header1/>
        <Container>
        <div>
        <Form noValidate validated={validated} onSubmit={submitDetails} className="mb-3 container formstyle">

            <Image src={logo} style={{ width: '150px', height: '150px' }} roundedCircle />

            <h3 className="mt-3">Login</h3>


            <Form.Group as={Col} md="4" controlId="validationCustomUsername" className="formfields">
            <Form.Label className="custom-label">Username</Form.Label>
            <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
                value={username}
                onChange={event=> setUsername(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                Please choose a username.
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
        


            <Form.Group as={Col} md="4" controlId="password" className="formfields">
            <Form.Label className="custom-label">Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password" 
                required 
                value={password}
                onChange={event=> setPassword(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
                Please provide a Password.
            </Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="4" >
                <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                className="customcheckbox"
                />
            </Form.Group>
        


        <Button type="submit" className="mt-4 loginbutton">Login</Button>

        <br></br>
        <p>Don't have an account? <a href="/register">Register</a></p>


        </Form>
        </div>
        </Container>
        </>
    );
    }

export default Login;