import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Magazine = () => {
  return (
    <div className="container my-3">
      <h2 className="text-center">
        From <span className="text-danger">Travelers</span> Magazine
      </h2>
      <Row className="mt-5 gy-3">
        <Col sm={12} md={6} lg={4}>
          <h6 className="fw-bold text-muted">Oct 29th 2021</h6>
          <h6 className="fw-bold text-muted">GUIDES, ROAD CULTURE</h6>
          <Card>
            <Card.Img
              variant="top"
              src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2019/10/jack-o-lantern-blaze-15-540x288.jpg"
            />
            <Card.Body>
              <Card.Title className="fw-bold">
                Visit if you dare: These 5 spooky towns go all in for Halloween
              </Card.Title>
              <Card.Text>
                Halloween fans might be disappointed that they’ll never be able
                to visit Halloween Town, the fictional setting for Tim Burton’s
                1993 stop-motion classic The Nightmare Before Christmas. But
                there are plenty of places around the U.S. that take the
                late-October holiday (almost) as seriously as Jack Skellington.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <h6 className="fw-bold text-muted">Oct 25th 2021</h6>
          <h6 className="fw-bold text-muted">GUIDES, ROAD CULTURE</h6>
          <Card>
            <Card.Img
              variant="top"
              src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2021/10/shutterstock_1918948031-540x288.jpg"
            />
            <Card.Body>
              <Card.Title className="fw-bold">
                Follow in the Addams family’s footsteps on a creepy, kooky, and
                all together ooky cross-country road trip.
              </Card.Title>
              <Card.Text>
                The Addams Family 2, a new sequel to the first animated Addams
                movie, follows the spooky squad as they embark on a
                cross-country road trip. Hoping for some quality bonding time,
                Gomez Addams piles his family—including Morticia, Wednesday.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <h6 className="fw-bold text-muted">Oct 26th 2021</h6>
          <h6 className="fw-bold text-muted">GUIDES, ROAD CULTURE</h6>
          <Card>
            <Card.Img
              variant="top"
              src="https://rt-homepage.roadtrippers.com/wp-content/uploads/2021/10/crescent-hotel-1-540x288.jpg"
            />
            <Card.Body>
              <Card.Title className="fw-bold">
                Sleeping in the morgue of Eureka Springs’ Crescent Hotel, one of
                the most haunted places in the U.S.
              </Card.Title>
              <Card.Text>
                What is that?” my friend hisses in the dark, sitting straight up
                in the springy rollaway bed we’re sharing in a hotel basement
                that once housed a makeshift morgue. “Do you hear that?” All
                around us, someone—or something—is knocking on the walls.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Magazine;
