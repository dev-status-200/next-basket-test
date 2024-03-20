'use client'
import React, { useState, useEffect } from 'react';
import { LuPhone, LuInstagram } from "react-icons/lu";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { CiUser, CiHeart } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
import Link from 'next/link';
import useWindowSize from '../helpers/useWindowSize';
import Grid from '@mui/material/Unstable_Grid2';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Cart from './Cart';
import WishList from './WishList';

const Header = () => {

  const count = useSelector((state:RootState) => state.cart.value);
  const wishlistItems = useSelector((state:RootState) => state.wishlist.value);

  const width = useWindowSize().width;
  const [collapse, setCollapse] = useState(false);
  const [cart, setCart] = useState(false);
  const [showWishList, setShowWishList] = useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
  <>
    {width>480 &&
    <>
    <div className='top-bar'>
      <div>
        <b><LuPhone size={20} /> <span className=''>{"(225) 555-0118"}</span></b>
        <b className='mx-5'>michelle.rivera@example.com</b>
      </div>
      <div>
        <b>Follow Us  and get a chance to win 80% off</b>
      </div>
      <div>
          <div className='mx-3 social-links'>
            <b>Follow Us{" "}:</b>
            <LuInstagram size={20} />
            <FaYoutube size={20} />
            <FaFacebook size={20} />
            <FaTwitter size={20} />
          </div>
      </div>
    </div>
    <div className='nav-bar container'>
      <Link href="/" className='nav-logo'>Bandage</Link>
      <div className='navbar-section'>
        <Link href="/" className='nav-links'>Home</Link>
        <Link href="/" className='nav-links'>Shop</Link>
        <Link href="/" className='nav-links'>About</Link>
        <Link href="/" className='nav-links'>Blog</Link>
        <Link href="/" className='nav-links'>Contact</Link>
        <Link href="/" className='nav-links'>Pages</Link>
      </div>
      <div className='user-actions'>
        <p>
          <b className=''>
            <CiUser size={20} />
            <span className='mx-2'>Login / Register</span>
          </b>
        </p>
        <p>
          <SlMagnifier size={20} />
        </p>
        <p 
          
          onClick={()=>setCart(true)}
          onMouseLeave={()=>setCart(false)}
        >
          <BsCart size={20} className='cursor' /> {count.length}
          <Cart count={count} cart={cart} />
        </p>
        <p
          
          onClick={()=>setShowWishList(true)}
          onMouseLeave={()=>setShowWishList(false)}
        >
          <CiHeart className='cursor' size={20} /> {wishlistItems.length}
          <WishList count={wishlistItems} cart={showWishList} />
        </p>
      </div>
    </div>
    </>
    }
    {width<480 && 
    <div className='bg-white pb-5'>
      <Grid container justifyContent={"space-between"} className='px-3 pt-4'>
        <Link href="/" className='nav-logo-sm'>Bandage</Link>
        <SignalCellularAltIcon sx={{fontSize:35}} onClick={toggle} />
      </Grid>
      {collapse && 
      <Grid className='text-center mt-4' container flexDirection={'column'} spacing={4}>
        <Grid><Link href="/" className='nav-links-sm'>Home</Link></Grid>
        <Grid><Link href="/" className='nav-links-sm'>Shop</Link></Grid>
        <Grid><Link href="/" className='nav-links-sm'>About</Link></Grid>
        <Grid><Link href="/" className='nav-links-sm'>Blog</Link></Grid>
        <Grid><Link href="/" className='nav-links-sm'>Contact</Link></Grid>
        <Grid><Link href="/" className='nav-links-sm'>Pages</Link></Grid>
        <Grid className='user-actions'>
          <p>
            <b className='flex'>
              <CiUser size={30} />
              <span className='mx-2 fs-20'>Login / Register</span>
            </b>
          </p>
        </Grid>
        <Grid><SlMagnifier className='blue' size={30} /></Grid>
        <Grid>
          <BsCart className='blue' size={30} />
          <span className='blue mx-1'>
            {count.length}
          </span>
        </Grid>
        <Grid><CiHeart className='blue' size={30} /></Grid>
      </Grid>
      }
    </div>
    }
  </>
  );
}

export default React.memo(Header);