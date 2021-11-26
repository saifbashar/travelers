import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Magazine from '../Magazine/Magazine';
import NewsForm from '../NewsForm/NewsForm';
import Services from '../Services/Services';
// import UserForm from '../UserForm/UserForm';
import UserSaying from '../UserSaying/UserSaying';

const Home = () => {
  return (
    <div className="mb-4">
      <Banner></Banner>
      <h2 className="text-center">
        Easy to <span className="text-danger">use</span>,easy to{' '}
        <span className="text-danger">browse</span>
      </h2>
      <Container className="mx-auto">
        {' '}
        <Row>
          <Col
            sm={12}
            md={3}
            lg={3}
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: '18rem' }} className="border-0">
              <Card.Img
                variant="top"
                className="w-50 mx-auto"
                src="https://i.ibb.co/MhhzQjN/undraw-map-1r69.png"
              />
              <Card.Body className="text-center">
                <Card.Title>Get a personalized trip</Card.Title>
                <Card.Text>
                  A complete day by day itinerary based on your preferences
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={3}
            lg={3}
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: '18rem' }} className="border-0">
              <Card.Img
                variant="top"
                className="w-50 mx-auto"
                height="110px"
                src="https://i.ibb.co/PGN8b2C/image.png"
              />
              <Card.Body className="text-center">
                <Card.Title>Customize it</Card.Title>
                <Card.Text>
                  Refine your trip. We'll find the best routes and schedules
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={3}
            lg={3}
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: '18rem' }} className="border-0">
              <Card.Img
                variant="top"
                className="w-50 mx-auto"
                src="https://i.ibb.co/RzLKHw4/undraw-Booked-re-vtod.png"
              />
              <Card.Body className="text-center">
                <Card.Title>Book it</Card.Title>
                <Card.Text>
                  Choose from the best hotels and activities. Up to 50% off
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={3}
            lg={3}
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: '18rem' }} className="border-0">
              <Card.Img
                variant="top"
                className="w-50 mx-auto"
                src="https://i.ibb.co/1fwTQ8k/image.png"
              />
              <Card.Body className="text-center">
                <Card.Title>Manage it</Card.Title>
                <Card.Text>
                  Everything in one place. Everyone on the same page.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Services></Services>
      <UserSaying></UserSaying>
      <Magazine></Magazine>
      {/* <UserForm></UserForm> */}
      <NewsForm></NewsForm>
    </div>
  );
};

export default Home;
