import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Program.css';

const ProgramCard = ({ images, heading, description }) => {
  return (
    <div className="program-section text-center">
      <img src={images} className="program-img" alt="Program Icon" />
      <Card className="border-0 custom-card-shadow">
        <Card.Body className="program-sec d-flex justify-content-around align-items-center">
            <div className="program-info">
              <Card.Title className="designation-title">{heading}</Card.Title>
              <Card.Text className="designation-description">
                {description}
              </Card.Text>
            
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const Program = () => {
  return (
    <Container className="programStylebox ">
      <div className="text-center mb-5 program-section">
        <h2 className="program-heading">Who is this Program For?</h2>
        <p className="program-description">Your Comprehensive Guide to Strategy Consulting Success</p>
      </div>
     <div className='programcard gap-4 justify-content-center'>



          <ProgramCard
          images="images/bulbicon.png"
            heading="MBA Candidates"
            description="Both in India and the US, who are aiming to recruit into strategy consulting roles."
          />
   

          <ProgramCard
          images="images/starIcon.png"
            heading="Professionals"
            description="Those looking to make a lateral move into consulting roles."
          />
 
          <ProgramCard
          images="images/heaticon.png"
            heading="Incoming MBA Students"
            description="Students who are starting their MBA programs in the fall and want to get a head start on recruiting for consulting."
          />
     </div>
 
    </Container>
  );
};

export default Program;
