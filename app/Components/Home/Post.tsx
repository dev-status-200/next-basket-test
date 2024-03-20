import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Post = () => {
  const posts = [
    {
      title:"Loudest à la Madison #1  (L'integral)'",
      desc:"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img:'images/post-one.png'
    },
    {
      title:"Loudest à la Madison #1  (L'integral)'",
      desc:"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img:'images/post-two.png'
    },
    {
      title:"Loudest à la Madison #1  (L'integral)'",
      desc:"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img:'images/post-three.png'
    },
  ]

  return (
  <Grid container spacing={2}>
    {posts.map((post, index)=>{
      return(
      <Grid xs={12} md={4} key={index}>
        <div className='post'>
        <div className='tag'>NEW</div>
          <img src={post.img} width={'100%'} />
          <div className='content'>
            <div>
              <span className='blue fs-16'>Google</span>
              <span className='grey-1 fs-16 mx-3'>Trending</span>
              <span className='grey-1 fs-16'>New</span>
            </div>
            <h3 className='my-3'>{post.title}</h3>
            <p>{post.desc}</p>
          </div>
            <div className='flex f-between px-4 pb-4'>
              <div className='flex'>
                <AccessAlarmIcon sx={{ color: '#23A6F0', fontSize:16 }} /> <span className='grey-1 mx-2'>22 April 2021</span>
              </div>
              <div className='flex'>
                <img src='/images/Vector.png' /> <span className='grey-1 mx-2'>10 comments</span>
              </div>
            </div>
            <p className='grey-1 px-4 pb-4'>
              <b>Learn More <ArrowForwardIosIcon sx={{ color: '#23A6F0', fontSize:18 }} className='mx-1' /> </b>
            </p>
        </div>
      </Grid>
      )
    })}
  </Grid>
  );
}

export default React.memo(Post);