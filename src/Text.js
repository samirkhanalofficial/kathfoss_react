import React from "react"

function Text() {
    // state 
    const [name,setName] = React.useState('initial Name'/* initial name */);
    function buttonClick(){
        setName('Name Changed')
    }
    return (<div>
        <h1> working with states </h1>
        <b>current state {name}</b>
        <button onClick={buttonClick}>change</button>
    </div>);

    }
    export default Text