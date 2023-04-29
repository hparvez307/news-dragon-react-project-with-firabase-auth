import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/leftNav/leftNav';
import RightNav from '../pages/shared/rightNav/RightNav';
import NavigationBar from '../pages/shared/navigationBar/NavigationBar';

class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <NavigationBar></NavigationBar>
                <Container>
                    <Row>
                        <Col lg={3}>
                             <LeftNav></LeftNav> 
                             
                            </Col>
                        <Col  lg={6}>
                            <Outlet></Outlet>
                        </Col>
                        <Col lg={3}>
                        <RightNav></RightNav>
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
            </div>
        );
    }
}

export default Main;