import DisplayNumber from '../../components/withRedux/DisplayNumber'
import {connect} from 'react-redux';
function mapReduxStateToReactProps (state) {
    return {
        number : state.number // Props 'number'를 넘긴다.
    };
}

function mapReduxDispatchToReactProps () {
    return null; // 이벤트 기능이 없어서
}

export default connect( mapReduxStateToReactProps,  mapReduxDispatchToReactProps)(DisplayNumber);
/*
import React, {Component} from 'react';
import store from "../store"
export default class DisplayNumberContainer extends Component {    
        state = {
            number : store.getState().number
        };
        componentDidMount(){
            store.subscribe(() => {this.setState({number : store.getState().number})});
        }
                
    render() {
        return (
          <div>
              <DisplayNumber
                number = {this.state.number}/>
          </div>  
        );
    }
}
*/