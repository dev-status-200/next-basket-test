import React from 'react';
import Link from "next/link";

const Products = ({products}) => {

  const Product = ({item}) => {
    return(
    <Link className='product text-center' href={`/product/${item.id}`}> 
      <>
      <img 
        src={item.thumbnail} 
        height={290} 
        width={200} 
      />
      <h6>{item.title}</h6>
      <p>{item.category}</p>
      <div className='price'>
        <span>${item.price.toFixed(2)}</span>
        <span className='discounted'>
          {/* Discounted Price Calculation */}
          ${(item.price - (item.price/100) * item.discountPercentage ).toFixed(2)}
        </span>
      </div>
      </>
    </Link>
    )
  }

  return (
    <div className='products-container'>
    {products.map((item)=>{
      return(
        <Product item={item} key={item.id} />
      )})
    }
  </div>
  );
}

export default React.memo(Products);