import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './Services.css';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
const Services = () => {
  // services
  const [services, setServices] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    axios
      .get('https://aqueous-coast-11354.herokuapp.com/services')
      .then((res) => {
        setServices(res.data);
        setSpinner(false);
      });
  }, []);
  // console.log(services);
  return (
    <div className="container">
      <h3 className="text-center mb-4">
        We Provide Best <span className="text-danger">Service</span>
      </h3>
      {spinner && (
        <div className="text-center">
          {' '}
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {services && (
        <Row className="g-3">
          {services.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Services;
