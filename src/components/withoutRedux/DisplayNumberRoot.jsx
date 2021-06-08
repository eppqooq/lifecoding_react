import React, { Component, useState, useEffect }  from 'react';
import DisplayNumber from './DisplayNumber'


export default class DisplayNumberRoot extends Component {
    constructor(props){
        super(props);
        this.state = {number : this.props.number}
    }
    render() {
        return (
            <div>
                <h1>Display Number Root</h1>
                <DisplayNumber
                    number = {this.props.number}/>
            </div>
        )
    }
}