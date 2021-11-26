import React from 'react';
import './Banner.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
const Banner = () => {
  return (
    <Container>
      <Row>
        <Col
          sm={12}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h2>
              Know the <span className="text-danger">BEST</span> Places to Visit
              when you are on <span className="text-danger">VACATION</span>
            </h2>
            <p>
              We offer the best and relaxing atmosphere and have one of the best
              deal to sweeten your vacation and make it a trip to remember. We
              have luxurious destinations around the world.
            </p>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <Image
            className="img-fluid"
            src="https://i.ibb.co/d01Zb8d/3369736.jpg"
          ></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
