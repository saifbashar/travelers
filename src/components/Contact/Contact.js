import React from 'react';
import { Image } from 'react-bootstrap';
import UserForm from '../UserForm/UserForm';

const Contact = () => {
  return (
    <div className="my-5">
      <h2 className="text-center">
        WE ARE OPEN TO ALL SUGGESTIONS FROM OUR AUDIENCE.
      </h2>
      <div className="text-center">
        <Image
          src="https://i.ibb.co/6NmPQK4/undraw-contact-us-15o2.png"
          className="img-fluid"
        ></Image>
      </div>
      <UserForm></UserForm>
    </div>
  );
};

export default Contact;
