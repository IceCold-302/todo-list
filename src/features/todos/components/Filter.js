import React from 'react';
import { Link } from 'react-router-dom';

const Filter = () => {
  return (
    <>
      <Link to='/todos/all' className='btn btn-primary mr-2'>All</Link>
      <Link to='/todos/done' className='btn btn-primary mr-2'>Done</Link>
      <Link to='/todos/active' className='btn btn-primary'>In progress</Link>
    </>
  )
}

export default Filter;
