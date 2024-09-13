import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section container mt-4">
      <div className="row align-items-center">
        {/* Left Section - Text */}
        <div className="left-column col-lg-6">
          <div className="rectangle-box"></div>
          <h1 className="display-4">
            Consulting Case and Interview Prep for <br />
            <span className="text-highlight">MBA </span>Recruiting
          </h1>
          <p className="mt-4 pa">
            Recruiting for strategy consulting can be an intense and challenging
            journey. The case interview process often feels opaque, and months
            of preparation can sometimes lead to frustratingly few results. This
            is usually because candidates are navigating in the dark, relying on
            guidance from second-year students who may not have extensive
            experience in the field themselves. Our program is designed to
            demystify this process, providing you with the targeted support you
            need to perform at your best in the highly competitive race for an
            MBB position.
          </p>
          <div className="testimonial  d-flex align-items-center gap-1">
          <a href="#test_slide" className="text-decoration-none" >
            <button className="btn btn-light border mt-3 d-flex align-items-center">
            
              <img
                src="images/avatars.png"
                alt="Testimonials"
                className="me-2 "
              />
              <p>See Our Testimonials</p>
            </button>
            </a>
            <img
              src="images/line.png"
              style={{ marginTop: "15px" }}
              className="line"
            />
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="col-lg-6 text-center position-relative right-column">
          <img
            src="images/HeroImage.png"
            alt="Consulting Prep"
            className="img-fluid main-image"
          />
        </div>
      </div>
      <br />
      <br />
      <div className="Sec-section">
        <h3>Why Work With US?</h3>
        <p>
          Get the opportunity to learn from two former McKinsey consultants who
          know what top firms are looking for. We offer personalized, intensive
          coaching to help you succeed.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
