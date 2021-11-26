import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

import { Button, Image, Table, Spinner } from 'react-bootstrap';
const MyOrders = () => {
  const [myBookings, setMyBookings] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const { user } = useAuth();
  // console.log(myBookings);
  // console.log(user);
  // console.log('Hello World');
  const url = `https://aqueous-coast-11354.herokuapp.com/bookings?email=${user.email}`;
  const handleDelete = (id) => {
    const answer = window.confirm(`Are you want to delete ${id}?`);

    if (answer) {
      const url2 = `https://aqueous-coast-11354.herokuapp.com/bookings/${id}`;
      // console.log(id);
      axios.delete(url2, { id }).then((res) => {
        // console.log(res.data);
        if (res.data.deletedCount) {
          alert('Successfully deleted');

          const remainingService = myBookings.filter(
            (booking) => booking._id !== id
          );
          setMyBookings(remainingService);
        }
      });
    }
  };
  useEffect(() => {
    axios.get(url).then((res) => {
      setMyBookings(res.data);
      setSpinner(false);
    });
  }, [url]);
  return (
    <div className="text-center">
      {spinner ? (
        <div>
          {' '}
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div>
          {' '}
          {myBookings.length ? (
            <div>
              <Image
                src="https://i.ibb.co/nDgP2QM/undraw-Booking-re-gw4j.png"
                height="300"
                className="img-fluid"
              ></Image>
              <h1 className="text-center">
                Bookings of{' '}
                <span className="text-danger">{user.displayName} </span>
              </h1>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>Booking Time</th>
                    <th>Event Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody as="div">
                  {myBookings.map((booking) => {
                    return (
                      <tr key={booking._id}>
                        <td>{booking._id}</td>

                        <td>{booking.time}</td>

                        <td>{booking.eventName}</td>

                        <td>{booking.email}</td>
                        <td>{booking.status}</td>
                        <td>
                          <Button
                            variant="outline-danger"
                            onClick={() => handleDelete(booking._id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          ) : (
            <div>
              <Image
                src="https://i.ibb.co/b5L3GY1/undraw-not-found-60pq-1.png"
                className="img-fluid"
              ></Image>
              {/* <h1 className="text-center">
              Bookings of <span className="text-danger">{user.displayName} </span>
            </h1> */}
              <h2 className="text-danger text-center">NO BOOKINGS FOUND</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
