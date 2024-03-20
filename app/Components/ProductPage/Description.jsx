import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

const Description = () => {
  return (
    <>
    <div className='container'>
      <div className='py-4'>
        <Grid container justifyContent={'center'} spacing={10}>
          <Grid md={'auto'}>
            <b className='grey-1 fs-14'>Description</b>
          </Grid>
          <Grid md={'auto'}>
            <b className='grey-1 fs-14'>Additional Information</b>
          </Grid>
          <Grid md={'auto'}>
            <b className='grey-1 fs-14'>Reviews <span className='green'>{"(0)"}</span></b>
          </Grid>
        </Grid>
      </div>
      <hr className='mt-0' />
      <div className='my-5'>
        <Grid container justifyContent={'center'} spacing={10}>
          <Grid md={6} xs={12}>
            <h3><b>the quick fox jumps over</b></h3>
            <p className='mt-4 grey-1'>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p className='grey-1 left-border'>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p className='mt-5 grey-1'>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </Grid>
          <Grid md={5} className='' xs={12}>
            <img src='/images/desc.png' height={320} />
          </Grid>
        </Grid>
      </div>
    </div>
    </>
  );
}

export default Description;