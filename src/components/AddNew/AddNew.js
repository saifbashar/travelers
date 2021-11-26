import React, { useState, useEffect } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import moment from 'moment';
import { useHistory, useLocation } from 'react-router';
import axios from 'axios';
const AddNew = () => {
  const [services, setServices] = useState([]);
  const location = useLocation();

  const redirect_url = location?.state?.from?.pathname || '/home/';

  // use history
  const history = useHistory();
  // console.log(services.length);
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    axios
      .get('https://aqueous-coast-11354.herokuapp.com/services')
      .then((res) => setServices(res.data));
  }, []);
  const id = services.length + 1;
  // console.log(id);
  const onSubmit = (data) => {
    const newService = { ...data, id: id };
    axios
      .post('https://aqueous-coast-11354.herokuapp.com/services', newService)
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
    <div className="container my-4">
      <Row>
        <h1 className="text-center">
          Add <span className="text-danger">Services</span>
        </h1>
        <Col sm={12} md={6} lg={6}>
          <Image
            className="img-fluid"
            src="https://i.ibb.co/mzNn61n/undraw-add-document-re-mbjx.png"
          ></Image>
        </Col>
        <Col sm={12} md={6} lg={6} className=" d-flex">
          <div className="w-100">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <h2>New Service</h2>
              <span className="">Event Name:</span>
              <div className="input-group">
                {/* <span className="input-group-text w-25">Event Name:</span> */}
                <input required className="w-100" {...register('name')} />
              </div>
              <span className="">Price: </span>
              <div className="input-group">
                <input
                  required
                  className="w-100"
                  type="number"
                  {...register('price')}
                />
              </div>
              <span className="">Duration:</span>
              <div className="input-group">
                <input required className="w-100" {...register('duration')} />
              </div>
              <span>Location:</span>
              <div className="input-group">
                <input required className="w-100" {...register('location')} />
              </div>
              <span>Description:</span>
              <div className="input-group">
                <textarea
                  className="w-100 border border border-dark"
                  required
                  {...register('description')}
                />
              </div>
              <span>Image Url:</span>
              <div className="input-group">
                <input required className="w-100" {...register('img')} />
              </div>
              <span>Tour Type:</span>
              <div className="input-group ">
                <input required className="w-100" {...register('tour-type')} />
              </div>
              <span>Visiting Area:</span>
              <div className="input-group">
                <input required className="w-100" {...register('visit')} />
              </div>

              <div className="text-center mt-3">
                <input type="submit" />
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AddNew;
