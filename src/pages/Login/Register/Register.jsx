import React, { useContext, useState } from 'react';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

        const {createUser} = useContext(AuthContext);
      const [accepted, setAccepted] = useState(false);
      const handleAccepted = (event)=> {
        setAccepted(event.target.checked);
      }

        const handleRegister = (event) => {
                
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password = form.password.value;

             console.log(name,photo,email,password);

             createUser(email,password)
             .then( res => {
                console.log(res.user);
             })
             .catch(error => {
                console.log(error.message)
             })
           
            event.target.reset();

        }

    return (
        <Container className='w-25 mx-auto'>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" required name='name' placeholder="Enter Your Name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control type="text" required name='photo' placeholder="Enter Photo Url" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required name='email' placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                onClick={handleAccepted}
                 type="checkbox"
                  name='accept' 
                  label={<>Accept <Link to='/terms'>terms & conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" disabled={!accepted} type="submit">
               Register
            </Button>
            <br />
            <Form.Text className="text-success">
                 Have an account? <Link to='/login'>Login</Link>
            </Form.Text>
            <Form.Text className="text-success">

            </Form.Text>
            <Form.Text className="text-danger">

            </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;