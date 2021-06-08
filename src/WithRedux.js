import React  from 'react';
import AddNumberRoot from './components/withRedux/AddNumberRoot'

import DisplayNumberRoot from './components/withRedux/DisplayNumberRoot'


function WithRedux() {
    
    return (
        <div className = 'App'>
            <h1>ROOT</h1>
            <AddNumberRoot/>

            <DisplayNumberRoot/>
        </div>
    );
}




export default WithRedux;