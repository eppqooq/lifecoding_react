import React, { Component }  from 'react';

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
                            () => {
                                this.props.addNumberHandler(Number(this.state.number));
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