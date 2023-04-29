import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaFacebook, FaInstagram,FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';
const RightNav = () => {
    return (
        <div>
            <h1>Login With</h1>
             <Button className='w-100 my-3' variant="outline-primary"> <FaGoogle/> Login with Google</Button>
      <Button className='w-100' variant="outline-secondary"> <FaGithub/> Login with Github</Button> 

      <div className='mt-4'>
        <h4>Find us on</h4>

        <ListGroup >
      <ListGroup.Item> <FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
     
    </ListGroup>
      </div>
      <QZone></QZone>

      <div>
        <img src="" alt="" />
      </div>
        </div>
    );
};

export default RightNav;