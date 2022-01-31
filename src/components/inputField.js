import React from 'react';

export default function InputField(props) {
  
  return <div>   <label> {props.label} </label>
  <input type="text" {...props} placeholder={('Enter Your '+props.label).toLocaleLowerCase()}  />
  </div>;
}
