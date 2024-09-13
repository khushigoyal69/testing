import React from "react";
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css";

const Resume = () => {
  return (
    <Container className="Resume-section ">
      <Row className="align-items-center">

        <div className="col-lg-6 text-center position-relative right-column">
          <img
             src="images/Resume.png" 
             className="resume-img"
            />
             <span className="image-bg"></span>
        </div>
        <Col md={5}>
          {/* Content container */}
          <div className="border-0 content ">
            <div>
            <div className="resume-box"></div>

              <div as="h2" className="head">
              Resume Review
              </div>
           <br/>
              <div className="para">
              <b>Professional Advice:</b> Craft a standout resume with insights
              from ex-consultants.              </div>
              <br/>
              <div className="para">
             <b> Tailored Recommendations: </b>Highlight your achievements 
              and skills.           </div>
          
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default Resume;