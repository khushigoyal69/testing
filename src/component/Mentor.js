import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronUp, FaChevronDown, FaLinkedin } from "react-icons/fa";

import "./Mentor.css";

const MentorCard = ({
  image,
  name,
  school,
  classYear,
  summary,
  detailedSummary,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mentor-section">
      <Card className={` border-0 ${isExpanded ? "sticky-card" : ""}`}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <div className="d-flex gap-1  desination">
            <Card.Subtitle className="mb-2  des">
              Former McKinsey Consultant
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 enter des">
              Entrepreneur
            </Card.Subtitle>
          </div>
          <div className="mentor-body">
            <div className="profile-sec d-flex justify-content-between">
              <div className="profile-info">
                <Card.Title className="name">{name}</Card.Title>
                <Card.Text className="profile-des">
                  {school}, Class of {classYear}.
                </Card.Text>
              </div>

              <Button variant="link">
                <img src="images/Linkedinlogo.png" className="social-icon" />
              </Button>
            </div>
            <div className="d-flex">
              <Card.Text className="profile-des summary">Summary</Card.Text>
              <div className="line"></div>
            </div>
            <Card.Text className="profile-des">
              {isExpanded ? detailedSummary : summary}
            </Card.Text>

            <Button
              variant="link"
              onClick={toggleReadMore}
              className="custom-btn"
            >
              {isExpanded ? (
                <>
                  <span className="read">Read Less</span>{" "}
                  <FaChevronUp className="icon-spacing" />
                </>
              ) : (
                <>
                  {/* <span className="read">Read More</span> <FaChevronDown className="icon-spacing" /> */}
                  <span className="read">Read More</span>{" "}
                  <img src="images/Chevrondown.png" className="icon-spacing" />
                </>
              )}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const Mentors = () => {
  return (
    <Container className="mentorStylebox py-5">
      <div className="text-center mb-5 mentor-heading">
        <div className="mentor-box"></div>
        <h2>Our Mentors</h2>
        <p>Meet Our Mentors</p>
      </div>
      <Row className="g-3">
        <Col md={6}>
          <MentorCard
            image="images/mentor2.png"
            name="Saumya Sharma"
            school="Tuck School of Business"
            classYear="2020"
            summary="During my first year of MBA, I thought that doing as many cases as possible would eventually make cracking them easy, so I focused on sheer volume."
            detailedSummary="During my first year of MBA, I thought that doing as many cases as possible would eventually make cracking them easy, so I focused on sheer volume. But that approach didn’t work out the way I expected. My performance was all over the place—sometimes good, sometimes not so much. By my second year, I realized that it’s not just about how many cases you do; it’s about really understanding the key principles and essential elements behind each one. Once I started focusing on these fundamentals, everything clicked, and case-solving became much smoother.
Looking back, what I really needed was the right kind of feedback and a better understanding of what the job actually involved. As I worked on these skills, my whole attitude toward cases changed—I went from dreading them to actually being excited to tackle the problems they presented. It was a game-changer for me, and it’s exactly what I want for the candidates I work with. I want them to not only get the basics down but also experience that shift where case-solving becomes something they look forward to with confidence and excitement.
I also realized that these principles aren’t always explicitly taught. Maybe top performers pick them up naturally, but the good news is they’re totally teachable. With the right guidance and some dedicated effort, anyone can master the art of solving cases.
"
          />
        </Col>

        <Col md={6}>
          <MentorCard
            image="images/mentor1.png"
            name="Abhilaksh Sharma"
            school="Indian School of Business"
            classYear="2021"
            summary="Cases have always been a labor of love for me, even if at one point of time they represented the possibility of losing out on the job of my dreams."
            detailedSummary="Cases have always been a labour of love for me, even if at one point of time they represented the possibility of losing out on the job of my dreams. Over the years I've helped scores of candidates prepare for MBB interviews - most of whom made it to the firm of their choice - for the sole reason that first-principles based problem solving captures the essence of intellectual collaboration between two individuals like few other things can. My objective is to show promising young professionals that case interviews are not something to fear - they're an opportunity to showcase the best of one's creativity, charisma, and resourcefulness - and my approach focusses on invoking the same excitement I feel for cases in the people I interview.
I don't believe in cookie-cutter frameworks, and I have never given a candidate the type of case they've asked for - because every candidate has a unique method of coming up with a tailor made approach for just about any problem - and I have full faith in my ability to help them find that method using evergreen first principles.
I believe in using basic principles to simplify the most complex cases. Doesn't matter what your background is or what sector the case is about - with the right principles, there is not a curveball in existence that could throw you off your game on the day of your interview - as long as you work with me to become the best problem-solver you can be."
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Mentors;
