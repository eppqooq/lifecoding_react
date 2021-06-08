import React, { Component }  from 'react';
//import AddNumber from '../../components/withoutRedux/AddNumber'
import AddNumber from '../../redux/containers/AddNumber'

export default class AddNumberRoot extends Component {    
    render() {
        return (
            <div>
                <h1>Add Number Root</h1>
                <AddNumber/>
            </div>
        )
    }
}