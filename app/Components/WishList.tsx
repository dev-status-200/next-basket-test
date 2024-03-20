import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { removeWish } from '../features/wishlist/wishSlice';
import { CiHeart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';

const WishList = ({count, cart}) => {

    const dispatch = useDispatch();

    const decrease = (item) => {
      dispatch(removeWish({...item}))
    }

  return (
    <div style={{
      position:'absolute',
      display:(cart && count.length>0)?'block':'none',
      backgroundColor:'white',
      border:'1px solid silver',
      borderRadius:10,
      top:100,
      right:30,
      padding:20,
    }}>
    <div className='black '><CiHeart className='mx-2' /> Your Wishlist:</div>
    <hr/>
      <div style={{width:400}}>
        {count.map((x, index)=>{
          return(
            <Grid key={x.id} className='m-2' container justifyContent={'space-between'}>
              <Grid className='px-2' md={11}>
                <div className='flex'>
                <img src={x.thumbnail} height={40} width={40} />
                <span className='px-2'><>{x.title}</></span>
                </div>
              </Grid>
              <Grid md={1}>
                <RemoveCircleOutlineIcon className='remove-icon' onClick={()=>decrease(x)} />
              </Grid>
              {index!=count.length-1 &&
              <Grid md={12}>
                <hr className='mb-0' />
              </Grid>
              }
            </Grid>
        )})}
      </div>
    </div>
  );
}

export default React.memo(WishList);