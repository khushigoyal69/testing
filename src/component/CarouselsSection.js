import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./CarouselsSection.css";

const OfferSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 25;
  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0  : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const getTranslateX = () => {
    if (window.innerWidth < 768) {
      return currentSlide * window.innerWidth;
    }
    return currentSlide * 100;
  };

  return (
    <Container fluid className="container py-5 offer-section">
      <div className="d-flex align-items-center justify-content-between">
        <div className="top-column toppara col-lg-6">
          <h2>What We Offer</h2>
          <p>20+ Hours of One-on-One Case Coaching.</p>
          <br />
        </div>
        <div className="carousel-container d-flex gap-2">
          {/* <Button variant="light" className="carousel-btn" onClick={handlePrevClick}>{'<'}</Button> */}

          <Button
            variant="light"
            className="carousel-btn"
            onClick={handlePrevClick}
          >
            <img src="images/previousButton.png" />
          </Button>
          <Button
            variant="light"
            className="carousel-btn"
            onClick={handleNextClick}
          >
            <img src="images/nextButton.png" />
          </Button>
        </div>
      </div>

      <Row className="carousel-row container d-flex flex-nowrap justify-content-start">
        <div
          className="carousel-slides d-flex gap-5"
          style={{
            transform: `translateX(-${getTranslateX()}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <Col md={4} className={`mb-4 slidercol`}>
            <Card className="offer-card mb-3 sliderCard border-0">
              <Card.Body>
                <Card.Title>Customized Sessions</Card.Title>
                <Card.Text>
                  Address your unique strengths and areas for improvement.
                </Card.Text>
                <br />
                <div className="number">01</div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className={`mb-4 slidercol`}>
            <Card className="offer-card mb-3 sliderCard border-0">
              <Card.Body>
                <Card.Title>Real Case Practice</Card.Title>
                <Card.Text>
                  Build your problem-solving skills with real consulting cases.
                </Card.Text>
                <br />

                <div className="number">02</div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className={`mb-4 slidercol`}>
            <Card className="offer-card mb-3 sliderCard border-0">
              <Card.Body>
                <Card.Title>Expert Insights</Card.Title>
                <Card.Text>
                  Learn from consulting experts to sharpen your strategy.
                </Card.Text>
                <br />

                <div className="number">03</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className={`mb-4 slidercol`}>
            <Card className="offer-card mb-3 sliderCard border-0">
              <Card.Body>
                <Card.Title>Mock Interviews</Card.Title>
                <Card.Text>
                  Up to 5 Hours of Behavioral Coaching and Mock Interviews
                </Card.Text>
                <br />

                <div className="number">04</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className={`mb-4 slidercol`}>
            <Card className="offer-card mb-3 sliderCard border-0">
              <Card.Body>
                <Card.Title>Understand Key Qualities</Card.Title>
                <Card.Text>
                  Know what consulting firms seek in candidates.
                </Card.Text>
                <br />

                <div className="number">05</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className={`mb-4 slidercol`}>
            <Card className="offer-card mb-3 sliderCard border-0">
              <Card.Body>
                <Card.Title>Simulate Interviews</Card.Title>
                <Card.Text>
                  Gain confidence and refine your responses.
                </Card.Text>
                <br />

                <div className="number">06</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className={`mb-4 slidercol`}>
            <Card className="offer-card mb-3 sliderCard border-0">
              <Card.Body>
                <Card.Title>Get Feedback</Card.Title>
                <Card.Text>
                  Receive actionable insights to improve your performance.
                </Card.Text>
                <br />

                <div className="number">07</div>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default OfferSection;
