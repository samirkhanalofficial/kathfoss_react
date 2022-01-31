import React from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    const [parentstate,changeparentstate] = React.useState('test');
    return <div>
        Parent Component 
        <br/>
        parent state : {parentstate}
        <ChildComponent 
        parentstate={parentstate}
        changeparentstate={changeparentstate}
        ></ChildComponent>
        </div>;
}