import React from 'react';

const Button = (props:any) => {
  return (
    <div>
      <button className='btn-custom' onClick={props.onClick} >{props.title}</button>
    </div>
  );
}
export default React.memo(Button);