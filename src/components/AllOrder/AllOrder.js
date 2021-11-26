import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table, Spinner } from 'react-bootstrap';
import './AllOrder.css';

const AllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const url = 'https://aqueous-coast-11354.herokuapp.com/bookings';
  useEffect(() => {
    axios.get(url).then((res) => {
      setOrders(res.data);
      setSpinner(false);
    });
  }, []);
  // console.log(orders);

  const handleDelete = (id) => {
    const answer = window.confirm(`Are you want to delete ${id}?`);
    if (answer) {
      const url2 = `https://aqueous-coast-11354.herokuapp.com/bookings/${id}`;
      // console.log(id);
      axios.delete(url2, { id }).then((res) => {
        // console.log(res.data);
        if (res.data.deletedCount) {
          alert('Successfully deleted.');

          const remainingService = orders.filter((order) => order._id !== id);
          setOrders(remainingService);
        }
      });
    }
  };
  const handleConfirm = (id) => {
    const url3 = `https://aqueous-coast-11354.herokuapp.com/bookings/${id}`;
    axios.post(url3, id).then((res) => {
      if (res.data.modifiedCount) {
        axios.get(url).then((res) => setOrders(res.data));
      }
    });
  };
  return (
    <div className="allOrders my-3">
      {spinner ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div>
          <h2 className="text-center">
            All<span className="text-danger"> Orders</span>
          </h2>

          <Table responsive>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Event Name</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody as="div">
              {orders.map((order) => {
                return (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td>{order.address}</td>
                    <td>{order.eventName}</td>
                    <td>{order.time}</td>
                    <td>{order.status}</td>
                    <td>
                      {order.status !== 'Approved' && (
                        <Button
                          variant="outline-primary"
                          onClick={() => handleConfirm(order._id)}
                        >
                          Confirm
                        </Button>
                      )}
                      <Button
                        onClick={() => handleDelete(order._id)}
                        variant="outline-danger"
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
      )}
    </div>
  );
};

export default AllOrder;
