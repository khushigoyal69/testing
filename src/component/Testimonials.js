import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonials.css';  
import { FaLinkedin } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: 'Santosh Hossale',
    position: "Darden'25, McKinsey and Co",
    feedback: "Saumya helped me immensely in preparing for my McKinsey interview by conducting a thorough mock interview. Her attention to detail was remarkable, as she provided precise feedback on my responses, highlighting areas for improvement I hadn't noticed. Saumya's deep understanding of what McKinsey seeks in its associates allowed her to tailor her analysis, ensuring I was well-prepared to showcase the qualities that the firm values. Her guidance was instrumental in helping me refine my approach and boost my confidence. Her coaching is the last mile effort required to finesse your answers for top consulting firms!",
    imgSrc: 'images/testimonials-img.png',
  },
  {
    id: 2,
    name: 'Apoorva Sharma',
    position: "Darden'25, Bain and Company",
    feedback: "Having Abhilaksh as my case prep buddy was incredibly valuable. His consulting experience really helped me tackle different frameworks, especially the more quant-heavy cases. He also guided me through preparing for personal interview questions. His structured approach, honest feedback, and ongoing support significantly advanced my preparation. I highly recommend Abhilaksh to anyone looking for expert help with case prep and interview readiness.",
    imgSrc: 'images/testimonials-img.png',
  },
  {
    id: 3,
    name: 'Purvi Gupta',
    position: "Darden'25, Boston Consulting Group",
    feedback: "Abhilaksh's guidance was instrumental in my success with MBB interviews. His ability to simplify unconventional / abstract problem statements through first principles thinking and his unwavering support throughout the journey boosted my confidence immensely. I couldn't have done it without him!",
    imgSrc: 'images/testimonials-img.png',
  },
  {
    id: 4,
    name: 'Dolly Bajaj',
    position: "Darden'25, McKinsey and Co",
    feedback: "Abhilaksh has been a strong support throughout my journey towards consulting. His unique attitude and way of breaking down my approach and giving crisp and clear directions have been extremely instrumental in my learning. He helped me in inculcating structured thinking, and improving my communication skills by brainstorming every tactical step together, manifesting them into actions and finally resulting into multiple shortlists. His motivation and his grilling sessions both served as catalyst to nurture me into a confident professional.",
    imgSrc: 'images/testimonials-img.png',
  }
];

const Testimonials = () => {
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const [currentTestimonials, setCurrentTestimonials] = useState(testimonials);

  const rotateColumns = () => {
    const rotated = [...currentTestimonials];
    const lastItem = rotated.pop();
    rotated.unshift(lastItem);
    setCurrentTestimonials(rotated);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      rotateColumns();
    }, 10000); // Adjusted the interval for demonstration

    return () => clearInterval(intervalId);
  }, [currentTestimonials]);

  const handleHover = (index) => {
    setHoveredColumn(index);
  };

  return (
    <Container fluid className="py-5  testimonials-section" id="test_slide">
      <div className="testimonial-box"></div>
      <h2 className="text-center mb-3 head">Testimonials</h2>
      <p className="text-center parasub mb-4 para">What our happy clients say</p>

      <Row className="justify-content-around align-items-stretch testimonial-row py-5 mb-5 pb-5 mt-5 d-flex flex-nowrap">
        {currentTestimonials.map((testimonial, index) => (
          <Col
            key={testimonial.id}
            md={4}
            className={`d-flex column ${hoveredColumn === index + 1 ? 'hovered' : ''}`}
            onMouseEnter={() => handleHover(index + 1)}
            onMouseLeave={() => handleHover(null)}
          >
            <Card className="testimonial-card mt-5 border-0 flex-fill">
              <Card.Body>
                <div className='d-flex align-items-center gap-4 justify-content-between'>
                  <img
                    src={testimonial.imgSrc}
                    alt="Client"
                    className="rounded-circle me-3"
                  />
                  <div className='position-sec'>
                    <h5 className="card-title">{testimonial.name}</h5>
                    <p className="card-subtitle">{testimonial.position}</p>
                  </div>
                  <img src="images/Linkedinlogo.png" className="social-icon" />
                </div>
                <Card.Text className="mt-3 feedback">
                  {testimonial.feedback}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className='testimonial-bg-img'></div>
      <br/>      <br/>      <br/>      <br/>
    </Container>
   
  );
};

export default Testimonials;
