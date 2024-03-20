import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import toComma from "../helpers/toComma";
import { addItem, removeItem } from '../features/counter/counterSlice';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import { BsCart } from "react-icons/bs";

const Cart = ({count, cart}) => {

  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  const increase = (item) => {
    dispatch(addItem({...item}))
  }

  const decrease = (item) => {
    dispatch(removeItem({...item}))
  }

  useEffect(() => {
    let tempTotal = 0;
    count.forEach((x)=>{
      tempTotal = tempTotal + x.price*x.qty
    });
    setTotal(tempTotal)
  }, [count]);

  return (
    <div style={{
      position:'absolute',
      display:(cart && count.length>0)?'block':'none',
      backgroundColor:'white',
      border:'1px solid silver',
      borderRadius:10,
      top:100,
      right:30,
      paddingTop:20,
      paddingBottom:10,
    }}>
      <div style={{width:400}}>
        <div className='black mx-3 flex'><BsCart className='mx-2' />Your Cart</div>
        <hr/>
        {count.map((x)=>{
          return(
            <Grid key={x.id} className='m-2' container justifyContent={'space-between'}>
              <Grid className='px-2' md={8}>
                <div className='flex'>
                  <img src={x.thumbnail} height={30} width={30} />
                  <span className='mx-3'>{x.title}</span>
                </div>
              </Grid>
              <Grid md={3}>
                <AddIcon className='add-icon' 
                  onClick={()=>increase(x)}
                />
                  {" "}{x.qty}{" "}
                <RemoveIcon className='remove-icon' 
                  onClick={()=>decrease(x)}
                />
              </Grid>
              <Grid md={12}>
                <hr className='' />
              </Grid>
            </Grid>
        )})}
        <div className='black'>
          <div className='px-3 flex f-between'>
            <h5>Cart Total:</h5>
            <h5 className='green'>${toComma(total)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Cart);