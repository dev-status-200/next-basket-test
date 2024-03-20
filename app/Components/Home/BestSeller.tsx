'use client'
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { getItems } from "../../utils/products";
import { Spinner } from "react-bootstrap";
import Button from '@mui/material/Button';

const BestSeller = (props) => {

  const [load, setLoad] = useState(false)
  const [productData, setProductData] = useState({
    products:[], skip:0, total:0
  })

  useEffect(() => {
    setProductData(props.data);
  }, []);

  const isBrowser = () => typeof window !== 'undefined';
  function scroll() {
    if (!isBrowser()) return;
    window.scroll({ top: window.scrollY + 200, behavior: 'smooth' });
  }

  const loadProducts = async() => {
    setLoad(true);
    const params = {
      limit:10,
      skip:productData.skip + 10,
      select:'title,category,price,thumbnail,discountPercentage'
    }
    const res = await getItems(params);
    setLoad(false);
    scroll()
    setProductData({
      ...res,
      products:[...productData.products, ...res.products]
    });
  }

  return (
  <div className='text-center mt-5'>
    <div className='p-5'>
      <div className='grey-md'>Featured Products</div>
      <div className='black my-2'>BESTSELLER PRODUCTS</div>
      <div className='grey-sm'>Problems trying to resolve the conflict between </div>
    </div>
    <Product products={productData?.products} />
    { (productData?.products.length==0||load) && <div className='mt-5' ><Spinner/></div> }
    <div className='my-5 py-5'>
    {productData.products.length!=productData.total &&
      <Button variant="outlined" onClick={loadProducts} className='px-4'>
        <b>Load More Products</b>
      </Button>
    }
    </div>
  </div>
  );
}

export default React.memo(BestSeller);