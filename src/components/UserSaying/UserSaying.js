import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
const UserSaying = () => {
  return (
    <div className="container mt-3">
      <h2 className="text-center">
        “Man cannot discover new oceans unless he has the courage to lose sight
        of the shore” – <span className="text-danger">Andre Gide</span>
      </h2>
      <h1 className="text-center">
        What our users are <span className="text-danger">saying</span>
      </h1>

      <Row className="mt-5 gy-2">
        <Col
          sm={12}
          md={6}
          lg={8}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            "Yes after 5 days of using 3 maps, 5 apps and I found Roadtrippers.
            I was telling my boyfriend as we sat in the RV and started crying as
            I described it to him. Lol. Happy days."
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Image
            className="img-fluid"
            src="https://i.ibb.co/hD12S0G/pexels-engin-akyurt-1642228-removebg-preview.png"
          ></Image>
        </Col>
        <Col sm={12} md={6} lg={5}>
          <Image
            className="img-fluid"
            src="https://i.ibb.co/rpRgJ64/image-removebg-preview.png"
          ></Image>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={7}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            "This app is beautiful. It isn't enough that it helps you find
            amazing places—you can also plan a trip to all of them. I see many
            more weekend trips in my future!"
          </div>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={7}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            "Fantastic! Really useful with road trips and with finding things in
            my city I didn't know existed. Seriously I recommend it to everyone,
            I love it!"
          </div>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={5}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            {' '}
            <Image
              className="img-fluid"
              src="https://i.ibb.co/w4PcBd4/image-removebg-preview-1.png"
            ></Image>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserSaying;
