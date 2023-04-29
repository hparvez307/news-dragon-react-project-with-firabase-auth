import React, { useContext, useState } from 'react';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';



const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
   

    const from = location?.state?.from?.pathname || '/category/0';

    const handleLogin = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(res =>{
                console.log(res.user)
                navigate(from, {replace: true});
            })
            .catch(er => console.log(er.message))
    

        event.target.reset();
    }
    return (
        <Container className='w-25 mx-auto'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required name='password' placeholder="Password" />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-success">
                    Don't have an account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;