import React, {Component} from 'react';
import TOC from "./components/TOC"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import UpdateContent from "./components/UpdateContent"
import Subject from "./components/Subject"
import Control from "./components/Control"
import './App.css';



// 클래스형 컴포넌트
class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode : 'welcome',
      selected_content_id : 2,
      welcome : {title : 'Welcome', desc: 'Hello, React!!'},
      subject : { title : 'WEB', sub:'World Wide Web!'},
      contents : [
        {id:1, title:'HTML', desc : 'HTML is for information'},
        {id:2, title:'CSS', desc : 'CSS is for information'},
        {id:3, title:'JavaScript', desc : 'JavaScript is for information'}
      ]
    };
  }

  getReadContent = () => {
      return this.state.contents.filter( C => C.id === this.state.selected_content_id)[0];
  }
  getContent() {
      console.log('Call App render()');
      let _title, _desc, _article, _content = null;
      if( this.state.mode === 'welcome'){
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc}/>; 
      }
      else if(this.state.mode === 'read'){
        _content = this.getReadContent();
        _article = <ReadContent title = {_content.title} desc = {_content.desc} />;
      } else if (this.state.mode === 'create') {
        _article = <CreateContent contents={this.state.contents}
                              max_content_id = {this.max_content_id+1}
                                  onSubmit = { data => {  
                                    this.max_content_id += 1;
                                    this.selected_content_id = data.selected_content_id;
                                    this.setState({
                                      mode : 'read',
                                      contents : this.state.contents.concat(data)});
                                  }}/>; 
      } else if (this.state.mode === 'update'){
        _content = this.state.contents.reduce( (prev, val) => {
                                              if(val.id === this.state.selected_content_id){  
                                                return prev = val;
                                              } else {
                                                return prev;
                                              }});
        console.log(_content);
        _article = <UpdateContent title = {_content.title} 
                                  desc = {_content.desc}
                                  id = {_content.id}
                                  onSubmit = { data => {
                                    let idx = this.state.contents.findIndex(cn => cn.id === data.id);
                                    let _contents = this.state.contents;
                                    _contents[idx] = { id : data.id, title : data.title, desc : data.desc };
                                    this.setState({ 
                                      selected_content_id : data.id,
                                      contents : _contents});
                                  }}
                                  />
      }
      console.log('render', this);
      return _article;
  };

  render(){
    
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage = {
            function(){
              this.setState({mode : 'welcome'});
            }.bind(this)
          }
        />
        
        <TOC data={this.state.contents}
        onChangePage = { arg => {
          //alert('hi?');
          this.setState({
            mode : 'update',
            selected_content_id : Number(arg.id)
        });
        console.log('selected_id :  ',this.state.selected_content_id);
        }}
        />
        
        <Control
          onChangeMode = {
            function(_mode){
              this.setState({
                mode:_mode
              });
            }.bind(this)
          }
        />
        {this.getContent()}
      </div>
    );
  }
}


export default App;
