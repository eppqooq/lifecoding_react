import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch, Link, HashRouter, NavLink, useParams} from 'react-router-dom'

//import './App.css'; 
//import WithRedux from './WithRedux'
//import {Provider} from 'react-redux';
//import store from './redux/store'
//import WithoutRedux from './WithoutRedux'
//import Practice from './Practice'
//import App from './App'; 

// React Router Dom
function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home......
    </div>
  )
}

let topics = [
  {id:0, title:'Um... Sorry', desc:'Not founded'},
  {id:1, title:'HTML', desc:'HTML is ...'},
  {id:2, title:'JS', desc:'JS is ...'},
  {id:3, title:'React', desc:'React is ...'}
]

function Topic() {
  const params = useParams();
  console.log ( 'params : ', params, params.topic_id);
  const topic_id = Number(params.topic_id);
  const topic_idx = topics.reduce( (prev, val, idx, arr) => {
    prev = val.id === topic_id ? idx : prev;
    return prev;
  },-1);
  console.log(topic_idx);
  return (
    <div>
      <h3> { topic_idx === -1 ? topics[0].title : topics[topic_idx].title } </h3>
      { topic_idx === -1 ? topics[0].desc : topics[topic_idx].desc }
    </div>
  );
}

function Topics() {
  let list = topics.map( T => {
    if(T.id !== -1){
      return(
      <li key={T.id}><NavLink to ={'/topics/'+T.id} >{T.title}</NavLink></li>
    )} else {
      return null;
    }   
  });

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {list}
      </ul>
      <Switch>
        <Route path='/topics/:topic_id'>
          <Topic></Topic>
        </Route>
      </Switch>

    </div>
  )
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact......
    </div>
  )
}


function App(){
  return (
    <div>
      <h1> React Router DOM example</h1>
      <ul>
     
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='./topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>

      </ul>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route  path='/topics'><Topics /></Route>
        <Route  exact path='/contact'><Contact /></Route>
        <Route  path='/'>Not found</Route>
      </Switch>
    </div>
  );
}
//NavLink : 선택한 <a>에 class='active'를 부여한다
/* <a> 대신 <Link>를 사용하여, 화면 깜빡임 없이 화면, URL을 이동한다.
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
*/


//-----------------------------------
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
//   <HashRouter>
//     <App/>
//   </HashRouter>, 
  document.getElementById('App')
);

/*
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WithRedux />
    </Provider>
  </React.StrictMode>,
  document.getElementById('WithRedux')
);
*/
// ReactDOM.render(
//   <React.StrictMode>
//     <WithoutRedux />
//   </React.StrictMode>,
//   document.getElementById('WithoutRedux')
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reactDom.render(
//   <React.StrictMode>
//     <Practice></Practice>
//   </React.StrictMode>,
//   document.getElementById('practice')
// )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
