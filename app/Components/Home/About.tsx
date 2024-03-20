import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Rating from '@mui/material/Rating';

const About = () => {
  return (
  <Grid container spacing={2}>
    <Grid xs={12} md={6}>
      <div className='text-center'>
        <h3 className='fs-24 fw-7 my-4'>What they say about us</h3>
        <img src='images/testimonial.png' className='my-4' height={100} />
        <br/>
        <Rating name="read-only" value={4} readOnly />
        <p className='grey-1 my-3 px-5 mx-5'>
          <b>Slate helps you see how many more days you need to work to reach your financial goal.</b>
        </p>
        <div className='blue mt-5 mb-2'>
          <b>Regina Miles</b>
        </div>
        <b>Designer</b>
      </div>
    </Grid>
    <Grid xs={12} md={6}>
      <div className='text-center py-4 res-px-4'>
        <img src='images/about-us.png' width={'100%'} />
      </div>
    </Grid>
  </Grid>
  );
}

export default React.memo(About);