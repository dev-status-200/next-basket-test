'use client'
import React from 'react';
import { Col } from "react-bootstrap";
import Grid from '@mui/material/Unstable_Grid2';
import useWindowSize from '../../helpers/useWindowSize';

const Services = () => {

  const width = useWindowSize().width;
  const list = [
    { title:'Easy Wins', img:'images/easy.png', desc:'Get your best looking smile now!' },
    { title:'Concrete', img:'images/concrete.svg', desc:'Defalcate is most focused in helping you discover your most beautiful smile' },
    { title:'Hack Growth', img:'images/hack.svg', desc:'Overcame any hurdle or any other problem.' }
  ];

  return (
  <div className='text-center'>
    <div className='px-5 mb-5'>
      <div className='grey-md'>Featured Products</div>
      <div className='black my-2'>THE BEST SERVICES</div>
      <div className='grey-sm'>Problems trying to resolve the conflict between</div>
    </div>
    <Grid container justifyContent={'center'} className={`py-5 ${width<480?'px-5 mx-5':''}`}>
      {list.map((info)=>{
      return(
        <Col md={4} key={info.title} className={width<480?'info-sm':'info'}> 
          <img src={info.img} height={100} />
          <h3 >{info.title}</h3>
          <p>{info.desc}</p>
        </Col>
      )})}
    </Grid>
  </div>
  );
}

export default React.memo(Services);