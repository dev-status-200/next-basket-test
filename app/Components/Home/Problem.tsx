import React from 'react';
import Button from '@mui/material/Button';

const Problem = () => {
  return (
  <div className='problem-bg text-center'>
    <p className='blue'>
      <b>Designing Better Experience</b>
    </p>
    <h2 className='mw-600 fs-40'>
      <b>Problems trying to resolve the conflict between </b>
    </h2>
    <p className='my-3 grey-1 mw-500'>
      Problems trying to resolve the conflict between the two major realms of Classical physics:
    </p>
    <h3 className='green'><b>$16.48</b></h3>
    <Button 
      variant="contained" 
      className='my-3' 
      sx={{
        backgroundColor:'#23A6F0', 
        fontSize:12, 
        padding:'10px 30px',
        fontWeight:700
      }}
    >
      ADD YOUR CALL TO ACTION
    </Button>
  </div>
  );
}

export default Problem;
