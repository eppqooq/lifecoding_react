import AddNumber from '../../components/withRedux/AddNumber';
import {connect} from 'react-redux';
function mapReduxStateToReactProps (state) {
    return {
        number : state.number
    }; // parent인 addNumberRoot에서 넘길 props가 없다.
}
function mapReduxDispatchToReactProps (dispatch) {
    return {
        addNumberHandler : (num) => {
            dispatch({type : 'INCREMENT', number : num});
        }
    }; // 이벤트 기능(숫자 더하는)만 있다.
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(AddNumber);
/*
import React, { useState } from 'react';
import store from '../store'

export default function AddNumberContainer(){        
        let number = useState(store.getState().number)[0];
        return (
            <AddNumber 
                number = {number}
                addNumberHandler = { 
                    (num) => {
                        store.dispatch({ type : 'INCREMENT', number : num});
                    }
                }
                />
            );
}
*/
