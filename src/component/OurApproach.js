import React from "react";
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./OurApproach.css";

const OurApproach = () => {
  return (
    <Container className="my-5 py-5">
      <Row className="align-items-center">

          {/* Images container */}
          
          <div className="col-lg-6 text-center position-relative right-column">
          <img
          src="images/ApproachImg.png" 
          className="img-approach"
/></div>
        <Col md={5}>
          {/* Content container */}
          <div className="border-0 approach-section">
            <div>
              <div as="h5" className="head">
                Let's Fly
              </div>
              <div as="h2" className="mb-3 subhead">
                Our Approach
              </div>
              <div className="para container ">
                Many coaching programs focus on frameworks, speed, and other aspects. We focus on basic problem-solving skills, the ability to draw insights, and top-down communication needed to ace consulting cases, enabling you to shine in any case regardless of industry knowledge or type.
              </div>
              <div className="d-flex align-items-center">
             
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default OurApproach;