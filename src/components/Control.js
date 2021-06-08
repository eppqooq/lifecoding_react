import React, {Component} from 'react';
class Control extends Component {
    render(){
        console.log('Subject App render()');
      return (
        <ul>
          <li>
            <a href='/create' onClick={ e => {
              e.preventDefault();
              this.props.onChangeMode('create');
            }}>create</a>
          </li>
          <li>
            <a href='/update' onClick={ e => {
              e.preventDefault();
              this.props.onChangeMode('update');
            }}>update 이거 작동안함</a>
          </li>
          <li>
            <input type='button' value='delete 이 아이도 X' onClick={ e => {
              e.preventDefault();
              this.props.onChangeMode('delete');
            }}/>
          </li>
        </ul>
      );
    }
  }
  export default Control; 