import React, { Component }  from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

export default class AddNumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : this.props.number
        }
    }
        
    render() {
        return (
            <div>
                <h1>Add Number</h1>
                <input type='button' 
                        value='+'
                        onClick={
                            (e) => {
                                e.preventDefault();
                                this.props.addNumberHandler(this.props.number + this.state.number);
                            }
                            
                        }
                        />
                <input type='text' 
                        value={this.state.number}
                        onChange = {(e) => {
                            this.setState({number : Number(e.target.value)});
                        }
                    }
                />
            </div>
        );
    }
}