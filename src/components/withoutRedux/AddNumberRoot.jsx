import React, { Component, useState, useEffect }  from 'react';
//import AddNumber from '../../components/withoutRedux/AddNumber'
import AddNumber from '../../redux/containers/AddNumber'
import store from '../../redux/store'

export default class AddNumberRoot extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : store.getState().number
        }
    }
    render() {
        return (
            <div>
                <h1>Add Number Root</h1>
                <AddNumber/>
            </div>
        )
    }
}