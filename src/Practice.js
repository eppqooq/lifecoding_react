import React, { Component, useState, useEffect }from 'react';


function Practice () {
    let [funcShow_tf, setFuncShow_tf] = useState(true);
    let [classShow_tf, setClassShow_tf] = useState(true);
    return (
        <div className='containner'>
            <h1>Hello world</h1>
            <button onClick={() => funcShow_tf ? setFuncShow_tf(false) : setFuncShow_tf(true) }>funcSwitch</button>
            <button onClick={() => classShow_tf ? setClassShow_tf(false) : setClassShow_tf(true)}>classSwitch</button>
            

            { funcShow_tf ? <FuncComp initNumber={2}/> : null}
            { classShow_tf ? 
                <ClassComp 
                initNumber={2}
                initDate = {new Date().toString()}/> : null
                }
        </div>
    )
}
let funcStyle = 'color:green';
let funcId = 0;
function FuncComp (props) {
    let numberState = useState(props.initNumber);
    let [date, setDate] = useState(new Date().toString());

    useEffect(()=> {
        console.log('componentDidMount');
        return console.log('ComponentWillUnMount?');
    },[]);


    useEffect( ()=> {
        console.log('%c func =>> 1111useEffect number (componentDidMount & ComponentDidUpdate)'+(++funcId),funcStyle);    
        document.title = numberState[0];
        return ()=>{
            console.log('%c func =>> 1111useEffect number return (componentDidMount & ComponentDidUpdate)'+(++funcId),funcStyle);    
        };
    }, [numberState[0]]);
     
    //side effect : 부(가적인) 작용
    useEffect( ()=> {
        console.log('%c func =>> 1111useEffect number (componentDidMount & ComponentDidUpdate)'+(++funcId),funcStyle);    
        document.title = numberState[0];
        return ()=>{
            console.log('%c func =>> 1111useEffect number return (componentDidMount & ComponentDidUpdate)'+(++funcId),funcStyle);    
        };
    }, [numberState[0]]);

    useEffect( ()=> {
        console.log('%c func =>> 1111useEffect date (componentDidMount & ComponentDidUpdate)'+(++funcId),funcStyle);    
        document.title = date;
        return ()=>{
            console.log('%c func =>> 1111useEffect date return (componentDidMount & ComponentDidUpdate)'+(++funcId),funcStyle);    
        };
    }, [date]);
     
    console.log('%c func => render'+(++funcId),funcStyle);
    return ( 
        <div className='container'>
                <h2>
                    Func style component
                </h2>
                <p>
                    Number : {numberState}
                </p>
                <p>
                    Date : {date}
                </p>
                <input type='button' value = 'random' onClick = {
                    (e) => {
                        numberState[1](Math.random());
                    }
                }></input>
                <input type='button' value = 'date' onClick = {
                    (e) => {
                        setDate(new Date().toString());
                    }
                }></input>
            </div>
    );
}

class ClassComp extends Component{
    constructor(props){
        super (props);
        this.state = {
            number : this.props.initNumber,
            date : this.props.initDate
        };
    }
    
    

    UNSAFE_componentWillMount(){
        console.log('%cclass => UNSAFE_componentWillMount(){','color:blue');
    }
    UNSAFE_componentWillUnMount(){
        console.log('%cclass => UNSAFE_componentWillUnMount(){','color:blue');
    }
    componentDidMount(){
        console.log('%cclass => componentDidMount()','color:blue');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('%cclass => shouldComponentUpdate(nextProps, nextState)','color:blue');
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log('%cclass => componentWillUpdate(nextProps, nextState)','color:blue');
    }



    render() {
        console.log('%cclass => render() ','color:blue');
        return (
            <div className='container'>
                <h2>
                    class style component
                </h2>
                <p>
                    Number : {this.state.number}
                </p>
                <p>
                    Date : {this.state.date}
                </p>
                <input type='button' value = 'random' onClick = {
                    (e) => {
                        this.setState({number:Math.random()});
                    }
                }>

                </input>

                <input type='button' value = 'date' onClick = {
                    (e) => {
                        this.setState({date:new Date().toString()});
                    }
                }>

                </input>
            </div>
        );
    }
}

export default Practice;