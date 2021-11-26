import React from 'react';
import './About.css';
import { Button, Col, Row, Image } from 'react-bootstrap';
const About = () => {
  return (
    <div className="about">
      <div className="about-banner d-flex justify-content-center align-items-center">
        <div className="text-center">
          {' '}
          <h4 className="text-white">About Travelers</h4>
          <h1 className="text-white">
            We love to travel the world and want you to have the trip of a
            lifetime!
          </h1>
          <br />
          <Button variant="outline-dark">Start Planning</Button>
        </div>
      </div>
      <div className="d-flex my-5 justify-content-center">
        <div className="w-75 text-center">
          {' '}
          <h3>
            About <span className="text-danger">Us</span>
          </h3>
          <p>
            <span className="fw-bold">Travelers</span> enables users to quickly
            and easily explore a destination’s offerings and create personalized
            sightseeing itineraries by utilizing local expertise and
            cutting-edge artificial intelligence. Drawing from a database of
            over 80,000 destinations <span className="fw-bold">Travelers</span>{' '}
            makes trip planning easy, intuitive and enjoyable for over 25
            million travelers a year.
          </p>
        </div>
      </div>
      <div className="container">
        <div>
          <h1 className="text-center">
            Why use <span className="text-danger">Travelers</span>
          </h1>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <Image
                src="https://i.ibb.co/qBChHhw/undraw-Chat-bot-re-e2gj.png"
                className="img-fluid"
              ></Image>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <h1>Research bot that works for you</h1>
                <p>
                  We match your travel preferences with over 750,000,000 data
                  points:
                </p>
                <ul>
                  <li>Best places & time to visit</li>
                  <li>Reviews</li>
                  <li>Transportation Option</li>
                  <li>Hidden gems</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              sm={12}
              md={6}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <h1>Planning engine that helps you see & do more</h1>
                <p>We will optimize your itinerary:</p>
                <ul>
                  <li>Minimize travel time</li>
                  <li>Check when attractions are open</li>
                  <li>Recommend how much time to spend</li>
                </ul>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Image
                src="https://i.ibb.co/2jtcHwB/undraw-Code-thinking-re-gka2.png"
                className="img-fluid"
              ></Image>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <Image
                src="https://i.ibb.co/cbj2Y8L/undraw-travel-plans-li01.png"
                className="img-fluid"
              ></Image>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <h1>Your complete plan in one place</h1>

                <ul>
                  <li>Book & organize your reservations</li>
                  <li>Share and collaborate with co-travelers</li>
                  <li className="fw-bold">Enjoy your trip!</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container">
        <div className="text-center">
          <h1>
            About the <span className="text-danger">Founders</span>
          </h1>
          <Image
            src="https://codeshikho-saifbashar.netlify.app/static/media/my-bg2.e72d9790.png"
            className="img-fluid"
            width="300px"
          ></Image>
          <p>
            As students at Stanford University in 1991, Anoop Goyal and Prakash
            Sikchi bonded over their passion for travel. Over time, they
            graduated from spontaneous bachelor backpacking trips to organized
            family holidays with their spouses and kids.
          </p>
          <p>
            Seeing a need to simplify the trip planning process, the idea for
            Inspirockp was born while they were on one of their adventures.
            Perched on a rock overlooking Inspiration Lake in the Eastern
            Cascades in Washington state. Inspirock encompasses both an
            inspiration and a vision. It is rooted in the belief that travel
            universally connects us all and helps people discover themselves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
