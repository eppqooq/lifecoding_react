import React, {Component} from 'react';

class CreateContent extends Component {
    
    render(){
        console.log('Content App render()');
      return (
        <article>
              <h2>Create</h2>
              <form action='/create_process' method='post'
                onSubmit={
                    (e) => {
                    e.preventDefault();
                    this.props.onSubmit({
                      selected_content_id : this.props.max_content_id,
                      id:this.props.max_content_id,
                      title: e.target.title.value,
                      desc:e.target.desc.value
                    });
                  }}
              >
                <p>
                  <input type='text' name='title' placeholder='title'></input>
                </p>
                <p>
                  <textarea name='desc'  placeholder ='description'></textarea>
                </p>
                <p>
                  <input type='submit'/>
                </p>
              </form>
        </article>
      );
    }
  }
  export default CreateContent;