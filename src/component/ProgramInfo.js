import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaClock, FaMoneyBillAlt } from 'react-icons/fa'; // Icons
import "./ProgramInfo.css"
const ProgramInfo = () => {
  return (
    <Container className="my-5 py-5 product-info">
      <Row>
        <Col md={6} className="mb-3">
          <Card className="p-3 costproduct" >
            <Card.Body>
           
                <Col xs={2}>
                <img src="images/lets-icons_clock.png" />
                </Col>
                <br/>


                <Col xs={10}>
                  <Card.Title as="h5">Program Duration</Card.Title>
                  <Card.Text>3 Months</Card.Text>
                </Col>
             
            </Card.Body>
          </Card>
        </Col>


        <Col md={6} className="mb-3">
          <Card className="p-3 costproduct" >
            <Card.Body>
           
                <Col xs={2}>
                  
                <img src="images/tdesign_money.png" />
           
                </Col>
                <br/>
                <Col xs={10} lg={8} className='pro'>

                  <Card.Title as="h5">Program Cost</Card.Title>
                  <Card.Text className="subhead">
                    USD 1,500, payable in two installments</Card.Text>
                  
                    <Card.Text >
                    One at the beginning and the second at the end of the first month.
                  </Card.Text>
                </Col>
             
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


export default ProgramInfo;