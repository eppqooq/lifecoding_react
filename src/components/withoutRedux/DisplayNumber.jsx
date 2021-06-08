import React, { Component, useState, useEffect }  from 'react';

export default class DisplayNumber extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Display Number</h1>
                <input type='text' value={this.props.number} readOnly/>
            </div>
        );
    }
}