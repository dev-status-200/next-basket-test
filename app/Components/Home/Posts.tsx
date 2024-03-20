import React from 'react';
import Post from './Post';

const Posts = () => {

  return (
    <>
    <div className='text-center'>
      <p className='blue-sm'>Practice Advice</p>
      <h3 className='black-lg'>Featured Posts</h3>
    </div>
    <div className='container mt-5'>
      <Post/>
    </div>
    </>
  );
}

export default React.memo(Posts);