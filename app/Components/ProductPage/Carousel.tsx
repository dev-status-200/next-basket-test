import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
  <div className='carousel'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {props.item.images.map((image, index)=>{
        return(
        <Carousel.Item key={index}>
          <img src={image} className='product-img' />
        </Carousel.Item>
      )})}
    </Carousel>
    <div className='images-list'>
      {props.item.images.map((image, index)=>{
        return(
          <img key={index} src={image} onClick={()=>setIndex(index)} />
        )
      })}
    </div>
  </div>
  );
}

export default React.memo(ControlledCarousel);