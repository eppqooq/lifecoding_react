import React, { Component, useState, useEffect }  from 'react';
import AddNumberRoot from './components/withoutRedux/AddNumberRoot'
import DisplayNumberRoot from './components/withoutRedux/DisplayNumberRoot'

function WithoutRedux() {
    
    let [number, setNumber] = useState(7);
    
    return (
        <div className = 'App'>
            <h1>ROOT</h1>
            <AddNumberRoot
                number = {number}
                addNumberHandler = {
                    (num) => {
                        setNumber(num);
                    }
                }
                />

            <DisplayNumberRoot
                number = {number}
                />
        </div>
    );
}




export default WithoutRedux;