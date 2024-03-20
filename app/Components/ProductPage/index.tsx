'use client'

import React, { useEffect, useState } from 'react';
import '/app/css/product.css';
import "/app/css/home.css";
import Grid from '@mui/material/Unstable_Grid2';
import Description from "./Description";
import Product from "../Home/Product";
import Item from "./Item";
import useWindowSize from '../../helpers/useWindowSize';

const ProductPage = (props:any) => {

  const [item, setItem] = useState({
    thumbnail:'',
    images:['',''],
    title:'',
    rating:0,
    price:0.0,
    stock:0
  });

  const width = useWindowSize().width;

  useEffect(() => {
    setItem(props.item);
  }, []);

  return (
  <div className='product-styles'>
    <Item item={item} />
    {width>480 && 
    <>
      <div className='hidden'>
        <Description/>
      </div>
      <div className='px-5'>
        <Grid container justifyContent={'center'}>
          <Grid md={10}>
            <div className='px-4'>
              <div className='black my-2'>BESTSELLER PRODUCTS</div>
            </div>
          </Grid>
          <Grid md={10}>
            <div className='home-styles'>
              <Product products={props.items.products} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
    }
    <div className='bg-grey py-5'>
      <div className='py-5'>
        {width<480 && <div className='py-5' ></div>}
      <Grid container justifyContent={'center'} spacing={13}>
        <Grid md={'auto'} xs={12}>
          <div className='text-center'>
            <img src='/images/hooli.png' width={150} />
          </div>
        </Grid>
        <Grid md={'auto'} xs={12}>
        <div className='text-center'>
          <img src='/images/lyft.png' width={100} />
          </div>
        </Grid>
        <Grid md={'auto'} xs={12}>
        <div className='text-center'>
          <img src='/images/hat.png' width={80} />
          </div>
        </Grid>
        <Grid md={'auto'} xs={12}>
        <div className='text-center'>
          <img src='/images/stripe.png' width={150} />
          </div>
        </Grid>
        <Grid md={'auto'} xs={12}>
        <div className='text-center'>
          <img src='/images/aws.png' width={100} />
          </div>
        </Grid>
        <Grid md={'auto'} xs={12}>
        <div className='text-center'>
          <img src='/images/discord.png' width={70} />
          </div>
        </Grid>
      </Grid>
      </div>
    </div>
  </div>
  );
}

export default React.memo(ProductPage);