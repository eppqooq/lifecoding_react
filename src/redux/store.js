import {createStore} from 'redux';

export default createStore((state, action) => {
    let nextState = state === undefined ?
                    { number : 0} :
                    Object.assign({}, state);

    if(action.type === 'INCREMENT') {
        nextState.number += action.number;
    }
    return nextState;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())