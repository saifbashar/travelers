import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  // console.log(user);
  // user, isLoading, logOut
  // console.log(useAuth());

  // use location
  const location = useLocation();

  const redirect_url = location?.state?.from?.pathname || '/home/';

  // use history
  const history = useHistory();
  const handleGoogleSignIn = () => {
    signInUsingGoogle().then(() => {
      history.push(redirect_url);
    });
  };
  return (
    <div className="container allOrders">
      <Row>
        <Col sm={12} md={6} lg={6}>
          <Image
            className="img-fluid"
            src="https://i.ibb.co/frmWsCg/undraw-Login-re-4vu2.png"
          ></Image>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={6}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="text-center">
            <h2 className="text-center fw-bold">Log in to your account</h2>
            <Button onClick={handleGoogleSignIn}>Log in with Google</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
