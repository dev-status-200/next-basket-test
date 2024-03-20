'use client'
import React from 'react';
import useWindowSize from '../../helpers/useWindowSize';

const Hero = () => {

  const size = useWindowSize().width;

  const Descriptiopn = () => {
    return <>
      <p className='green'><b>5 Items</b></p>
      <h2 className='black fw-7'>FURNITURE</h2>
      <div><b>Read More</b></div>
    </>
  }

  return (
    <>
    {size>480 &&
      <div className='hero'>
      <div className='cover cover-one'>
        <Descriptiopn/>
      </div>
      <div className='hero-right'>
        <div className='cover cover-two'>
          <Descriptiopn/>
        </div>
        <div className='hero-bottom'>
          <div className='cover cover-three'>
            <Descriptiopn/>
          </div>
          <div className='cover cover-four'>
            <Descriptiopn/>
          </div>
        </div>
      </div>
    </div>
    }
    {size<480 &&
      <div className=' px-4'>
        <div className='cover-one-sm p-4'>
          <Descriptiopn/>
        </div>
        <div className='cover-two-sm p-4 my-3'>
          <Descriptiopn/>
        </div>
        <div className='cover-three-sm p-4 my-3'>
          <Descriptiopn/>
        </div>
        <div className='cover-four-sm p-4 my-3'>
          <Descriptiopn/>
        </div>
      </div>
    }
    </>
  );
}

export default React.memo(Hero);