import React from 'react';

export default function InputText() {
    const [value2 , setValue2]= React.useState('');
    function changeValue(event){
        setValue2(event.target.value );
    }
  return (<div>
      <h3>working with inputs</h3>
      <input type="text"  onInput={changeValue} />
        <br />
      <b>{value2}</b>
  </div>);
}
