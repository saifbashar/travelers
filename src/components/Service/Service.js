import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Service = (props) => {
  const { name, img, description, id } = props.service;
  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="h-100 border-success">
        <Card.Img variant="top" height="300px" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="p-0">
          <Link to={`/services/${id}`}>
            <Button className="w-100" variant="outline-success">
              Book Now
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
