import React, {Component} from 'react';

class UpdateContent extends Component {
    constructor(props){
      super(props);
      this.state = {
        id : this.props.id,
        title : this.props.title,
        desc : this.props.desc
      };
      console.log('---constructor');
      console.log(this.props);
      console.log(this.state);
      console.log('---------------');
    }
    
    

    componentWillReceiveProps(nextProps){
      console.log(this.props.id === nextProps.id);
      if(this.props.id === nextProps.id){
        return false;
      } else {
        this.setState( {
          id : nextProps.id,
          title : nextProps.title,
          desc : nextProps.desc
        });
        return true;
      }
        
       
      
      // console.log(this.props, this.state);
      // console.log(nextProps, nextState);
      // console.log ( this.props === nextProps, this.state === nextState);
      // console.log ( );
      
    }

    componentWillUnmount() {
      console.log('componentWillUnmount');
    }
  

    // shouldComponentUpdate(newProps, newState){
    //   if( newProps !== this.props || newState !== this.state){
    //     console.log(111111);
        
    //     return true;
    //   } else {
    //     console.log(33333);
    //     return false;
    //   }
    // }
    
    
    render(){
        console.log('UpdateContent App render()');
        console.log(JSON.stringify(this.state));
      return (
        <article>
              <h2>Update</h2>
              <form action='/update_process' method='post'
                onSubmit={
                    (e) => {
                    e.preventDefault();
                    this.props.onSubmit({
                      id : this.state.id,
                      title : this.state.title,
                      desc : this.state.desc
                    });
                  }}
              >
                <input type='hidden' name='id' value = {this.state.id}></input>
                <p>
                  <input type='text' name='title' placeholder='title' value={this.state.title}
                          onChange = { (e) => this.setState({ [e.target.name] : e.target.value})}></input>
                </p>
                <p>
                  <textarea name='desc'  placeholder ='description' value={this.state.desc}
                            onChange = { (e) => this.setState({ [e.target.name] : e.target.value})}></textarea>
                </p>
                <p>
                  <input type='submit'/>
                  &emsp;<input type='submit' value='삭제'/>
                </p>
              </form>
        </article>
      );
    }
  }
  export default UpdateContent;
  
  