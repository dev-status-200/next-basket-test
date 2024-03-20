'use client'
import React, { useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Button from '/app/Components/Button.tsx';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Grid from '@mui/material/Unstable_Grid2';
import Carousel from './Carousel';
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../features/counter/counterSlice';
import { addWish } from '../../features/wishlist/wishSlice';
import toComma from "../../helpers/toComma";
import Snack from "../Snack"

const Item = ({item}) => {

  const count = useSelector((state) => state.cart.value);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({...item, qty:1}))
    setMessage("Item Successfully added to cart!")
    setOpen(true)
  };

  const addToWishList = () => {
    dispatch(addWish({...item, qty:1}));
    setMessage("Item Successfully added to Wishlist!")
    setOpen(true)
  };

  return (
    <div className='container-main py-5 bg-grey'>
      <Grid container spacing={10}>
        <Grid md={5} xs={12}>
          <Carousel item={item} />
        </Grid>
        <Grid md={7} xs={12}>
        <div className='flex-column f-between' style={{height:'50vh'}}>
          <div>
            <h3>{item.title}</h3>
            <div className='flex'>
              <Rating name="read-only" value={item.rating} readOnly size="large" />
              <div className='mx-2 grey-1 fs-20'><b>10 reviews</b></div>
            </div>
            <div className='my-4'>
              <h3><b>${toComma(item.price)}</b></h3>
            </div>
            <p>
              <b className='grey-1'>Availability</b>
              {" : "}
              <b>
                {item.stock==0?
                  <span>Out of Stock</span>:
                  <span className='blue'>In-Stock</span>
                }
              </b>
            </p>
          </div>
          <div>
            <hr/>
            <div className='flex gap-20'>
              <div className='option option-1'></div>
              <div className='option option-2'></div>
              <div className='option option-3'></div>
              <div className='option option-4'></div>
            </div>
            <div className='mt-5 flex f-between mw-3'>
              <Button title={'Add To Cart'} onClick={addToCart} />
              <div>
                <FavoriteBorderOutlinedIcon className='icon' onClick={addToWishList} />
                <ShoppingCartOutlinedIcon className='icon' onClick={addToCart} />
                <RemoveRedEyeIcon className='icon'  />
              </div>
            </div>
          </div>
        </div>
        </Grid>
      </Grid>
      <Snack open={open} setOpen={setOpen} message={message} />
    </div>
  );
}

export default Item;