'use client'
import React from 'react';
import Link from 'next/link';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Unstable_Grid2';
import useWindowSize from '../helpers/useWindowSize';

const Footer = () => {

  const width = useWindowSize().width;

  return (
  <>
    <div className='bg-grey'>
      <div className={`container ${width>480?'pt-4':'p-4 mb-4'}`}>
        <Grid container justifyContent={'space-between'}>
          <Grid xs={12} md={6}> 
            <Link href="/" className='nav-logo'>Bandage</Link>
          </Grid>
          <Grid xs={12} md={6}>
            <div className={width>480?'text-end':''}>
              <FacebookRoundedIcon sx={{color:'#23A6F0', fontSize:30}} />
              <InstagramIcon className='mx-3' sx={{color:'#23A6F0', fontSize:30}} />
              <TwitterIcon sx={{color:'#23A6F0', fontSize:30}} />
            </div>
          </Grid>
        </Grid>
        {width>480 && <hr/>}
      </div>
    </div>
    <div className={`container ${width>480?'':'pl-3'} `}>
      <Grid container spacing={2}>
        <Grid xs={12} md={2} className="py-">
          <p className='my-4'><b>Company Info</b></p>
          <div className='grey-1 my-2'><b>About Us</b></div>
          <div className='grey-1 my-2'><b>Carrier</b></div>
          <div className='grey-1 my-2'><b>We are hiring</b></div>
          <div className='grey-1 my-2'><b>Blog</b></div>
        </Grid>
        <Grid xs={12} md={2} className="py-">
          <p className='my-4'><b>Company Info</b></p>
          <div className='grey-1 my-2'><b>About Us</b></div>
          <div className='grey-1 my-2'><b>Carrier</b></div>
          <div className='grey-1 my-2'><b>We are hiring</b></div>
          <div className='grey-1 my-2'><b>Blog</b></div>
        </Grid>
        <Grid xs={12} md={2} className="py-">
          <p className='my-4'><b>Company Info</b></p>
          <div className='grey-1 my-2'><b>About Us</b></div>
          <div className='grey-1 my-2'><b>Carrier</b></div>
          <div className='grey-1 my-2'><b>We are hiring</b></div>
          <div className='grey-1 my-2'><b>Blog</b></div>
        </Grid>
        <Grid xs={12} md={2} className="py-">
          <p className='my-4'><b>Company Info</b></p>
          <div className='grey-1 my-2'><b>About Us</b></div>
          <div className='grey-1 my-2'><b>Carrier</b></div>
          <div className='grey-1 my-2'><b>We are hiring</b></div>
          <div className='grey-1 my-2'><b>Blog</b></div>
        </Grid>
        <Grid xs={12} md={4} className="py-">
          <p className='my-4'><b>Get In Touch</b></p>
          <input className='footer-btn-input' placeholder='Your Email' />
          <button className='footer-btn' type='button'>Subscribe</button>
          <p className='grey-1 fs-12 mt-2'>Lore imp sum dolor Amit</p>
        </Grid>
      </Grid>
    </div>
    <div className='bg-grey mt-5'>
      <div className='container-main'>
        <div className='py-4 grey-1 text-center'>
          <b>Made With Love By Finland All Right Reserved</b>
        </div>
      </div>
    </div>
  </>
  );
}

export default React.memo(Footer);