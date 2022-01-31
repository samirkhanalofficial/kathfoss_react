import React from 'react';
import PropTypes from 'prop-types';

function ChildComponent(props) {
    function inputchanged(event){
        props.changeparentstate(event.target.value);
    }
  return <div>Child Component<br/>
      <input type="text" onInput={inputchanged}  />

  </div>;
}

ChildComponent.propTypes = {
    parentstate:PropTypes.string.isRequired,
    changeparentstate:PropTypes.string.isRequired
};

export default ChildComponent;
