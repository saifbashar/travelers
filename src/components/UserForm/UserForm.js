import React from 'react';
import { useForm } from 'react-hook-form';
import './form.css';
const UserForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    alert('Successfully Submited');
    reset();
  };
  return (
    <div className="w-75 form-color rounded-3 text-white p-5 container">
      <h1>Get in Touch</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className="">Name </span>
          <div className="input-group">
            <input
              required
              className="w-100"
              type="text"
              {...register('Name')}
            />
          </div>
          <span className="">Email </span>
          <div className="input-group">
            <input
              required
              className="w-100"
              type="email"
              {...register('Email')}
            />
          </div>
          <span className="">Phone </span>
          <div className="input-group">
            <input
              required
              className="w-100"
              type="number"
              {...register('phone')}
            />
          </div>
          <span className="">Your Suggestion </span>
          <div className="input-group">
            <textarea
              required
              className="w-100"
              type="text"
              {...register('notes')}
            />
          </div>

          <div className="text-center mt-3">
            {' '}
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
