import React,{ useState } from 'react';

import Header1 from '../Header1/Header1';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Register.css'
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import logo from '../Assets/AppLogo.jpg'

import axios from 'axios';
import {Register_Url} from '../Server/Server'
import { useNavigate } from 'react-router-dom';

function Register() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [validated, setValidated] = useState(false);

    const submitDetails = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
        event.stopPropagation();
    }
    else{
        const userData = {firstname: firstname, lastname: lastname, username: username, email:email, password:password};
        console.log(userData);
        axios.post(`${Register_Url}`, userData).then((response) => {
            setFirstname("");
            setLastname("");
            setUsername("");
            setEmail("");
            setPassword("");
            alert("Registration Successful");
            navigateLogin();
        })
        .catch((error) => {
            alert("Registration Failed");
            console.log(error);
        
        });

    }
        setValidated(true);
    
    };

    const navigate = useNavigate();
    const navigateLogin = () => navigate('/login');

    return (
        <>
        <Header1/>
        <Container>
        <div>
        <Form noValidate validated={validated} onSubmit={submitDetails} className="mb-3 container formstyle">

            <Image src={logo} style={{ width: '150px', height: '150px' }} roundedCircle className="mb-3"/>

            <h3>Register</h3>
        
            <Form.Group as={Col} md="4" controlId="validationCustom01" className="formfields" >
            <Form.Label className="custom-label">First name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="First name"
                value={firstname}
                onChange={(event)=> setFirstname(event.target.value)}
                
            />
            <Form.Control.Feedback type="invalid">Please enter First name.</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="4" controlId="validationCustom02" className="formfields">
            <Form.Label className="custom-label">Last name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Last name"
                value={lastname}
                onChange={(event)=> setLastname(event.target.value)}
                
            />
            <Form.Control.Feedback type="invalid">Please enter last name </Form.Control.Feedback>
            </Form.Group>


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
        
        
            <Form.Group as={Col} md="4" controlId="validationCustom03" className="formfields">
            <Form.Label className="custom-label">Email</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Email" 
                required
                value={email}
                onChange={event=> setEmail(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
                Please provide a valid email.
            </Form.Control.Feedback>
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
        


        <Button type="submit" className='mt-4'>Submit form</Button>

        <br></br>
        <p>Already have an account? <a href="/login">Login</a></p> 

        </Form>
        </div>
        </Container>
        </>
    );
    }

export default Register;