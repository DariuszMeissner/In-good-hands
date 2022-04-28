import React from 'react';
import './ErrorMessage.scss';

export const ErrorMessage = ({ message }) => {
  return <div className='error-message col-10 fs-3'>{message}</div>;
};
