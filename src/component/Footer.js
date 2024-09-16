import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsCalendar } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer pt-5 '>
      <Container className='footer-section '>
        <Row className="justify-content-center text-left pt-5" >
          <Col md={12}>
          <br/>  <br/>
            <h5 className='head'>Let's test bring your vision to life.</h5>
            <br/> 
            <Button 
              variant="light"
              href="#"
              className="mt-3 book-here"
              style={{ display: 'inline-flex', alignItems: 'center', gap:10}}
            >
            Book a call here  <img src='images/calender.png' className="mr-2" /> 
            </Button>
          </Col>
        </Row>
        <div className="justify-content-between d-flex pb-5 text-left pt-5 mt-5">
         
            <p>© All Rights Reserved 2024</p>
            <div className='d-flex gap-5'>
              <p>LinkedIn</p>
              <p>@saumyasharma2</p>
              <p>@abhilaksh-sharma-39821696</p>
            </div>
          </div>
        
       </Container>
       </footer>);};
       export default Footer;