import React from 'react';
import Logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {




  return (
    <Container>
      <div className="text-center">
        <img src={Logo} alt="" />
        <p><small>Journalism Without Fear or Favor</small></p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

      <div className='d-flex mb-2 p-3'>
        <Button variant="danger">Latest</Button>
        <Marquee className='text-danger' speed={100} pauseOnHover>
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>

      
    </Container>
  );
};

export default Header;