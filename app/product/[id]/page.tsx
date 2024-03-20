import React from 'react';
import { getItemById,  getItems } from "../../utils/products";
import ProductPage from '../../Components/ProductPage/';

export const revalidate = 3600;

export default async function Page({ params: { id },}: { params: { id: string }}) {
  
  const params = {
    limit:10,
    skip:0,
    select:'title,category,price,thumbnail,discountPercentage'
  }
  const item = await getItemById(id);
  const items = await getItems(params);

  return <ProductPage item={item} items={items} />
}