import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Card } from 'react-bootstrap';
// import useParams from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import moment from 'moment';
// import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useHistory } from 'react-router';
const PlaceOrder = () => {
  //   console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  // const location2 = useLocation();

  const redirect_url = '/myOrders/';

  // use history
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const { id } = useParams();
  const [service, setService] = useState({});
  const url = `https://aqueous-coast-11354.herokuapp.com/services/${id}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      //   console.log(res.data);
      setService(res.data);
    });
  }, [url]);
  //   console.log(service);
  const { _id, name, price, duration, visit, img, location, description } =
    service;

  // console.log(user);
  const onSubmit = (data) => {
    // confirmAlert(options);
    const userInfo = {
      ...data,
      name: user.displayName,
      email: user.email,
      id: id,
      _id2: _id,
      loginName: user.displayName,
      eventName: name,
      img: img,
      status: 'Pending',
      time: moment().format('MMMM Do YYYY, h:mm:ss a'),
    };
    // console.log(userInfo);
    axios
      .post('https://aqueous-coast-11354.herokuapp.com/bookings', userInfo)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          alert('Success! Inserted');
          reset();
          history.push(redirect_url);
        }
      });
  };
  return (
    <div className="container">
      <h3 className="text-center">
        Place your Booking<br></br> at <br></br>
        <span className="text-danger"> {name}</span>
      </h3>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text as="div">
                <h6>Location: {location}</h6>
                <div className="d-flex justify-content-between">
                  <h6>Price:{price}</h6>

                  <h6>Duration: {duration}</h6>
                </div>
                <div>{visit}</div>
                <div>{description}</div>
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer></Card.Footer> */}
          </Card>
        </Col>
        <Col className=" d-flex justify-content-center align-items-center">
          <div className="w-100">
            <h2 className="text-center">Billing Address</h2>
            <p>
              Name: <span className="text-danger">{user.displayName}</span>
              <br></br> Email: <span className="text-danger">{user.email}</span>
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* className="input-group-text w-25" */}

              {/* <div className="input-group mb-3">
              
                <input className="w-75" required {...register('name')} />
              </div> */}
              <span>Age: </span>
              <div className="input-group">
                <input
                  className="w-100"
                  required
                  type="number"
                  {...register('age')}
                />
              </div>
              <span>Phone:</span>
              <div className="input-group">
                <input className="w-100" required {...register('phone')} />
              </div>
              <span>Address:</span>
              <div className="input-group">
                <input className="w-100" required {...register('address')} />
              </div>
              <span>Notes:</span>
              <div className="input-group">
                <input className="w-100" {...register('notes')} />
              </div>

              <div className="text-center mt-3  ">
                {' '}
                <input type="submit" />
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PlaceOrder;
